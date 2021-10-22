import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStyles } from "../styles/global";
import GlobalHeader from "../components/header";
import { themeVal } from "../styles/utils";
import GlobalFooter from "../components/footer";

const PageWrapper = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;
const PageHeading = styled.h1`
  color: ${themeVal('color.primary')};
`;
const GlobalLayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <>
        <GlobalStyles />
        <GlobalHeader />
        <PageWrapper>
          <title>{pageTitle | data.site.siteMetadata.title}</title>
            <PageHeading>{pageTitle}</PageHeading>
            {children}
        </PageWrapper>
        <GlobalFooter />
      </>
    </>
  );
};

export default GlobalLayout;
