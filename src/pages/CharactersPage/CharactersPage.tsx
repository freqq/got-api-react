import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericPage from 'pages/GenericPage';
import InputField from 'components/InputField';
import Pagination from 'components/Pagination';
import CharacterTable from 'components/CharacterTable';
import Loader from 'components/Loader';

import { fetchListOfCharacters } from 'actions/charactersActions';
import { setTextFilter, setPageNumber, setPageSize } from 'actions/charactersFilterActions';
import { IApplicationStore } from 'store';
import { Character } from 'common/types';

const CharactersPage: React.FC<Props> = ({
  fetchListOfCharactersFunc,
  setTextFilterFunc,
  setPageSizeFunc,
  setPageNumberFunc,
  charactersList,
  isFetching,
  textFilter,
  pageSize,
  pageNumber,
}: Props) => {
  useEffect(() => {
    fetchListOfCharactersFunc(textFilter, pageNumber, pageSize);
  }, [textFilter, pageNumber, pageSize]);

  const shouldShowLoader = () => isFetching;

  return (
    <GenericPage>
      <InputField
        value={textFilter}
        onChange={setTextFilterFunc}
        placeholder="Search for character..."
      />
      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumberFunc}
        setPageSize={setPageSizeFunc}
      />
      {shouldShowLoader() ? <Loader /> : <CharacterTable characters={charactersList} />}
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
}

interface PropsDispatch {
  fetchListOfCharactersFunc: (textFilter: string, pageNumber: number, pageSize: number) => void;
  setTextFilterFunc: (textFilter: string) => void;
  setPageSizeFunc: (pageSize: number) => void;
  setPageNumberFunc: (pageNumber: number) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  charactersList: state.characters.data,
  isFetching: state.characters.isFetching,
  isError: state.characters.isError,
  textFilter: state.charactersFilter.textFilter,
  pageSize: state.charactersFilter.pageSize,
  pageNumber: state.charactersFilter.pageNumber,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  fetchListOfCharactersFunc: (textFilter: string, pageNumber: number, pageSize: number) =>
    dispatch(fetchListOfCharacters(textFilter, pageNumber, pageSize)),
  setTextFilterFunc: (textFilter: string) => dispatch(setTextFilter(textFilter)),
  setPageSizeFunc: (pageSize: number) => dispatch(setPageSize(pageSize)),
  setPageNumberFunc: (pageNumber: number) => dispatch(setPageNumber(pageNumber)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersPage));
