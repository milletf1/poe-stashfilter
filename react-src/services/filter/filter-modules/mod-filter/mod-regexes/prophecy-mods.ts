import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';

export const propheciesModRegexes: IMod[] = [
  {
    label: 'You will find Alva and complete her mission.',
    regex: /You will find Alva and complete her mission./,
    type: ModFilterType.PROPHECY,
  },
  {
    label: 'You will find Einhar and complete his mission.',
    regex: /You will find Einhar and complete his mission./,
    type: ModFilterType.PROPHECY,
  },
  {
    label: 'You will find Jun and complete her mission.',
    regex: /You will find Jun and complete her mission./,
    type: ModFilterType.PROPHECY,
  },
  {
    label: 'You will find Niko and complete his mission.',
    regex: /You will find Niko and complete his mission./,
    type: ModFilterType.PROPHECY,
  },
  {
    label: 'You will find Zana and complete her mission.',
    regex: /You will find Zana and complete her mission./,
    type: ModFilterType.PROPHECY,
  },
];
