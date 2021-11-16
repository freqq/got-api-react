import { characters, REDUCER_INITIAL_STATE } from 'reducers/charactersReducer';
import {
  LIST_OF_CHARACTERS_LOADING,
  LIST_OF_CHARACTERS_OK,
  LIST_OF_CHARACTERS_FAIL,
  makeListOfCharactersFail,
  makeListOfCharactersLoading,
  makeListOfCharactersOk,
} from 'actions/charactersActions';
import { Character } from 'common/types';

describe('charactersReducer', () => {
  const UNDEFINED_ACTION = { type: 'UNDEFINED_ACTION' };
  const SAMPLE_CHARACTER: Character = {
    name: 'Character name',
    url: 'https://www.google.com',
    culture: 'culture',
    born: 'born',
    died: 'died',
    gender: 'gender',
    titles: ['title', 'another'],
    aliases: ['aliast', 'some'],
    father: 'father',
    mother: 'mother',
    spouse: 'spouse',
    tvSeries: ['tvseries'],
    books: ['books'],
    allegiances: ['allegancie'],
    povBooks: ['books'],
    playedBy: ['playedBy'],
  };

  it('should not handle undefined action', () => {
    const result = characters(REDUCER_INITIAL_STATE, UNDEFINED_ACTION);

    expect(result).toEqual(REDUCER_INITIAL_STATE);
  });

  it(`should dispatch ${LIST_OF_CHARACTERS_LOADING}`, () => {
    const result = characters(REDUCER_INITIAL_STATE, makeListOfCharactersLoading());

    expect(result).toEqual({
      ...REDUCER_INITIAL_STATE,
      isError: false,
      isFetching: true,
    });
  });
  it(`should dispatch ${LIST_OF_CHARACTERS_OK}`, () => {
    const result = characters(REDUCER_INITIAL_STATE, makeListOfCharactersOk([SAMPLE_CHARACTER]));

    expect(result).toEqual({
      ...REDUCER_INITIAL_STATE,
      isError: false,
      isFetching: false,
      data: [SAMPLE_CHARACTER],
    });
  });

  it(`should dispatch ${LIST_OF_CHARACTERS_FAIL}`, () => {
    const result = characters(REDUCER_INITIAL_STATE, makeListOfCharactersFail());

    expect(result).toEqual({
      ...REDUCER_INITIAL_STATE,
      isError: true,
      isFetching: false,
    });
  });
});
