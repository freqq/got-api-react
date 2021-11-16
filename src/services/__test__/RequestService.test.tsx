import MockAdapter from 'axios-mock-adapter';
import RequestService from 'services/RequestService';
import HTTP_STATUS from 'common/httpStatuses';

const SAMPLE_URL = '/sample/url';
const MOCK = new MockAdapter(RequestService.axiosInstance);

export const expectError = async function expectError(request: any) {
  try {
    await request;
  } catch (error) {
    return HTTP_STATUS.NOT_FOUND;
  }
  return HTTP_STATUS.OK_STATUS;
};

describe('RequestService service', () => {
  it('should send get request', async () => {
    MOCK.onGet(SAMPLE_URL).reply(HTTP_STATUS.OK_STATUS);
    const response = await RequestService.get(SAMPLE_URL);

    expect(response.status).toEqual(HTTP_STATUS.OK_STATUS);
  });

  describe('error expectError', () => {
    it('should be received on get', async () => {
      MOCK.onGet(SAMPLE_URL).reply(HTTP_STATUS.NOT_FOUND);
      const response = await expectError(RequestService.get(SAMPLE_URL));

      expect(response).toEqual(HTTP_STATUS.NOT_FOUND);
    });

    it('should not be received on get', async () => {
      MOCK.onGet(SAMPLE_URL).reply(HTTP_STATUS.OK_STATUS);
      const response = await expectError(RequestService.get(SAMPLE_URL));

      expect(response).toEqual(HTTP_STATUS.OK_STATUS);
    });
  });
});
