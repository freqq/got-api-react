import { ActionInterface, Gender } from 'common/types';
import {
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  SET_TEXT_FILTER,
  SET_GENDER,
  SET_MAX_PAGE,
} from 'actions/charactersFilterActions';
import {
  DEFAULT_CHARACTERS_PAGE_SIZE,
  DEFAULT_CHARACTERS_PAGE_NUMBER,
  DEFAULT_CHARACTERS_GENDER,
} from 'common/constants';

export interface ICharactersFilter {
  pageNumber: number;
  pageSize: number;
  maxPage: number;
  textFilter: string;
  gender: Gender;
}

export const REDUCER_INITIAL_STATE: ICharactersFilter = {
  pageNumber: DEFAULT_CHARACTERS_PAGE_NUMBER,
  pageSize: DEFAULT_CHARACTERS_PAGE_SIZE,
  maxPage: 1,
  gender: DEFAULT_CHARACTERS_GENDER,
  textFilter: '',
};

export const charactersFilter = (
  state: ICharactersFilter,
  { type, payload }: ActionInterface,
): ICharactersFilter => {
  const stateDefinition = typeof state === 'undefined' ? REDUCER_INITIAL_STATE : state;
  switch (type) {
    case SET_PAGE_NUMBER:
      return { ...stateDefinition, pageNumber: payload.pageNumber };
    case SET_PAGE_SIZE:
      return { ...stateDefinition, pageSize: payload.pageSize };
    case SET_MAX_PAGE:
      return { ...stateDefinition, maxPage: payload.maxPage };
    case SET_TEXT_FILTER:
      return { ...stateDefinition, textFilter: payload.textFilter };
    case SET_GENDER:
      return { ...stateDefinition, gender: payload.gender };
    default:
      return stateDefinition;
  }
};
