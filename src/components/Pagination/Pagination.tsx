import React from 'react';

import Button from 'components/Button';
import SelectField from 'components/SelectField';
import { PaginationWrapper, PaginationButtons } from 'components/Pagination/Pagination.styles';

const Pagination: React.FC<Props> = ({
  pageNumber,
  pageSize,
  setPageSize,
  setPageNumber,
}: Props) => (
  <PaginationWrapper>
    <PaginationButtons>
      <Button disabled={pageNumber === 1} text="First page" onClick={() => setPageNumber(1)} />
      <Button text="Previous page" onClick={() => setPageNumber(pageNumber - 1)} />
      <Button text="Next page" onClick={() => setPageNumber(pageNumber + 1)} />
      <Button text="Last page" onClick={() => setPageNumber(5)} />
      <SelectField options={[10, 25, 50]} value={pageSize} onChange={setPageSize} />
    </PaginationButtons>
  </PaginationWrapper>
);

interface Props {
  pageNumber: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  setPageNumber: (pageSize: number) => void;
}

export default Pagination;
