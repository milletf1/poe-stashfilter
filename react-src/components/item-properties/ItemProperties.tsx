import * as React from 'react';
import { IItemProperty } from '../../models/items/IItemProperty';
import { IItemPropertiesProps } from './IItemPropertiesProps';
import './item-properties.scss';
import { ItemPropertyValueTypes } from './ItemPropertyValueTypes';

const UNMET_TAG_TEST_REGEX: RegExp = /<unmet>/;
const ITEM_PROPERTY_SPLIT_REGEX: RegExp = /(<unmet>{[^}]*})/g;
const UNMET_PROPERTY_TEST_REGEX: RegExp = /^<unmet>{[^}]*}$/;
const GET_UNMET_PROPERTY_REGEX: RegExp = /(?<=<unmet>{)[^}]*(?=})/;
const SPLIT_PROPERTY_NAME_REGEX: RegExp = /({\d+})/g;
const INTERPOLATION_EXPRESSION_TEST_REGEX: RegExp = /^{\d+}$/;
const EXTRACT_NUMBER_REGEX: RegExp = /\d+/;

class ItemProperties extends React.Component<IItemPropertiesProps, {}> {
  public render(): JSX.Element {
    const properties: IItemProperty[] = this.props.properties;
    return (
      <div className='item-properties'>
        {
          properties !== undefined && properties.map((prop: IItemProperty, index: number) => {
            return this.createItemPropertyElement(prop, index);
          })
        }
      </div>
    );
  }

  /**
   * Creates an element to display an item property
   * @param itemProperty The item property to display
   * @param key Element key
   */
  private createItemPropertyElement(itemProperty: IItemProperty, key: number): JSX.Element {
    const hasPropertyValue: boolean = itemProperty.values[0] && itemProperty.values[0].length > 0;
    if (UNMET_TAG_TEST_REGEX.test(itemProperty.name)) {
      // property value contains an <unmet> tag (see resonators)
      ITEM_PROPERTY_SPLIT_REGEX.lastIndex = 0;
      const tokens: string[] = itemProperty.name.split(ITEM_PROPERTY_SPLIT_REGEX);
      return (
        <div className='property' key={key}>
          {
            tokens.map((token: string, index: number) => {
              if (UNMET_PROPERTY_TEST_REGEX.test(token)) {
                const value: string = GET_UNMET_PROPERTY_REGEX.exec(token)[0];
                return (<span className='value unmet' key={index}>{value}&nbsp;</span>);
              }
              return <span className='name' key={index}>{token.trim()}&nbsp;</span>;
            })
          }
        </div>
      );
    } else if (itemProperty.displayMode !== 3) {
      // property value is displayed after name
      return (
        <div className='property' key={key}>
          <span className='name'>{itemProperty.name}{hasPropertyValue && ':'}&nbsp;</span>
          {hasPropertyValue && this.createItemPropertyValues(itemProperty.values)}
        </div>
      );
    } else {
      // property value(s) are displayed within the property name (see flasks)
      SPLIT_PROPERTY_NAME_REGEX.lastIndex = 0;
      const tokens: string[] = itemProperty.name.split(SPLIT_PROPERTY_NAME_REGEX);
      return (
        <div className='property' key={key}>
          {
            tokens.map((token: string, index: number) => {
              if (INTERPOLATION_EXPRESSION_TEST_REGEX.test(token)) {
                const valueIndex: string = EXTRACT_NUMBER_REGEX.exec(token)[0];
                const itemPropertyValue: [string, number] = itemProperty
                  .values[parseInt(valueIndex, 10)];
                return (
                  <span
                    key={index}
                    className={this.getPropertyValueClass(itemPropertyValue[1])}>
                    {itemPropertyValue[0]}&nbsp;
                  </span>
                );
              }
              return <span key={index} className='name'>{token.trim()}&nbsp;</span>;
            })
          }
        </div>
      );
    }
  }

  /**
   * Creates an element to display item properties
   * @param values Item property values to display
   */
  private createItemPropertyValues(values: Array<[string, number]>): JSX.Element {
    const valueElements: JSX.Element[] = values.map((value: [string, number], index) => {
      if (index < values.length - 1) {
        return (
          <span key={index} className='name'>
            <span className={this.getPropertyValueClass(value[1])}>
              {value[0]}
            </span>,&nbsp;
          </span>
        );
      }
      return <span key={index} className={this.getPropertyValueClass(value[1])}>{value[0]}</span>;
    });

    return <span>{valueElements}</span>;
  }

  /**
   * Gets a class name for an item property value
   * @param itemPropertyValueNumber Item property value number
   */
  private getPropertyValueClass(itemPropertyValueNumber: number): string {
    switch (itemPropertyValueNumber) {
      case ItemPropertyValueTypes.AUGMENTED: return 'value augmented';
      case ItemPropertyValueTypes.FIRE: return 'value fire';
      case ItemPropertyValueTypes.COLD: return 'value cold';
      case ItemPropertyValueTypes.LIGHTNING: return 'value lightning';
      case ItemPropertyValueTypes.CHAOS: return 'value chaos';
      case ItemPropertyValueTypes.WILD: return 'value wild';
      case ItemPropertyValueTypes.VIVID: return 'value vivid';
      case ItemPropertyValueTypes.PRIMAL: return 'value primal';
      default: return 'value';
    }
  }
}

export default ItemProperties;
