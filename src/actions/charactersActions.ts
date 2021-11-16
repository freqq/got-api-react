import { getListOfCharacters } from 'handlers/apiHandler';
import { setMaxPage } from 'actions/charactersFilterActions';
import { Character, Gender, AppThunk, IAction } from 'common/types';
import { extractLastPageFromHeaders } from 'utils/string';

export const LIST_OF_CHARACTERS_LOADING = 'LIST_OF_CHARACTERS_LOADING';
export const LIST_OF_CHARACTERS_OK = 'LIST_OF_CHARACTERS_OK';
export const LIST_OF_CHARACTERS_FAIL = 'LIST_OF_CHARACTERS_FAIL';

export type CharactersUnion = void | Character[];

export const makeListOfCharactersLoading = (): IAction => ({
  type: LIST_OF_CHARACTERS_LOADING,
});

export const makeListOfCharactersFail = (): IAction => ({
  type: LIST_OF_CHARACTERS_FAIL,
});

export const makeListOfCharactersOk = (charactersList: Character[]): IAction<Character[]> => ({
  type: LIST_OF_CHARACTERS_OK,
  payload: charactersList,
});

export const fetchListOfCharacters =
  (textFilter: string, pageNumber: number, pageSize: number, gender: Gender): AppThunk =>
  async dispatch => {
    dispatch(makeListOfCharactersLoading());

    try {
      const res: any = await getListOfCharacters(textFilter, pageNumber, pageSize, gender);
      dispatch(makeListOfCharactersOk(res.data));
      dispatch(setMaxPage(extractLastPageFromHeaders(res.headers)));
    } catch (e) {
      dispatch(makeListOfCharactersFail());
    }
  };
