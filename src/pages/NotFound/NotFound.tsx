/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import Box from "../../components/Box";
import Heading from "../../components/Heading";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  heading: {
    fontSize: theme.sizing.getSize(5),
  },
  link: {
    marginTop: theme.sizing.getSize(0),
  },
}));

const NotFound = () => {
  const styles = useStyles();

  return (
    <Box variant="centralized">
      <Heading css={styles.heading} level={1}>
        404
      </Heading>
      <Heading level={2}>Page not found.</Heading>
      <p css={styles.link}>
        <Link to="/">Back to thomaswoodcock.net</Link>
      </p>
    </Box>
  );
};

export default NotFound;
