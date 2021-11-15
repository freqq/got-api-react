import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';

import GenericPage from 'pages/GenericPage';
import InputField from 'components/InputField';
import Filtering from 'components/Filtering';
import Pagination from 'components/Pagination';
import CharacterTable from 'components/CharacterTable';

import { FilterWrapper } from 'pages/CharactersPage/CharactersPage.styles';
import { fetchListOfCharacters } from 'actions/charactersActions';
import { setTextFilter } from 'actions/charactersFilterActions';
import { IApplicationStore } from 'store';
import { Gender } from 'common/types';

const CharactersPage: React.FC<Props> = ({
  fetchListOfCharactersFunc,
  setTextFilterFunc,
  gender,
  textFilter,
  pageSize,
  pageNumber,
}: Props) => {
  useEffect(() => {
    fetchListOfCharactersFunc(textFilter, pageNumber, pageSize, gender);
  }, [textFilter, pageNumber, pageSize, gender, fetchListOfCharactersFunc]);

  return (
    <GenericPage>
      <InputField
        value={textFilter}
        onChange={setTextFilterFunc}
        placeholder="Filter characters by culture..."
      />
      <FilterWrapper>
        <Filtering />
        <Pagination />
      </FilterWrapper>
      <CharacterTable />
    </GenericPage>
  );
};

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  textFilter: string;
  pageSize: number;
  pageNumber: number;
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
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  textFilter: state.charactersFilter.textFilter,
  pageSize: state.charactersFilter.pageSize,
  pageNumber: state.charactersFilter.pageNumber,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
