import {
  printArrayOfStringsAfterComma,
  isEmpty,
  isNumberInString,
  getNumberFromString,
} from 'utils/string';

const getCharacterLifeLength = (born: string, died: string): number =>
  getNumberFromString(died) - getNumberFromString(born);

export const getHouseIdFromLink = (allegiance: string): string | undefined =>
  allegiance.split('/').pop();

export const getCharacterName = (name: string, aliases: string[]): string =>
  printArrayOfStringsAfterComma([name, ...aliases].filter((text: string) => text !== ''));

export const getCharacterAliveField = (born: string, died: string): string => {
  if ((isEmpty(born) && isEmpty(died)) || (!isNumberInString(died) && !isNumberInString(born)))
    return 'Unknown';

  if (isEmpty(born)) return 'No';

  if (isEmpty(died)) return 'Yes';

  if (!isEmpty(died)) return `No, died at ${getCharacterLifeLength(born, died)} years old`;

  return '-';
};
