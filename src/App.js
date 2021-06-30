import React from "react";
import { Route, Switch} from "react-router-dom";
import HomeRoute from "./route/home/HomeRoute";
import DetailRoute from "./route/detail/DetailRoute";
import styles from "./App.module.css"

function App() {
  return (
    <React.Fragment>
      <div className={styles.app}>
        <Switch>
          <Route path="/detail">
            <DetailRoute />
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
