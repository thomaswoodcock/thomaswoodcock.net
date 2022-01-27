/** @jsxImportSource @emotion/react */
import { Fragment } from "react";

import Box from "../../components/Box";
import Header from "../../components/Header";
import Heading from "../../components/Heading";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  "& * + *": {
    marginTop: theme.sizing.getSize(0),
  },
}));

const Home = () => {
  const styles = useStyles();

  return (
    <Fragment>
      <Header
        subtitle="This is my personal website project."
        title="Thomas Woodcock"
      />
      <Box variant="contained">
        <article css={styles}>
          <Heading level={2}>Hello</Heading>
          <p>
            {"I'm Tom, I'm a web developer, and this is my personal website. "}
          </p>
          <p>
            {`There's not much here, yet, but eventually this is where I'll show
          and discuss the projects that I'm working on.`}
          </p>
          <p>
            {`Come back another time and something may be here!`}
          </p>
        </article>
      </Box>
    </Fragment>
  );
};

export default Home;
