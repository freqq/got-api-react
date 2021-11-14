import { ActionInterface, Gender } from 'common/types';
import { DEFAULT_CHARACTERS_PAGE_NUMBER } from 'common/constants';

export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const SET_GENDER = 'SET_GENDER';

export const makeSetTextFilter = (textFilter: string): ActionInterface => ({
  type: SET_TEXT_FILTER,
  payload: { textFilter },
});

export const makeSetPageNumber = (pageNumber: number): ActionInterface => ({
  type: SET_PAGE_NUMBER,
  payload: { pageNumber },
});

export const makeSetPageSize = (pageSize: number): ActionInterface => ({
  type: SET_PAGE_SIZE,
  payload: { pageSize },
});

export const makeSetMaxPage = (maxPage: number): ActionInterface => ({
  type: SET_MAX_PAGE,
  payload: { maxPage },
});

export const makeSetGender = (gender: Gender): ActionInterface => ({
  type: SET_GENDER,
  payload: { gender },
});

export const setTextFilter =
  (textFilter: string): any =>
  (dispatch: any) => {
    dispatch(setPageNumber(DEFAULT_CHARACTERS_PAGE_NUMBER));
    dispatch(makeSetTextFilter(textFilter));
  };

export const setPageNumber =
  (pageNumber: number): any =>
  (dispatch: any) => {
    dispatch(makeSetPageNumber(pageNumber));
  };

export const setPageSize =
  (pageSize: number): any =>
  (dispatch: any) => {
    dispatch(setPageNumber(DEFAULT_CHARACTERS_PAGE_NUMBER));
    dispatch(makeSetPageSize(pageSize));
  };

export const setMaxPage =
  (maxPage: number): any =>
  (dispatch: any) => {
    dispatch(makeSetMaxPage(maxPage));
  };

export const setGender =
  (gender: Gender): any =>
  (dispatch: any) => {
    dispatch(setPageNumber(DEFAULT_CHARACTERS_PAGE_NUMBER));
    dispatch(makeSetGender(gender));
  };
