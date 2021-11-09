import { AxiosResponse } from 'axios';
import RequestService from 'utils/RequestService';

export const getListOfCharacters = async (
  culture: string,
  page: number,
  pageSize: number,
): Promise<AxiosResponse> =>
  RequestService.get(`/characters`, {
    params: {
      culture,
      page,
      pageSize,
    },
  });

export const getHouseData = async (houseId: string): Promise<AxiosResponse> =>
  RequestService.get(`/house/${houseId}`);
