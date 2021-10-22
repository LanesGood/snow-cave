import * as React from 'react';
import { GlobalStyles } from '../styles/global';
import GlobalHeader from '../components/header';
import GlobalFooter from '../components/footer';


const StudyLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalHeader />
      {children}
      <GlobalFooter />
    </>
  )
}

export default StudyLayout;