import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = ({ links = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <nav className={styles.root}>
      <Link className={styles.homeLink} to="/">
        Thomas Woodcock <span className={styles.visuallyHidden}>Home</span>
      </Link>
      {links.length > 0 && (
        <>
          <button
            aria-expanded={expanded}
            className={styles.menuButton}
            onClick={() => setExpanded((exp) => !exp)}
          >
            <svg className={styles.icon} viewBox="0 0 100 100">
              <path
                d="M3,7 95,7 M3,50 95,50 M3,92 93,93"
                fill="none"
                focusable="false"
                stroke="currentColor"
                strokeWidth="15"
              />
            </svg>
            Menu
          </button>
          <ul className={styles.linkList}>
            {links.map((link, index) => (
              <li className={styles.linkListItem} key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default NavBar;
