import React from 'react';

import CharacterItem from 'components/CharacterItem';
import Loader from 'components/Loader';
import EmptyList from 'components/EmptyList';
import Error from 'components/Error';

import {
  CharacterTableWrapper,
  CharacterTableHeader,
  CharacterTableList,
} from 'components/CharacterTable/CharacterTable.styles';
import { CharacterColumnItem } from 'components/CharacterItem/CharacterItem.styles';
import { Character } from 'common/types';

const CharacterTable: React.FC<Props> = ({
  characters,
  headerNames,
  isFetching,
  isEmpty,
  isError,
  textFilter,
}: Props) => {
  const showTableContent = () => {
    if (isFetching) return <Loader />;

    if (isError) return <Error />;

    if (isEmpty) return <EmptyList textFilter={textFilter} />;

    if (!isFetching && !isEmpty)
      return (
        <CharacterTableList>
          {characters.map((character: Character) => (
            <CharacterItem key={character.url} characterData={character} />
          ))}
        </CharacterTableList>
      );

    return null;
  };

  return (
    <CharacterTableWrapper>
      <CharacterTableHeader>
        {headerNames.map((name: string) => (
          <CharacterColumnItem key={name}>{name}</CharacterColumnItem>
        ))}
      </CharacterTableHeader>
      {showTableContent()}
    </CharacterTableWrapper>
  );
};
interface Props {
  isFetching: boolean;
  isEmpty: boolean;
  isError: boolean;
  textFilter: string;
  headerNames: string[];
  characters: Character[];
}

export default CharacterTable;
