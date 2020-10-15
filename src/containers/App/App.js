import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SkipLink from "../../components/SkipLink";
import Spinner from "../../components/Spinner";

import styles from "./App.module.css";

const NotFound = lazy(() => import("../../pages/NotFound"));

const App = () => (
  <div className={styles.App}>
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  </div>
);

export default App;
