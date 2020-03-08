import { ILeague } from '../../models/ILeague';
import { BrowseItemCategory } from '../../models/ui-state/BrowseItemCategory';
import { IUiState } from '../../models/ui-state/IUiState';
import { SearchVisibleSection } from '../../models/ui-state/SearchVisibleSection';

export interface IAccountState {
  accountName: string;
  leagues: ILeague[];
  uiState: IUiState;
}

export const initialState: IAccountState = {
  accountName: 'unknown',
  leagues: [
    {
      characters: [],
      name: 'unknown',
      stashTabs: [],
    },
  ],
  uiState: {
    browsePageState: {
      browseCategory: BrowseItemCategory.STASH_TAB,
      browseIndex: 0,
    },
    leagueIndex: 0,
    route: '/browse',
    searchPageState: {
      openSection: SearchVisibleSection.SEARCH,
      searchFormState: {
        abyssSockets: '',
        blueSockets: '',
        elementalDpsMax: '',
        elementalDpsMin: '',
        greenSockets: '',
        itemBase: null,
        itemName: '',
        itemNameSuggestions: [],
        itemType: null,
        mods: [null],
        modsMax: [''],
        modsMin: [''],
        physicalDpsMax: '',
        physicalDpsMin: '',
        redSockets: '',
        searchButtonEnabled: true,
        socketsMax: '',
        socketsMin: '',
        totalDpsMax: '',
        totalDpsMin: '',
        whiteSockets: '',
      },
      searchResults: [],
    },
  },
};
