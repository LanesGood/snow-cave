import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from 'react-helmet'


const GlobalHeaderWrapper = styled.header`
  margin: 0 auto;
  padding: 0;
`;
const GlobalHeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

const GlobalMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const GlobalNavLink = styled.li`
  padding-right: 2rem;
`;
const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  img {
    max-width: 100%;
    padding-right: 1rem;
  }
`;
const GlobalHeader = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <GlobalHeaderWrapper role='banner'>
      <GlobalHeaderInner>
        <MenuLink to='/'>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src='../images/icon.png'
            width='60'
          />
          <h1>{data.site.siteMetadata.title}</h1>
        </MenuLink>
        <nav role='navigation'>
          <GlobalMenu>
            <GlobalNavLink>
              <Link to='/work'>Work</Link>
            </GlobalNavLink>
            <GlobalNavLink>
              <Link to='/about'>About</Link>
            </GlobalNavLink>
          </GlobalMenu>
        </nav>
      </GlobalHeaderInner>
    </GlobalHeaderWrapper>
  )
}

export default GlobalHeader;