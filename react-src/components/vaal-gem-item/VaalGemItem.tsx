import { relative } from 'path';
import * as React from 'react';
import { IGem } from '../../models/items/IGem';
import { IVaalGem } from '../../models/items/IVaalGem';
import { IVaalGemItemProps } from './IVaalGemItemProps';

import GemItemDetails from '../item-details/gem-item-details/GemItemDetails';
import './vaal-gem-item.scss';

class VaalGemItem extends React.Component<IVaalGemItemProps, {}> {
  public elementRef: React.RefObject<HTMLDivElement> = React.createRef();

  public render(): JSX.Element {
    const style: React.CSSProperties = this.props.style;
    const gem: IGem = this.createGem();
    const vaalGem: IGem = this.createVaalGem();

    return (
      <div className='vaal-gem-container' style={style} ref={this.elementRef}>
        <GemItemDetails item={gem} />
        <GemItemDetails item={vaalGem} />
      </div>
    );
  }

  public componentDidMount(): void {
    if (this.props.elementRefCallback) {
      this.props.elementRefCallback(this.elementRef);
    }
  }

  /** Creates a gem element from item prop */
  private createGem(): IGem {
    const item: IVaalGem = this.props.item;
    return {...item,
      additionalProperties: undefined,
      corrupted: false,
      descrText: undefined,
      note: undefined,
      typeLine: item.vaal.baseTypeName,
    };
  }

  /** Creates a vaal gem element for item prop */
  private createVaalGem(): IGem {
    const item: IVaalGem = this.props.item;
    return {
      ...item,
      corrupted: item.corrupted,
      duplicated: item.duplicated,
      explicitMods: item.vaal.explicitMods,
      nextLevelRequirements: item.nextLevelRequirements,
      properties: item.vaal.properties,
      requirements: undefined,
      secDescrText: item.vaal.secDescrText,
      support: item.support,
      typeLine: item.typeLine,
      verified: item.verified,
    };
  }
}

export default VaalGemItem;
