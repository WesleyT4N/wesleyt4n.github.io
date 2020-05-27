import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./experience-list.module.css";
import ExperienceCard from "./experience-card";

const experienceQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___end_date] }
      filter: { frontmatter: { type: { eq: "experience" } } }
    ) {
      nodes {
        frontmatter {
          title
          role
          location
          start_date
          end_date
        }
        html
      }
    }
  }
`;

const ExperienceList = () => {
  const data = useStaticQuery(experienceQuery);
  const experience = data.allMarkdownRemark.nodes.map(p => ({
    ...p.frontmatter,
    html: p.html,
  }));
  return (
    <div id="experience" className={styles.sectionWrapper}>
      <h1 className={styles.heading}>experience</h1>
      <div className={styles.cardList}>
        {experience.map(e => (
          <ExperienceCard
            key={e.title}
            title={e.title}
            role={e.role}
            location={e.location}
            start_date={e.start_date}
            end_date={e.end_date}
            html={e.html}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
