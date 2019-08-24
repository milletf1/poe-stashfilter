import { ILeague } from '../../models/ILeague';

/** Props for StashDisplay component */
export interface IStashDisplayProps {
  browseCategory: string;
  /** Index of selected stash tab in selected league */
  browseIndex: number;
  /** Index of selected league in IStashDisplayProps#leagues */
  leagueIndex: number;
  /** Leagues that contain stash tabs to select */
  leagues: ILeague[];
}
