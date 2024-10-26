import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./project-card.module.css";

const ProjectCard = ({ title, excerpt, slug }) => {
  return (
    <div className={styles.cardWrapper}>
      <Link to={slug} className={styles.cardLink}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProjectCard;
