import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import GenericPage from 'pages/GenericPage';
import Card from 'components/Card';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Error from 'components/Error';

import { houseDataList } from 'utils/houseDataList';
import { CardsGrid } from 'pages/HousePage/HousePage.styles';
import { fetchHouseData } from 'actions/houseActions';
import { CardData, House } from 'common/types';
import { IApplicationStore } from 'store';

const HousePage: React.FC<Props> = ({
  houseData,
  fetchHouseDataFunc,
  isFetching,
  isError,
}: Props) => {
  const history = useHistory();
  const { houseId } = useParams<{ houseId: string }>();

  useEffect(() => {
    fetchHouseDataFunc(houseId);
  }, [houseId, fetchHouseDataFunc]);

  const onBackClick = () => history.push('/');

  const showHousePageDetails = () => {
    if (isError) return <Error />;

    if (isFetching) return <Loader />;

    return (
      <CardsGrid>
        {houseDataList(houseData as House).map((cardItem: CardData) => (
          <Card
            key={cardItem.name}
            name={cardItem.name}
            value={cardItem.value}
            icon={cardItem.icon}
          />
        ))}
      </CardsGrid>
    );
  };

  return (
    <GenericPage>
      <Button text="Back to characters list" onClick={onBackClick} />
      {showHousePageDetails()}
    </GenericPage>
  );
};

HousePage.defaultProps = {
  houseData: undefined,
};

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  houseData?: House;
  isFetching: boolean;
  isError: boolean;
}

interface PropsDispatch {
  fetchHouseDataFunc: (houseId: string) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  houseData: state.house.data,
  isFetching: state.house.isFetching,
  isError: state.house.isError,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  fetchHouseDataFunc: (houseId: string) => dispatch(fetchHouseData(houseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HousePage);
