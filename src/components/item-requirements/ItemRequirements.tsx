import * as React from 'react';
import { IItemProperty } from '../../models/items/IItemProperty';
import { IItempRequirementsProps } from './IItemRequirementsProps';

import './item-requirements.scss';

class ItemRequirements extends React.Component<IItempRequirementsProps, {}> {
  public render(): JSX.Element {
    const requirements: IItemProperty[] = this.props.requirements;
    return (
      <div className='item-requirements'>
        <span className='default'>Requires </span>
        {
          requirements !== undefined && requirements.map((req: IItemProperty, index: number) => {
            return this.createItemRequirementElement(req, index);
          })
        }
      </div>
    );
  }

  /**
   * Creates an element to display an item requirement
   * @param itemRequirement Item requirement to display
   * @param key Element key
   */
  private createItemRequirementElement(itemRequirement: IItemProperty, key: number): JSX.Element {
    const numRequirements: number = this.props.requirements.length;
    return (
      <span key={key}>
        {
          itemRequirement.displayMode === 0 &&
            <span>
              <span className='default'>{itemRequirement.name} </span>
              <span>{itemRequirement.values[0][0]}</span>
              {key < numRequirements - 1 && <span className='default'>, </span>}
            </span>
        }
        {
          itemRequirement.displayMode === 1 &&
            <span>
              <span>{itemRequirement.values[0][0]} </span>
              <span className='default'>{itemRequirement.name}</span>
              {key < numRequirements - 1 && <span className='default'>, </span>}
            </span>
        }
      </span>
    );
  }
}

export default ItemRequirements;
