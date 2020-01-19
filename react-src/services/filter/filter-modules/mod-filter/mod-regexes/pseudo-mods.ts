import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';

export const pseudoModRegexes: IMod[] = [
  // number fractured mods
  {
    label: '# Fractured Modifiers',
    regex: /(\d+) Fractured Modifiers/,
    type: ModFilterType.PSEUDO,
  },
  // total elemental resistance
  {
    label: '+#% total Elemental Resistance',
    regex: [
      /\+(\d+)% to Cold Resistance/,
      /\+(\d+)% to Fire Resistance/,
      /\+(\d+)% to Lightning Resistance/,
      /\+(\d+)% to Fire and Cold Resistances/,
      /\+(\d+)% to Fire and Lightning Resistances/,
      /\+(\d+)% to Cold and Lightning Resistances/,
      /\+(\d+)% to all Elemental Resistances/,
    ],
    type: ModFilterType.PSEUDO,
  },
  // total resistance
  {
    label: '+#% total Resistance',
    regex: [
      /\+(\d+)% to Cold Resistance/,
      /\+(\d+)% to Fire Resistance/,
      /\+(\d+)% to Lightning Resistance/,
      /\+(\d+)% to Chaos Resistance/,
      /\+(\d+)% to Fire and Cold Resistances/,
      /\+(\d+)% to Fire and Lightning Resistances/,
      /\+(\d+)% to Cold and Lightning Resistances/,
      /\+(\d+)% to Cold and Chaos Resistances/,
      /\+(\d+)% to Fire and Chaos Resistances/,
      /\+(\d+)% to Lightning and Chaos Resistances/,
      /\+(\d+)% to all Elemental Resistances/,
    ],
    type: ModFilterType.PSEUDO,
  },
];
