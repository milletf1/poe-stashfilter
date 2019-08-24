import * as React from 'react';
import ItemMods from '../../item-mods/ItemMods';
import { ItemModThemeTypes } from '../../item-mods/ItemModThemeTypes';
import { IIncubatedDetailsProps } from './IIncubatedDetailsProps';

import './incubated-details.scss';

class IncubatedDetails extends React.Component<IIncubatedDetailsProps, {}> {
  public render(): JSX.Element {
    const style: React.CSSProperties = this.props.style;
    const title: string = `Incubating ${this.props.incubatedItem.name}`;
    const progress: number = this.props.incubatedItem.progress;
    const total: number = this.props.incubatedItem.total;
    const level: number = this.props.incubatedItem.level;
    return (
      <div className='incubated-details' style={style}>
        <ItemMods mods={title} theme={ItemModThemeTypes.INCUBATED_TEXT} />
        <div className='progress-level-container'>
          <span className='progress'>{progress}/{total} </span>
          <span className='level'>Level {level}+ Monster Kills</span>
        </div>
      </div>
    );
  }
}

export default IncubatedDetails;
