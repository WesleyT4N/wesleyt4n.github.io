import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";

import styles from "./about.module.css";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div id="about" className={styles.sectionWrapper}>
      <h1 className={styles.heading}>about</h1>
      <div className={styles.rowRev}>
        <div className={styles.column}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={styles.profileImage}
            alt="A Picture of Wes"
          />
        </div>
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
      </div>
    </div>
  );
};

export default About;
