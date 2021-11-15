import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';

import Button from 'components/Button';
import PageIndicator from 'components/PageIndicator';

import firstPageIcon from 'assets/first_page.svg';
import leftArrowIcon from 'assets/left_arrow.svg';
import rightArrowIcon from 'assets/right_arrow.svg';
import lastPageIcon from 'assets/last_page.svg';

import { setPageNumber } from 'actions/charactersFilterActions';
import { PaginationWrapper } from 'components/Pagination/Pagination.styles';
import { IApplicationStore } from 'store';

const Pagination: React.FC<Props> = ({ pageNumber, maxPage, setPageNumberFunc }: Props) => (
  <PaginationWrapper>
    <Button disabled={pageNumber === 1} icon={firstPageIcon} onClick={() => setPageNumberFunc(1)} />
    <Button
      disabled={pageNumber === 1}
      icon={leftArrowIcon}
      onClick={() => setPageNumberFunc(pageNumber - 1)}
    />
    <PageIndicator pageNumber={pageNumber} lastPage={maxPage} />
    <Button
      disabled={pageNumber === maxPage}
      icon={rightArrowIcon}
      onClick={() => setPageNumberFunc(pageNumber + 1)}
    />
    <Button
      disabled={pageNumber === maxPage}
      icon={lastPageIcon}
      onClick={() => setPageNumberFunc(maxPage)}
    />
  </PaginationWrapper>
);

interface Props extends PropsState, PropsDispatch {}

interface PropsState {
  pageNumber: number;
  maxPage: number;
}

interface PropsDispatch {
  setPageNumberFunc: (pageNumber: number) => void;
}

const mapStateToProps = (state: IApplicationStore): PropsState => ({
  pageNumber: state.charactersFilter.pageNumber,
  maxPage: state.charactersFilter.maxPage,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IApplicationStore, undefined, Action>,
): PropsDispatch => ({
  setPageNumberFunc: (pageNumber: number) => dispatch(setPageNumber(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
