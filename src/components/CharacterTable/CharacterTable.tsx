import React from 'react';

import { CharacterTableWrapper } from 'components/CharacterTable/CharacterTable.styles';
import { Character } from 'common/types';
import CharacterItem from 'components/CharacterItem';

const CharacterTable: React.FC<Props> = ({ characters }: Props) => (
  <CharacterTableWrapper>
    {characters.map((character: Character) => (
      <CharacterItem characterData={character} />
    ))}
  </CharacterTableWrapper>
);

interface Props {
  characters: Character[];
}

export default CharacterTable;
