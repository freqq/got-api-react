import React from 'react';

import Button from 'components/Button';
import SelectField from 'components/SelectField';
import PageIndicator from 'components/PageIndicator';

import firstPageIcon from 'assets/first_page.svg';
import leftArrowIcon from 'assets/left_arrow.svg';
import rightArrowIcon from 'assets/right_arrow.svg';
import lastPageIcon from 'assets/last_page.svg';

import { availableGenders, availablePageSizes } from 'utils/filterOptions';
import {
  PaginationWrapper,
  PaginationButtons,
  PaginationFilters,
} from 'components/Pagination/Pagination.styles';
import { Gender } from 'common/types';

const Pagination: React.FC<Props> = ({
  pageNumber,
  pageSize,
  gender,
  lastPage,
  setGender,
  setPageSize,
  setPageNumber,
}: Props) => (
  <PaginationWrapper>
    <PaginationFilters>
      <SelectField
        label="Page size"
        options={availablePageSizes}
        value={pageSize}
        onChange={setPageSize}
      />
      <SelectField label="Gender" options={availableGenders} value={gender} onChange={setGender} />
    </PaginationFilters>

    <PaginationButtons>
      <Button disabled={pageNumber === 1} icon={firstPageIcon} onClick={() => setPageNumber(1)} />
      <Button
        disabled={pageNumber === 1}
        icon={leftArrowIcon}
        onClick={() => setPageNumber(pageNumber - 1)}
      />
      <PageIndicator pageNumber={pageNumber} lastPage={lastPage} />
      <Button
        disabled={pageNumber === lastPage}
        icon={rightArrowIcon}
        onClick={() => setPageNumber(pageNumber + 1)}
      />
      <Button
        disabled={pageNumber === lastPage}
        icon={lastPageIcon}
        onClick={() => setPageNumber(lastPage)}
      />
    </PaginationButtons>
  </PaginationWrapper>
);

interface Props {
  pageNumber: number;
  pageSize: number;
  gender: Gender;
  lastPage: number;
  setGender: (gender: Gender) => void;
  setPageSize: (pageSize: number) => void;
  setPageNumber: (pageSize: number) => void;
}

export default Pagination;
