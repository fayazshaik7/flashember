import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { URLS } from "./constants/path";
import "./index.scss";
import CreateCard from "./pages/CreateCard";

function App() {
  return (
    <div className="App stretch">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to={URLS.CREATE_CARD} />
          </Route>
          <Route path={URLS.CREATE_CARD}>
            <CreateCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
