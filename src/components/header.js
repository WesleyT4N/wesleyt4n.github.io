import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useRef } from "react";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>
      <Link to="/" className={styles.headerLink}>
        wes tan
      </Link>
    </h1>
    <h3 className={styles.subText}>software engineer</h3>
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/#about" className={styles.headerLink}>
            about
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/#projects" className={styles.headerLink}>
            projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://drive.google.com/file/d/17jxIatiiusm-bvqqiiXiqjG171xZRFgh/view?usp=sharing"
            className={styles.headerLink}
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
