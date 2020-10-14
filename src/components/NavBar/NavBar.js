import React from "react";
import PropTypes from "prop-types";

import styles from "./NavBar.module.css";

const NavBar = ({ links = [] }) => (
  <nav className={styles.NavBar}>
    <ul>
      <li>
        <a href="/">
          Thomas Woodcock <span className="hidden">Home</span>
        </a>
      </li>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default NavBar;
