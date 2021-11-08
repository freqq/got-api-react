import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'components/Button';
import { fetchListOfCharacters } from 'actions/charactersActions';
import { IApplicationStore } from 'store';
import { Character } from 'common/types';

const CharactersPage: React.FC<Props> = ({ fetchListOfCharactersFunc, charactersList }: Props) => {
  useEffect(() => {
    fetchListOfCharactersFunc();
  }, []);

  return (
    <div>
      <Button text="Example button" />
      {JSON.stringify(charactersList)}
    </div>
  );
};

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  charactersList: Character[];
  isFetching: boolean;
  isError: boolean;
}

interface PropsDispatch {
  fetchListOfCharactersFunc: () => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  charactersList: state.characters.data,
  isFetching: state.characters.isFetching,
  isError: state.characters.isError,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  fetchListOfCharactersFunc: () => dispatch(fetchListOfCharacters()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersPage));
