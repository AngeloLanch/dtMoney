import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </Router>
  );
}
