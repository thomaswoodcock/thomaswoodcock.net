/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import Button from "../../components/Button";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  button: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  home: {
    fontFamily: theme.typography.serif,
    textDecoration: "none",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      height: "0.75rem",
      marginRight: theme.sizing.getSize(-3),
      width: "0.75rem",
    },
  },
  nav: {
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column",
      "[aria-expanded='false'] + &": {
        display: "none",
      },
    },
  },
  navItem: {
    display: "inline-block",
    marginLeft: theme.sizing.getSize(-1),
    marginRight: theme.sizing.getSize(-1),
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginBottom: theme.sizing.getSize(-2),
      marginTop: theme.sizing.getSize(-2),
    },
  },
  root: {
    display: "flex",
    listStyle: "none",
    padding: theme.sizing.getSize(-1),
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  },
}));

const NavBar = ({ links = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const styles = useStyles();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <nav css={styles.root}>
      <Link css={[styles.navItem, styles.home]} to="/">
        Thomas Woodcock <span className="visually-hidden">Home</span>
      </Link>
      {links.length > 0 && (
        <Fragment>
          <Button
            aria-expanded={expanded}
            css={[styles.navItem, styles.button]}
            onClick={() => setExpanded((exp) => !exp)}
          >
            <svg css={styles.icon} viewBox="0 0 100 100">
              <path
                d="M3,7 95,7 M3,50 95,50 M3,92 93,93"
                fill="none"
                focusable="false"
                stroke="currentColor"
                strokeWidth="15"
              />
            </svg>
            Menu
          </Button>
          <ul css={styles.nav}>
            {links.map((link, index) => (
              <li css={styles.navItem} key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </Fragment>
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
