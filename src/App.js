import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import Nav from "./shared/components/navigation/Nav";
import UserPlaces from "./places/pages/UserPlaces";

import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/places/new" component={NewPlace} exact />
          <Route path="/:userId/places" component={UserPlaces} exact />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
