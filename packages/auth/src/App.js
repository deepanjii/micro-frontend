import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = ({ history, onSignin }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "auth"
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignin} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;