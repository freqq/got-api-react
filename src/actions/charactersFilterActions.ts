import { ActionInterface } from 'common/types';

export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';

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

export const setTextFilter =
  (textFilter: string): any =>
  (dispatch: any) => {
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
    dispatch(makeSetPageSize(pageSize));
  };
