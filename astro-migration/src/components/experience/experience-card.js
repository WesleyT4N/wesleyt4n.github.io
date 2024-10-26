import React from "react";
import PropTypes from "prop-types";

import styles from "./experience-card.module.css";

const ExperienceCard = ({
  title,
  role,
  location,
  start_date,
  end_date,
  html,
}) => {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : null;

  let dateString = `${
    startDate.getUTCMonth() + 1
  }/${startDate.getUTCFullYear()} - `;
  dateString =
    dateString +
    (endDate
      ? `${endDate.getUTCMonth() + 1}/${endDate.getUTCFullYear()}`
      : "Present");

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>
          {title}
          <span className={styles.location}>{location}</span>
        </h2>
        <h2 className={styles.startEndDate}>{dateString}</h2>
      </div>
      <h3 className={styles.role}>{role}</h3>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string,
  html: PropTypes.string,
};

export default ExperienceCard;
