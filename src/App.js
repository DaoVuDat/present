import React from "react";
import { Route, Switch} from "react-router-dom";
import HomeRoute from "./route/home/HomeRoute";
import Login from "./route/detail/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import styles from "./App.module.css"

function App() {
  return (
    <React.Fragment>
      <div className={styles.app}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/">
            <HomeRoute />
          </ProtectedRoute>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
