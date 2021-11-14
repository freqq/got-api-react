import React from 'react';

import errorIcon from 'assets/error.svg';

import { ErrorWrapper, ErrorImage, ErrorText } from 'components/Error/Error.styles';

const Error = () => (
  <ErrorWrapper>
    <ErrorImage src={errorIcon} alt="erorr-icon" />
    <ErrorText>There was an error while fetching data</ErrorText>
  </ErrorWrapper>
);

export default Error;
