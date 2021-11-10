import React from 'react';

import Button from 'components/Button';
import SelectField from 'components/SelectField';
import { availableGenders, availablePageSizes } from 'utils/filterOptions';
import { PaginationWrapper, PaginationButtons } from 'components/Pagination/Pagination.styles';
import { Gender } from 'common/types';

const Pagination: React.FC<Props> = ({
  pageNumber,
  pageSize,
  gender,
  setGender,
  setPageSize,
  setPageNumber,
}: Props) => (
  <PaginationWrapper>
    <PaginationButtons>
      <Button disabled={pageNumber === 1} text="First page" onClick={() => setPageNumber(1)} />
      <Button text="Previous page" onClick={() => setPageNumber(pageNumber - 1)} />
      <Button text="Next page" onClick={() => setPageNumber(pageNumber + 1)} />
      <Button text="Last page" onClick={() => setPageNumber(5)} />
      <SelectField options={availablePageSizes} value={pageSize} onChange={setPageSize} />
      <SelectField options={availableGenders} value={gender} onChange={setGender} />
    </PaginationButtons>
  </PaginationWrapper>
);

interface Props {
  pageNumber: number;
  pageSize: number;
  gender: Gender;
  setGender: (gender: Gender) => void;
  setPageSize: (pageSize: number) => void;
  setPageNumber: (pageSize: number) => void;
}

export default Pagination;
