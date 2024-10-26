import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./project-list.module.css";
import ProjectCard from "./project-card";

const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          excerpt
        }
      }
    }
  }
`;

const ProjectList = () => {
  const data = useStaticQuery(projectsQuery);
  const projects = data.allMarkdownRemark.nodes.map(p => p.frontmatter);
  return (
    <div id="projects" className={styles.sectionWrapper}>
      <h1 className={styles.heading}>projects</h1>
      <div className={styles.cardList}>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            excerpt={project.excerpt}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
