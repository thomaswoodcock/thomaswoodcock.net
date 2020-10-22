import React from "react";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

import styles from "./Home.module.css";

const Home = () => (
  <>
    <Header
      subtitle="This is my personal website project."
      title="Thomas Woodcock"
    />
    <div className={styles.container}>
      <article>
        <Heading level={2}>Hello</Heading>
        <Paragraph>
          {"I'm Tom, I'm a web developer, and this is my personal website. "}
        </Paragraph>
        <Paragraph>
          {`There's not much here, yet, but eventually this is where I'll show
          and discuss the projects that I'm working on.`}
        </Paragraph>
        <Paragraph>
          {`In the meantime, this website is my project. Come back every now
          and then to see how it's progressing!`}
        </Paragraph>
      </article>
    </div>
  </>
);

export default Home;
