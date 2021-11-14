import { CharacterHouses, CharacterHouseItem } from 'components/CharacterItem/CharacterItem.styles';
import { History } from 'history';
import { printArrayOfStringsAfterComma, isEmpty } from 'utils/string';

const getHouseIdFromLink = (allegiance: string): string | undefined => allegiance.split('/').pop();

const checkIfYearStringHasNumber = (str: string) => /\d/.test(str);

const getYearFromString = (str: string): number => parseInt(str.replace(/^\D+/g, ''), 10);

const getCharacterLifeLength = (born: string, died: string): number =>
  getYearFromString(died) - getYearFromString(born);

export const getCharacterName = (name: string, aliases: string[]): string =>
  printArrayOfStringsAfterComma([name, ...aliases].filter((text: string) => text !== ''));

export const getCharacterAliveField = (born: string, died: string): string => {
  if (
    (isEmpty(born) && isEmpty(died)) ||
    (!checkIfYearStringHasNumber(died) && !checkIfYearStringHasNumber(born))
  )
    return 'Unknown';

  if (isEmpty(born)) return 'No';

  if (isEmpty(died)) return 'Yes';

  if (!isEmpty(died)) return `No, died at ${getCharacterLifeLength(born, died)} years old`;

  return '-';
};

export const getCharacterHouseIds = (allegiances: string[], history: History) => (
  <CharacterHouses>
    {allegiances.map((allegiance: string) => {
      const houseId = getHouseIdFromLink(allegiance);

      return (
        <CharacterHouseItem key={houseId} onClick={() => history.push(`/house/${houseId}`)}>
          {houseId}
        </CharacterHouseItem>
      );
    })}
  </CharacterHouses>
);
