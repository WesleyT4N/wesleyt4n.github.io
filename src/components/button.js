import React from "react";
import PropTypes from "prop-types";

import styles from "./button.modules.css";

export const Button = ({ children, onClick }) => (
  <button className={styles.default} onClick={onClick}>
    {children}
  </button>
);
