import React from 'react';

import { CharacterWrapper } from 'components/CharacterItem/CharacterItem.styles';
import { getCharacterName, getCharacterAliveField } from 'utils/characterItemHelper';
import { Character } from 'common/types';

const CharacterItem: React.FC<Props> = ({ characterData }: Props) => (
  <CharacterWrapper>
    <p>{getCharacterName(characterData)}</p>
    <p>{getCharacterAliveField(characterData)}</p>
    <p>{characterData.gender}</p>
    <p>{characterData.culture || 'Unknown'}</p>
  </CharacterWrapper>
);

interface Props {
  characterData: Character;
}

export default CharacterItem;
