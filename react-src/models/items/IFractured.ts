import { IGear } from './IGear';

export interface IFractured extends IGear {
  /** Item is fractured */
  fractured: boolean;
  /** Fractured item mods */
  fracturedMods: string[];
}

/** IFractured type guard */
export function isIFractured(o: any): o is IFractured {
  return (o as IFractured).fractured !== undefined;
}
