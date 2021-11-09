import React from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import { GenericPageWrapper } from 'pages/GenericPage/GenericPage.styles';

const GenericPage: React.FC<Props> = ({ children }: Props) => (
  <GenericPageWrapper>
    <Navbar />
    {children}
    <Footer />
  </GenericPageWrapper>
);

interface Props {
  children: React.ReactNode;
}

export default GenericPage;
