import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  CharacterWrapper,
  CharacterColumnItem,
  CharacterItemParagraph,
  CharacterHouses,
  CharacterHouseItem,
} from 'components/CharacterItem/CharacterItem.styles';
import {
  getCharacterName,
  getCharacterAliveField,
  getHouseIdFromLink,
} from 'utils/characterItemHelper';
import { Character } from 'common/types';

const CharacterItem: React.FC<Props> = ({ characterData }: Props) => {
  const history = useHistory();

  const areHousesAvailable = (allegiances: string[]): boolean => allegiances.length !== 0;

  const goToHousePage = (houseId: string) => history.push(`/house/${houseId}`);

  const getCharacterHouseIds = (allegiances: string[]) => (
    <CharacterHouses>
      {allegiances.map((allegiance: string) => {
        const houseId = getHouseIdFromLink(allegiance);

        return (
          <CharacterHouseItem key={houseId} onClick={() => goToHousePage(houseId || 'not-found')}>
            {houseId}
          </CharacterHouseItem>
        );
      })}
    </CharacterHouses>
  );

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
          getCharacterHouseIds(characterData.allegiances)
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
