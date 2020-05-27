/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";

import { Button } from "./button";
import styles from "./about.module.css";
import { squareImage } from "../fragments/image";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
        ...squareImage
      }
    }
  `);

  return (
    <div id="about" className={styles.sectionWrapper}>
      <h1 className={styles.heading}>about</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.bodyText}>
            I'm a software engineer recently graduated from Cornell University
            and now working full-time in the NYC area. I have experience working
            full-stack: designing & building user-interfaces, APIs, and
            databases. If you're interested in reaching out, feel free to
            contact me through one of the following methods:
          </p>
          <ul className={styles.contactList}>
            <li className={styles.contactListItem}>
              <a href="mailto:wt237@cornell.edu" className={styles.contactLink}>
                <FaRegEnvelope className={styles.contactLinkIcon} />
                email
              </a>
            </li>
            <li className={styles.contactListItem}>
              <a
                href="https://www.linkedin.com/in/wes-tan/"
                className={styles.contactLink}
              >
                <FaLinkedin className={styles.contactLinkIcon} />
                linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
