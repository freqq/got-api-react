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
  const { name, aliases, gender, culture, allegiances, died, born } = characterData;

  const areHousesAvailable = (): boolean => allegiances.length !== 0;

  const goToHousePage = (houseId: string) => history.push(`/house/${houseId}`);

  const getCharacterHouseIds = () => (
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
      <CharacterColumnItem>{getCharacterName(name, aliases)}</CharacterColumnItem>
      <CharacterColumnItem>{getCharacterAliveField(born, died)}</CharacterColumnItem>
      <CharacterColumnItem>{gender}</CharacterColumnItem>
      <CharacterColumnItem>{culture || 'Unknown'}</CharacterColumnItem>
      <CharacterColumnItem>
        {areHousesAvailable() ? (
          getCharacterHouseIds()
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
