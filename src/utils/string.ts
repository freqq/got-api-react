import { getURLParams, extractURLFromLinkResponseHeader } from 'utils/url';
import { ResponseHeaders } from 'common/types';

export const printArrayOfStringsAfterComma = (stringArray: string[]): string =>
  stringArray.join(', ');

export const isEmpty = (str: string): boolean => !str || str.length === 0;

export const extractLastPageFromHeaders = (responseHeaders: ResponseHeaders): number => {
  const extractedURL = extractURLFromLinkResponseHeader(responseHeaders.link);
  const urlParams = getURLParams(extractedURL);

  return urlParams.page;
};

export const isNumberInString = (str: string): boolean => /\d/.test(str);
