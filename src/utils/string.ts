import { getURLParams, extractURLFromLinkResponseHeader } from 'utils/url';
import { ResponseHeaders } from 'common/types';

export const joinStringArrayByCharacter = (stringArray: string[], character: string): string =>
  stringArray.join(character);

export const isEmpty = (str: string): boolean => !str || str.length === 0;

export const extractLastPageFromHeaders = (responseHeaders: ResponseHeaders): number => {
  const extractedURL = extractURLFromLinkResponseHeader(responseHeaders.link);
  const urlParams = getURLParams(extractedURL);
  return urlParams.page;
};

export const isNumberInString = (str: string): boolean => /\d/.test(str);

export const getNumberFromString = (str: string): number => parseInt(str.replace(/^\D+/g, ''), 10);
