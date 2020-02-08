import * as React from 'react';
import { ICard } from '../../models/items/ICard';
import ItemMods from '../item-mods/ItemMods';
import { ItemModThemeTypes } from '../item-mods/ItemModThemeTypes';
import { ICardProps } from './ICardProps';

import './card.scss';

class Card extends React.Component<ICardProps, {}> {
  public elementRef: React.RefObject<HTMLDivElement> = React.createRef();

  public render(): JSX.Element {
    const card: ICard = this.props.card;
    const style: React.CSSProperties = this.props.style;
    const itemSrc: string = `https://web.poecdn.com/image/divination-card/${card.artFilename}_panel.png`;
    const stack: string = card.properties[0].values[0][0];

    return (
      <div className='card-wrapper' key={card.id} style={style} ref={this.elementRef}>
        <img className='card-graphic' src={itemSrc} />
        <div className='card-overlay'>
          <div className='card-name'>{card.typeLine}</div>
          <div className='stack'>{stack}</div>
          {this.createCardModsElement()}
          { this.props.card.flavourText !== undefined && this.createFlavourTextElementForCard() }
        </div>
        {
          card.note !== undefined &&
          <ItemMods
            mods={card.note}
            theme={ItemModThemeTypes.NOTE_TEXT}
            style={{margin: '0 0 8px'}}/>
        }
      </div>
    );
  }

  public componentDidMount(): void {
    if (this.props.elementRefCallback) {
      this.props.elementRefCallback(this.elementRef);
    }
  }

  /**
   * Creates an element that displays the card's flavour text
   * @param flavourText flavour text to display in element
   */
  private createFlavourTextElementForCard(): JSX.Element {
    const elements: JSX.Element[] = this.props.card.flavourText
      .map((text: string, index: number) => {
        // Remove markup in a card's flavour text that shouldn't be displayed
        const formattedText: string = text.trim().replace(/<size:[0-9]*>{|<smaller>{|}|/g, '');
        return (
          <span key={`${text}-${index}`}>
            { formattedText }
          </span>
        );
      });
    return (
      <span key={`${this.props.card.id}-flavour-text`} className='card flavour-text'>
        {elements}
      </span>
    );
  }

  /**
   * Creates an element that displays the card's explicit mods
   */
  private createCardModsElement(): JSX.Element {
    const elements: JSX.Element[] = [];

    for (let i = 0; i < this.props.card.explicitMods.length; i++) {
      const mod: string = this.props.card.explicitMods[i];
      // Splits mod into lines
      const tokens: RegExpMatchArray = mod.match(/(<(?!(size:[0-9]*))([^>]*)>{([^}]*)}|(\n))/g);
      let tokensForLine: string[] = [];
      let key: string;

      for (let j = 0; j < tokens.length; j++) {
        const token: string = tokens[j];
        if (token === '\n') {
          key = `${this.props.card.id}-explicit-mod-${i}-${j}`;
          elements.push(this.createExplicitModLineForCard(tokensForLine, key));
          tokensForLine = [];
        } else {
          tokensForLine.push(token);
        }
      }
      key = `${this.props.card.id}-explicit-mod-${i}`;
      elements.push(this.createExplicitModLineForCard(tokensForLine, key));
    }
    return <div className='explicit-mods'>{elements}</div>;
  }

  /**
   * Creates an element that contains a single line of explicit mod text
   * @param tokens Text tokens that make up the line of text
   * @param key Element key
   */
  private createExplicitModLineForCard(tokens: string[], key: string): JSX.Element {
    return (
      <div key={key} className='mods'>
      {
        tokens.map((modToken: string, index: number) => {
          return this.createExplicitModTextForCard(modToken, `${modToken}-${index}`);
        })
      }
      </div>
    );
  }

  /**
   * Creates an element of explicit mod text
   * @param mod Explicit mod to display in element.
   *            A mod will look like '<class-name>{mod-text}'.
   * @param key Element key
   */
  private createExplicitModTextForCard(mod: string, key: string): JSX.Element {
    // Split the card's explicit mod into class name and mod text
    const tokens: string[] = /<([^>]*)>{([^}]*)}/g.exec(mod);
    if (tokens === null || tokens.length < 3) {
      return <span key={key} />;
    }
    return <span key={key} className={tokens[1]}>{tokens[2]}</span>;
  }
}
export default Card;
