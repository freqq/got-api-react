import { AxiosResponse } from 'axios';
import RequestService from 'utils/RequestService';

export const getListOfCharacters = async (): Promise<AxiosResponse> =>
  RequestService.get('/characters');

export const getHouseData = async (houseId: string): Promise<AxiosResponse> =>
  RequestService.get(`/house/${houseId}`);
