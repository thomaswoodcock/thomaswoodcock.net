import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ErrorBoundary from "../../components/ErrorBoundary";
import Footer from "../../components/Footer";
import NavBar from "../NavBar";
import SkipLink from "../../components/SkipLink";
import Spinner from "../../components/Spinner";

import styles from "./App.module.css";

const Home = lazy(() => import("../../pages/Home"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const App = () => (
  <div className={styles.root}>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route component={NotFound} exact path="/404" />
          <Route>
            <SkipLink />
            <NavBar links={[]} />
            <main className={styles.main} id="main">
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route component={Home} exact path="/" />
                  <Route component={() => <Redirect to="/404" />} />
                </Switch>
              </Suspense>
            </main>
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
