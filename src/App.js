import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="\" component={Users} exact />
        <Route path="\places\new" component={NewPlace} exact />
        <Redirect path="\" />
      </Switch>
    </Router>
  );
}

export default App;
