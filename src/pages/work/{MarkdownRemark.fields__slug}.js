import * as React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import StudyLayout from "../../layouts/study";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { themeVal } from "../../styles/utils";

const StudyContent = styled.article`
display: grid;
margin: 0 auto;
/* max-width: ${themeVal('layout.max')}; */
grid-template-columns: 1fr repeat(12, minmax(auto, 4.25rem)) 1fr;
grid-template-rows: auto;
grid-gap: 1rem;
  h1, h2, h3, h4 {
    grid-column: 1 / -1;
  }
  h4 {
    text-transform: uppercase;
    opacity: 0.875;
  }
  p {
    grid-column: 3 / 10;  
  }
  @media ${themeVal('mediaRanges.small[1]')} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
`;
const DetailsList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: ${themeVal('type.heading.family')};
`;
export default function BlogTemplate({ data, }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const mainImage = getImage(frontmatter.thumbnail)

  return (
    <StudyLayout>
      <h1>{frontmatter.title}</h1>
      <GatsbyImage image={mainImage} />
      <DetailsList>
        <dt>Year</dt>
        <dd>{frontmatter.year}</dd>
        <dt>Role</dt>
        <dd>{frontmatter.role}</dd>
        <dt>Client:</dt>
        <dd>{frontmatter.for}</dd>
        <dt>Site:</dt>
        <dd><a href={frontmatter.site}>{frontmatter.site}</a></dd>
      </DetailsList>
      <StudyContent dangerouslySetInnerHTML={{ __html: html }}></StudyContent>
    </StudyLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        year(formatString: "YYYY")
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        role
        site
        for
      }
    }
  }
`;