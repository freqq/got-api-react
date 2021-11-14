import axios, { AxiosInstance, AxiosResponse } from 'axios';

const PROTOCOL = 'https';
const DOMAIN = 'anapioficeandfire.com';
const JSON_CONTENT_TYPE = 'application/json';
const XML_REQUESTED_WITH = 'XMLHttpRequest';

class RequestService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
        'X-Requested-With': XML_REQUESTED_WITH,
      },
    });

    this.axiosInstance.defaults.baseURL = `${PROTOCOL}://${DOMAIN}/api`;
  }

  get = (url: string, params: any = {}): Promise<AxiosResponse> =>
    this.axiosInstance.get(url, {
      ...params,
    });
}

export default new RequestService();
