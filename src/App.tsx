import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from "./containers/IndexPage";
import GamePage from "./containers/GamePage";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/game/:id" component={GamePage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
  );
}

export default App;
