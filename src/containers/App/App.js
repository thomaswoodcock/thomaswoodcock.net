import React from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SkipLink from "../../components/SkipLink";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.App}>
    <SkipLink />
    <NavBar links={[]} />
    <main id="main">
      <Container />
    </main>
    <Footer />
  </div>
);

export default App;
