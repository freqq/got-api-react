import {
  joinStringArrayByCharacter,
  isEmpty,
  isNumberInString,
  getNumberFromString,
  extractLastPageFromHeaders,
} from 'utils/string';

describe('string utils', () => {
  it('should join string array by given character', () => {
    const character = ',';
    const stringArray = ['g', 'o', 't'];
    const expectedString = 'g,o,t';

    expect(joinStringArrayByCharacter(stringArray, character)).toEqual(expectedString);
  });

  describe('is string empty', () => {
    it('should return true if empty', () => {
      const emptyString = '';

      expect(isEmpty(emptyString)).toEqual(true);
    });

    it('should return false if not empty', () => {
      const emptyString = 'not empty';

      expect(isEmpty(emptyString)).toEqual(false);
    });
  });

  describe('number in string', () => {
    it('should return true if number in string', () => {
      const stringToCheck = 'sda23dx';

      expect(isNumberInString(stringToCheck)).toEqual(true);
    });

    it('should return false if no number in string', () => {
      const stringToCheck = 'sdadx';

      expect(isNumberInString(stringToCheck)).toEqual(false);
    });
  });

  it('should extract number from string', () => {
    const stringWithNumber = 'XDoksl123XD';
    const expectedNumber = 123;

    expect(getNumberFromString(stringWithNumber)).toEqual(expectedNumber);
  });
  it('should extract last page from headers', () => {
    const RESPONSE_HEADERS = {
      link: '<https://anapioficeandfire.com/api/characters?page=2&pageSize=25>; rel="next", <https://anapioficeandfire.com/api/characters?page=1&pageSize=25>; rel="first", <https://anapioficeandfire.com/api/characters?page=86&pageSize=25>; rel="last"',
    };
    const expectedLastPage = "86";

    expect(extractLastPageFromHeaders(RESPONSE_HEADERS)).toEqual(expectedLastPage);
  });
});
