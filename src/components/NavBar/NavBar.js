import React from "react";
import PropTypes from "prop-types";

import styles from "./NavBar.module.css";

const NavBar = ({ links = [] }) => (
  <nav className={styles.NavBar}>
    <ul>
      <li>
        <a href="/">
          Thomas Woodcock <span class="hidden">Home</span>
        </a>
      </li>
      {links.map((link) => (
        <li>
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
