/** @jsx jsx */
import { Global, jsx } from "@emotion/core";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "emotion-theming";
import { Redirect, Route, Switch } from "react-router-dom";

import ErrorBoundary from "../../components/ErrorBoundary";
import Footer from "../../components/Footer";
import NavBar from "../NavBar";
import SkipLink from "../../components/SkipLink";
import Spinner from "../../components/Spinner";

import { createStyles, createTheme } from "../../styles";

const theme = createTheme();

const useStyles = createStyles((theme) => ({
  global: {
    "&:focus": {
      outlineOffset: theme.sizing.getSize(-5),
      outlineStyle: "solid",
      outlineWidth: theme.sizing.getSize(-5),
    },
    "&:root": {
      fontSize: "calc(0.333vw + 1em)",
      lineHeight: theme.sizing.ratio,
    },
  },
  main: {
    flex: 1,
  },
  root: {
    backgroundColor: theme.colors.background.primary,
    borderColor: theme.colors.border.primary,
    color: theme.colors.typography.primary,
    display: "flex",
    flexDirection: "column",
    fontFamily: theme.typography.sans,
    height: "100vh",
    outlineColor: theme.colors.border.primary,
  },
}));

const Home = lazy(() => import("../../pages/Home"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const App = () => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles.global} />
      <div css={styles.root}>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route component={NotFound} exact path="/404" />
              <Route>
                <SkipLink />
                <NavBar links={[]} />
                <main css={styles.main} id="main">
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
    </ThemeProvider>
  );
};

export default App;
