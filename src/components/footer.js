import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet'


const GlobalFooterWrapper = styled.footer`
  margin: 0;
  padding: 2rem 0;
`;
const GlobalFooterInner = styled.div`
  display: flex;
  align-items: center;
`;

const GlobalFooter = () => {
  return (
    <GlobalFooterWrapper role='banner'>
      <GlobalFooterInner>
        <nav role='navigation'>
          <a href='mailto:info@info.org'>Email</a>
          <a href='https://google.com'>Google</a>
        </nav>
      </GlobalFooterInner>
    </GlobalFooterWrapper>
  )
}

export default GlobalFooter;