import { ActionInterface } from 'common/types';
import { SET_PAGE_NUMBER, SET_PAGE_SIZE, SET_TEXT_FILTER } from 'actions/charactersFilterActions';

export interface ICharactersFilter {
  pageNumber: number;
  pageSize: number;
  textFilter: string;
}

export const REDUCER_INITIAL_STATE: ICharactersFilter = {
  pageNumber: 1,
  pageSize: 10,
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
    case SET_TEXT_FILTER:
      return { ...stateDefinition, textFilter: payload.textFilter };
    default:
      return stateDefinition;
  }
};
