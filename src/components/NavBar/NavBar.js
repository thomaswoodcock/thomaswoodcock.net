import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = ({ links = [] }) => (
  <nav className={styles.NavBar}>
    <ul>
      <li>
        <Link to="/">
          Thomas Woodcock <span className="hidden">Home</span>
        </Link>
      </li>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>{link.title}</Link>
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
