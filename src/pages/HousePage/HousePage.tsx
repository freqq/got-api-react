import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

import { fetchHouseData } from 'actions/houseActions';
import { House } from 'common/types';
import { IApplicationStore } from 'store';

const HousePage: React.FC<Props> = ({ houseData, fetchHouseDataFunc }: Props) => {
  const { houseId } = useParams<{ houseId: string }>();

  useEffect(() => {
    fetchHouseDataFunc(houseId);
  }, [houseId]);

  return <div>HousePage: {JSON.stringify(houseData)}</div>;
};

HousePage.defaultProps = {
  houseData: undefined,
};

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  houseData?: House;
}

interface PropsDispatch {
  fetchHouseDataFunc: (houseId: string) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  houseData: state.house.data,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  fetchHouseDataFunc: (houseId: string) => dispatch(fetchHouseData(houseId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HousePage));
