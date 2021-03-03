import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "./Components/routes";

import {theme} from './stylesheet/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.Component}
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}

export default App;
