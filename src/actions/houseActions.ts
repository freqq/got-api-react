import { getHouseData } from 'handlers/apiHandler';
import { ActionInterface, ThunkResult, House } from 'common/types';

export const HOUSE_DATA_LOADING = 'HOUSE_DATA_LOADING';
export const HOUSE_DATA_OK = 'HOUSE_DATA_OK';
export const HOUSE_DATA_FAIL = 'HOUSE_DATA_FAIL';

export const makeHouseDataLoading = (): ActionInterface => ({
  type: HOUSE_DATA_LOADING,
});

export const makeHouseDataFail = (): ActionInterface => ({
  type: HOUSE_DATA_FAIL,
});

export const makeHouseDataOk = (houseData: House): ActionInterface => ({
  type: HOUSE_DATA_OK,
  payload: { houseData },
});

export const fetchHouseData =
  (houseId: string): ThunkResult<Promise<void>> =>
  dispatch => {
    dispatch(makeHouseDataLoading());

    return getHouseData(houseId)
      .then((res: any) => {
        dispatch(makeHouseDataOk(res.data));
      })
      .catch(() => {
        dispatch(makeHouseDataFail());
      });
  };