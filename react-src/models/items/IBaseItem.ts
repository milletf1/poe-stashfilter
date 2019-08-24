export interface IBaseItem {
  /** Verified */
  verified: boolean;
  /** Item width */
  w: number;
  /** Item height */
  h: number;
  /** Item level */
  ilvl: number;
  /** URL for item icon */
  icon: string;
  /** League */
  league: string;
  /** Id */
  id: string;
  /** Item name */
  name: string;
  /** Item typeline */
  typeLine: string;
  /** Identified */
  identified: boolean;
  /** Frame type */
  frameType: number;
  /** Inventory id */
  inventoryId?: string;
  /** X coordinate of item (starts at 1) */
  x?: number;
  /** Y coordinate of item (starts at 1) */
  y?: number;
  /** Item note */
  note?: string;
}

/** IBaseItem type guard */
export function isIBaseItem(o: any): o is IBaseItem {
  return (o as IBaseItem).ilvl !== undefined;
}
