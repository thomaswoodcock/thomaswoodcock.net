/** @jsxImportSource @emotion/react */

import Box from "../Box";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  padding: theme.sizing.getSize(3),
  textAlign: "center",
}));

const Footer = () => {
  const styles = useStyles();

  return (
    <footer css={styles}>
      <Box variant="contained">
        <p>
          <small>
            &copy;{" "}
            <a href="https://github.com/thomaswoodcock">Thomas Woodcock</a> 2023
          </small>
        </p>
      </Box>
    </footer>
  );
};

export default Footer;
