import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';

import SelectField from 'components/SelectField';

import { FilteringWrapper } from 'components/Filtering/Filtering.styles';
import { availableGenders, availablePageSizes } from 'utils/filterOptions';
import { Gender } from 'common/types';
import { IApplicationStore } from 'store';
import { setPageSize, setGender } from 'actions/charactersFilterActions';

const Filtering: React.FC<Props> = ({ setPageSizeFunc, pageSize, gender, setGenderFunc }) => (
  <FilteringWrapper>
    <SelectField
      label="Page size"
      options={availablePageSizes}
      value={pageSize}
      onChange={setPageSizeFunc}
    />
    <SelectField
      label="Gender"
      options={availableGenders}
      value={gender}
      onChange={setGenderFunc}
    />
  </FilteringWrapper>
);

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  pageSize: number;
  gender: Gender;
}

interface PropsDispatch {
  setPageSizeFunc: (pageSize: number) => void;
  setGenderFunc: (gender: Gender) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  pageSize: state.charactersFilter.pageSize,
  gender: state.charactersFilter.gender,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  setPageSizeFunc: (pageSize: number) => dispatch(setPageSize(pageSize)),
  setGenderFunc: (gender: Gender) => dispatch(setGender(gender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtering);
