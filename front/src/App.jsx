import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "../src/Jsx/Home";
import { InitialPage } from "../src/Jsx/InitialPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route extact path="/">
            <InitialPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
