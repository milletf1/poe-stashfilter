import { ILeague } from '../../models/ILeague';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';

export default interface IInventoryBrowserProps {
  browseIndex: number;
  browseCategory: BrowseItemCategory;
  leagueIndex: number;
  leagues: ILeague[];
  setSelectedTab: (browseIndex: number, browseCategory: BrowseItemCategory) => any;
}
