import { ActionInterface, Character } from 'common/types';
import {
  LIST_OF_CHARACTERS_LOADING,
  LIST_OF_CHARACTERS_OK,
  LIST_OF_CHARACTERS_FAIL,
} from 'actions/charactersActions';

export interface ICharacters {
  data: Character[];
  isError: boolean;
  isFetching: boolean;
  perPage: number;
  textFilter: string;
}

export const REDUCER_INITIAL_STATE: ICharacters = {
  data: [],
  isError: false,
  isFetching: true,
  perPage: 10,
  textFilter: '',
};

export const characters = (state: ICharacters, { type, payload }: ActionInterface): ICharacters => {
  const stateDefinition = typeof state === 'undefined' ? REDUCER_INITIAL_STATE : state;
  switch (type) {
    case LIST_OF_CHARACTERS_OK:
      return {
        ...stateDefinition,
        isError: false,
        isFetching: false,
        data: payload.charactersList,
      };
    case LIST_OF_CHARACTERS_FAIL:
      return { ...stateDefinition, isFetching: false, isError: true };
    case LIST_OF_CHARACTERS_LOADING:
      return { ...stateDefinition, isFetching: true, isError: false };
    default:
      return stateDefinition;
  }
};
