import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SkipLink from "../../components/SkipLink";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.App}>
    <SkipLink />
    <NavBar links={[]} />
    <main id="main">
      <Header
        subtitle="This is my personal website project."
        title="Thomas Woodcock"
      />
    </main>
    <Footer />
  </div>
);

export default App;
