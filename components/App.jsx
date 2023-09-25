import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Women from './Women';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/trends" component={Trends} />
        <Route exact path="/new" component={New} />
        <Route exact path="/plus" component={PlusSize} />
        <Route exact path="/brands" component={Brands} />
      </Switch>
    </Router>
  );
}

export default App;