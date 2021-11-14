import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  CharacterWrapper,
  CharacterColumnItem,
  CharacterItemParagraph,
} from 'components/CharacterItem/CharacterItem.styles';
import {
  getCharacterName,
  getCharacterAliveField,
  getCharacterHouseIds,
} from 'utils/characterItemHelper';
import { Character } from 'common/types';

const CharacterItem: React.FC<Props> = ({ characterData }: Props) => {
  const history = useHistory();
  const areHousesAvailable = (allegiances: string[]): boolean => allegiances.length !== 0;

  return (
    <CharacterWrapper>
      <CharacterColumnItem>
        {getCharacterName(characterData.name, characterData.aliases)}
      </CharacterColumnItem>
      <CharacterColumnItem>
        {getCharacterAliveField(characterData.born, characterData.died)}
      </CharacterColumnItem>
      <CharacterColumnItem>{characterData.gender}</CharacterColumnItem>
      <CharacterColumnItem>{characterData.culture || 'Unknown'}</CharacterColumnItem>
      <CharacterColumnItem>
        {areHousesAvailable(characterData.allegiances) ? (
          getCharacterHouseIds(characterData.allegiances, history)
        ) : (
          <CharacterItemParagraph>No allegiances</CharacterItemParagraph>
        )}
      </CharacterColumnItem>
    </CharacterWrapper>
  );
};

interface Props {
  characterData: Character;
}

export default CharacterItem;
