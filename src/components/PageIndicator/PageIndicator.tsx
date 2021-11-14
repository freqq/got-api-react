import React from 'react';

import { PageIndicatorWrapper } from 'components/PageIndicator/PageIndicator.styles';

const PageIndicator: React.FC<Props> = ({ pageNumber, lastPage }: Props) => (
  <PageIndicatorWrapper>
    Page {pageNumber} of {lastPage}
  </PageIndicatorWrapper>
);

interface Props {
  pageNumber: number;
  lastPage: number;
}

export default PageIndicator;
