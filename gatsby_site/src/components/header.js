import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styles from "./header.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>
      <Link to="/" className={styles.headerLink}>
        wes tan
      </Link>
    </h1>
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.headerLink}>about</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.headerLink}>projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.headerLink}>contact</Link>
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
