import React from 'react';
import { connect } from 'react-redux';

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
import { characterTableHeaders } from 'utils/characterHeader';
import { IApplicationStore } from 'store';

const CharacterTable: React.FC<Props> = ({
  charactersList,
  isFetching,
  isError,
  textFilter,
}: Props) => {
  const isEmpty = (): boolean => !isFetching && charactersList.length === 0;

  const shouldShowTableContent = () => !isFetching && !isEmpty();

  const showTableContent = () => {
    if (isFetching) return <Loader />;

    if (isError) return <Error />;

    if (isEmpty()) return <EmptyList textFilter={textFilter} />;

    if (shouldShowTableContent())
      return (
        <CharacterTableList>
          {charactersList.map((character: Character) => (
            <CharacterItem key={character.url} characterData={character} />
          ))}
        </CharacterTableList>
      );

    return null;
  };

  const showTableHeader = () =>
    characterTableHeaders.map((name: string) => (
      <CharacterColumnItem key={name}>{name}</CharacterColumnItem>
    ));

  return (
    <CharacterTableWrapper>
      <CharacterTableHeader>{showTableHeader()}</CharacterTableHeader>
      {showTableContent()}
    </CharacterTableWrapper>
  );
};

type Props = PropsState;

interface PropsState {
  charactersList: Character[];
  isFetching: boolean;
  isError: boolean;
  textFilter: string;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  charactersList: state.characters.data,
  isFetching: state.characters.isFetching,
  isError: state.characters.isError,
  textFilter: state.charactersFilter.textFilter,
});

export default connect(mapStateToProps)(CharacterTable);
