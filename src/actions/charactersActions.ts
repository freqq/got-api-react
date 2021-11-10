import { getListOfCharacters } from 'handlers/apiHandler';
import { ActionInterface, Character, Gender, ThunkResult } from 'common/types';

export const LIST_OF_CHARACTERS_LOADING = 'LIST_OF_CHARACTERS_LOADING';
export const LIST_OF_CHARACTERS_OK = 'LIST_OF_CHARACTERS_OK';
export const LIST_OF_CHARACTERS_FAIL = 'LIST_OF_CHARACTERS_FAIL';

export const makeListOfCharactersLoading = (): ActionInterface => ({
  type: LIST_OF_CHARACTERS_LOADING,
});

export const makeListOfCharactersFail = (): ActionInterface => ({
  type: LIST_OF_CHARACTERS_FAIL,
});

export const makeListOfCharactersOk = (charactersList: Character[]): ActionInterface => ({
  type: LIST_OF_CHARACTERS_OK,
  payload: { charactersList },
});

export const fetchListOfCharacters =
  (
    textFilter: string,
    pageNumber: number,
    pageSize: number,
    gender: Gender,
  ): ThunkResult<Promise<void>> =>
  dispatch => {
    dispatch(makeListOfCharactersLoading());

    return getListOfCharacters(textFilter, pageNumber, pageSize, gender)
      .then((res: any) => {
        dispatch(makeListOfCharactersOk(res.data));
      })
      .catch(() => {
        dispatch(makeListOfCharactersFail());
      });
  };
