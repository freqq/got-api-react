import { Character } from 'common/types';

const getCharacterLifeLength = (born: number, died: number): number => died - born;

export const getCharacterName = (character: Character): string =>
  character.name + character.aliases;

export const getCharacterAliveField = (character: Character): string => {
  if (!character.born && !character.died) return 'Unknown';

  if (!character.born) return 'No';

  if (character.died) return `No, died at X years old`;
  // return `No, died at ${getCharacterLifeLength(character.born, character.born)} years old`;

  if (!character.died) return 'Yes';

  return '-';
};
