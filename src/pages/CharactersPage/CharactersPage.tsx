import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';

import GenericPage from 'pages/GenericPage';
import InputField from 'components/InputField';
import Pagination from 'components/Pagination';
import CharacterTable from 'components/CharacterTable';

import { characterTableHeaders } from 'utils/characterHeader';
import { fetchListOfCharacters } from 'actions/charactersActions';
import {
  setTextFilter,
  setPageNumber,
  setPageSize,
  setGender,
} from 'actions/charactersFilterActions';
import { IApplicationStore } from 'store';
import { Character, Gender } from 'common/types';

const CharactersPage: React.FC<Props> = ({
  fetchListOfCharactersFunc,
  setTextFilterFunc,
  setPageSizeFunc,
  setPageNumberFunc,
  setGenderFunc,
  gender,
  charactersList,
  isFetching,
  textFilter,
  pageSize,
  pageNumber,
  maxPage,
  isError,
}: Props) => {
  useEffect(() => {
    fetchListOfCharactersFunc(textFilter, pageNumber, pageSize, gender);
  }, [textFilter, pageNumber, pageSize, gender]);

  const shouldShowLoader = () => isFetching;

  const shouldShowEmptyList = () => !isFetching && charactersList.length === 0;

  return (
    <GenericPage>
      <InputField
        value={textFilter}
        onChange={setTextFilterFunc}
        placeholder="Filter characters by culture..."
      />
      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        gender={gender}
        setGender={setGenderFunc}
        setPageNumber={setPageNumberFunc}
        setPageSize={setPageSizeFunc}
        lastPage={maxPage}
      />

      <CharacterTable
        characters={charactersList}
        headerNames={characterTableHeaders}
        isFetching={shouldShowLoader()}
        isEmpty={shouldShowEmptyList()}
        isError={isError}
        textFilter={textFilter}
      />
    </GenericPage>
  );
};

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  charactersList: Character[];
  isFetching: boolean;
  isError: boolean;
  textFilter: string;
  pageSize: number;
  pageNumber: number;
  maxPage: number;
  gender: Gender;
}

interface PropsDispatch {
  fetchListOfCharactersFunc: (
    textFilter: string,
    pageNumber: number,
    pageSize: number,
    gender: Gender,
  ) => void;
  setTextFilterFunc: (textFilter: string) => void;
  setPageSizeFunc: (pageSize: number) => void;
  setPageNumberFunc: (pageNumber: number) => void;
  setGenderFunc: (gender: Gender) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  charactersList: state.characters.data,
  isFetching: state.characters.isFetching,
  isError: state.characters.isError,
  textFilter: state.charactersFilter.textFilter,
  pageSize: state.charactersFilter.pageSize,
  pageNumber: state.charactersFilter.pageNumber,
  maxPage: state.charactersFilter.maxPage,
  gender: state.charactersFilter.gender,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  fetchListOfCharactersFunc: (
    textFilter: string,
    pageNumber: number,
    pageSize: number,
    gender: Gender,
  ) => dispatch(fetchListOfCharacters(textFilter, pageNumber, pageSize, gender)),
  setTextFilterFunc: (textFilter: string) => dispatch(setTextFilter(textFilter)),
  setPageSizeFunc: (pageSize: number) => dispatch(setPageSize(pageSize)),
  setPageNumberFunc: (pageNumber: number) => dispatch(setPageNumber(pageNumber)),
  setGenderFunc: (gender: Gender) => dispatch(setGender(gender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
