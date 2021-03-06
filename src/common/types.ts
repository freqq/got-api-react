import { AnyAction, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IApplicationStore } from 'store';

export interface IAction<T = void> extends Action<string> {
  type: string;
  payload?: T;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IApplicationStore,
  unknown,
  AnyAction
>;

export type Gender = 'Any' | 'Male' | 'Female';

export interface Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export interface House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string[];
  cadetBranches: string[];
  swornMembers: string[];
}

export interface ResponseHeaders {
  link: string;
}

export interface CardData {
  name: string;
  value: string | number;
  icon: string;
}
