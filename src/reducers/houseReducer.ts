import { IAction, House } from 'common/types';
import {
  HouseUnion,
  HOUSE_DATA_LOADING,
  HOUSE_DATA_OK,
  HOUSE_DATA_FAIL,
} from 'actions/houseActions';

export interface IHouse {
  data?: House;
  isError: boolean;
  isFetching: boolean;
}

export const REDUCER_INITIAL_STATE: IHouse = {
  data: undefined,
  isError: false,
  isFetching: true,
};

export const house = (state: IHouse, { type, payload }: IAction<HouseUnion>): IHouse => {
  const stateDefinition = typeof state === 'undefined' ? REDUCER_INITIAL_STATE : state;
  switch (type) {
    case HOUSE_DATA_OK:
      return {
        ...stateDefinition,
        isError: false,
        isFetching: false,
        data: payload as House,
      };
    case HOUSE_DATA_FAIL:
      return { ...stateDefinition, isFetching: false, isError: true };
    case HOUSE_DATA_LOADING:
      return { ...stateDefinition, isFetching: true, isError: false };
    default:
      return stateDefinition;
  }
};
