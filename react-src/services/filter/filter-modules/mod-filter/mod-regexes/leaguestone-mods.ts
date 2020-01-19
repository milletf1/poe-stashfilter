import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';

export const leaguestoneModRegexes: IMod[] = [
  {
    label: 'Can only be used in Areas with Monster Level # or below',
    regex: /Can only be used in Areas with Monster Level (\d+) or below/,
    type: ModFilterType.LEAGUESTONE,
  },
  {
    label: 'Currently has # Charges',
    regex: /Currently has (\d+) Charges/,
    type: ModFilterType.LEAGUESTONE,
  },
  {
    label: 'Maximum # Charges',
    regex: /Maximum (\d+) Charges/,
    type: ModFilterType.LEAGUESTONE,
  },
  {
    label: '+# to Maximum Charges',
    regex: /\+(\d+) to Maximum Charges/,
    type: ModFilterType.LEAGUESTONE,
  },
];
