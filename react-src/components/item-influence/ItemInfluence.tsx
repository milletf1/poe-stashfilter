import * as React from 'react';
import IInfluenceType from '../../models/items/IInfluenceType';
import './item-influence.scss';

class ItemInfluence extends React.Component<any, {}> {

  private get influenceName(): string {
    // NOTE: I am assuming that items can only have one influence type.
    // If this turns out to be false this method will need to be updated.
    const influences: IInfluenceType = this.props.influences;

    if (influences.warlord) { return 'warlord'; }
    if (influences.hunter) { return 'hunter'; }
    if (influences.redeemer) { return 'redeemer'; }
    if (influences.crusader) { return 'crusader'; }
    if (influences.elder) { return 'elder'; }
    if (influences.shaper) { return 'shaper'; }
    return 'unknown';
  }

  public render(): JSX.Element {
    const influenceName: string = this.influenceName;
    return <div className={`influence ${influenceName}`}>Influenced by the {influenceName} </div>;
  }
}
export default ItemInfluence;
