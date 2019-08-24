import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { ILeague } from '../../models/ILeague';

export default interface IInventoryBrowserProps {
  leagueIndex: number;
  leagues: ILeague[];
  setSelectedTab: (browseIndex: number, browseCategory: BrowseItemCategory) => any;
  uiState: IUiState;
}
