import React from 'react';

import { CharacterWrapper } from 'components/CharacterItem/CharacterItem.styles';
import {
  getCharacterName,
  getCharacterAliveField,
  getCharacterHouseIds,
} from 'utils/characterItemHelper';
import { Character } from 'common/types';

const CharacterItem: React.FC<Props> = ({ characterData }: Props) => (
  <CharacterWrapper>
    <div>{getCharacterName(characterData.name, characterData.aliases)}</div>
    <div>{getCharacterAliveField(characterData.born, characterData.died)}</div>
    <div>{characterData.gender}</div>
    <div>{characterData.culture || 'Unknown'}</div>
    <div>
      {characterData.allegiances ? (
        getCharacterHouseIds(characterData.allegiances)
      ) : (
        <p>No allegiances</p>
      )}
    </div>
  </CharacterWrapper>
);

interface Props {
  characterData: Character;
}

export default CharacterItem;
