import React from "react";
import { graphql } from "gatsby";
import { FaGithub } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./project-template.module.css";

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <h1 className={styles.projectHeader}>
          {frontmatter.title}
          <a href={frontmatter.repo_link} className={styles.projectLink}>
            <FaGithub />
          </a>
        </h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        repo_link
      }
    }
  }
`;

export default ProjectTemplate;
