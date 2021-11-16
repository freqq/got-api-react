import { getHouseData } from 'handlers/apiHandler';
import { IAction, AppThunk, House } from 'common/types';

export const HOUSE_DATA_LOADING = 'HOUSE_DATA_LOADING';
export const HOUSE_DATA_OK = 'HOUSE_DATA_OK';
export const HOUSE_DATA_FAIL = 'HOUSE_DATA_FAIL';

export type HouseUnion = void | House;

export const makeHouseDataLoading = (): IAction => ({
  type: HOUSE_DATA_LOADING,
});

export const makeHouseDataFail = (): IAction => ({
  type: HOUSE_DATA_FAIL,
});

export const makeHouseDataOk = (houseData: House): IAction<House> => ({
  type: HOUSE_DATA_OK,
  payload: houseData,
});

export const fetchHouseData =
  (houseId: string): AppThunk =>
  async dispatch => {
    dispatch(makeHouseDataLoading());

    try {
      const res = await getHouseData(houseId);
      dispatch(makeHouseDataOk(res.data));
    } catch (e) {
      dispatch(makeHouseDataFail());
    }
  };
