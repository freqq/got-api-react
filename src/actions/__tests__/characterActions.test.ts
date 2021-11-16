import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MockAdapter from 'axios-mock-adapter';
import RequestService from 'services/RequestService';
import HTTP_STATUS from 'common/httpStatuses';

import {
  LIST_OF_CHARACTERS_FAIL,
  LIST_OF_CHARACTERS_LOADING,
  LIST_OF_CHARACTERS_OK,
  fetchListOfCharacters,
} from 'actions/charactersActions';
import {
  DEFAULT_CHARACTERS_PAGE_NUMBER,
  DEFAULT_CHARACTERS_GENDER,
  DEFAULT_CHARACTERS_PAGE_SIZE,
} from 'common/constants';
import { SET_MAX_PAGE } from 'actions/charactersFilterActions';
import { Character } from 'common/types';

const CHARACTERS_PATH = '/characters';
const TEXT_FILTER = 'filter';
const RESPONSE_HEADERS = {
  link: '<https://anapioficeandfire.com/api/characters?page=2&pageSize=25>; rel="next", <https://anapioficeandfire.com/api/characters?page=1&pageSize=25>; rel="first", <https://anapioficeandfire.com/api/characters?page=86&pageSize=25>; rel="last"',
};
const SAMPLE_CHARACTER: Character = {
  name: 'Character name',
  url: 'http://www.google.com',
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
const MXA_PAGE = '86';

describe('characterActions', () => {
  const axiosMock = new MockAdapter(RequestService.axiosInstance);
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const mockedStore = mockStore({});

  beforeEach(() => {
    axiosMock.reset();
    mockedStore.clearActions();
  });

  it('should create actions for successfull characters fetch', () => {
    const RETURN_PAYLOAD: Character[] = [SAMPLE_CHARACTER];
    const CHARACTERS_PAYLOAD = {
      charactersList: [SAMPLE_CHARACTER],
    };
    const MAX_PAGE_PAYLOAD = {
      maxPage: MXA_PAGE,
    };

    const EXPECTED_ACTIONS = [
      {
        type: LIST_OF_CHARACTERS_LOADING,
      },
      {
        type: LIST_OF_CHARACTERS_OK,
        payload: CHARACTERS_PAYLOAD,
      },
      {
        type: SET_MAX_PAGE,
        payload: MAX_PAGE_PAYLOAD,
      },
    ];

    axiosMock.onGet(CHARACTERS_PATH).reply(HTTP_STATUS.OK_STATUS, RETURN_PAYLOAD, RESPONSE_HEADERS);

    return mockedStore
      .dispatch(
        fetchListOfCharacters(
          TEXT_FILTER,
          DEFAULT_CHARACTERS_PAGE_NUMBER,
          DEFAULT_CHARACTERS_PAGE_SIZE,
          DEFAULT_CHARACTERS_GENDER,
        ),
      )
      .then(() => expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS));
  });

  it('should create actions for failed characters fetch', () => {
    const EXPECTED_ACTIONS = [
      {
        type: LIST_OF_CHARACTERS_LOADING,
      },
      {
        type: LIST_OF_CHARACTERS_FAIL,
      },
    ];

    axiosMock.onGet(CHARACTERS_PATH).reply(HTTP_STATUS.NOT_FOUND);

    return mockedStore
      .dispatch(
        fetchListOfCharacters(
          TEXT_FILTER,
          DEFAULT_CHARACTERS_PAGE_NUMBER,
          DEFAULT_CHARACTERS_PAGE_SIZE,
          DEFAULT_CHARACTERS_GENDER,
        ),
      )
      .then(() => expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS));
  });
});
