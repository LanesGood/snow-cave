import * as React from "react";
import { graphql, Link } from "gatsby";
import GlobalLayout from '../../layouts/global';

const WorkPage = ({ data }) => {
  return (
    <GlobalLayout pageTitle="Work">
      <p>Posts will go here</p>
      {data.allMarkdownRemark.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/work${node.fields.slug}`}><h2>{node.frontmatter.title}</h2></Link>
          <p>Posted: {node.frontmatter.year}</p>
        </article>
      ))}
    </GlobalLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          year(formatString: "MMMM D, YYYY")
          title
        }
        id
        fields {
          slug
        }
      }
    }
  }
`;
export default WorkPage;
