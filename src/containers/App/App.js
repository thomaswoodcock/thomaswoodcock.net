import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SkipLink from "../../components/SkipLink";

import styles from "./App.module.css";

import NotFound from "../../pages/NotFound";

const App = () => (
  <HashRouter basename="/">
    <div className={styles.App}>
      <Switch>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route>
          <SkipLink />
          <NavBar links={[]} />
          <main id="main">
            <Switch>
              <Route exact path="/">
                <Header
                  subtitle="This is my personal website project."
                  title="Thomas Woodcock"
                />
              </Route>
              <Route>
                <Redirect to="/404" />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  </HashRouter>
);

export default App;
