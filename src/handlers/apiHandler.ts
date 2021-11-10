import { AxiosResponse } from 'axios';
import { Gender } from 'common/types';
import RequestService from 'utils/RequestService';

export const getListOfCharacters = async (
  culture: string,
  page: number,
  pageSize: number,
  gender: Gender,
): Promise<AxiosResponse> =>
  RequestService.get(`/characters`, {
    params: {
      culture,
      page,
      pageSize,
      gender,
    },
  });

export const getHouseData = async (houseId: string): Promise<AxiosResponse> =>
  RequestService.get(`/house/${houseId}`);
