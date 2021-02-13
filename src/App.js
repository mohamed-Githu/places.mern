import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import Nav from "./shared/components/navigation/ui/Nav";
import UserPlaces from "./places/pages/UserPlaces";
import Auth from "./user/pages/Auth";

import theme from "./Theme";
import AuthProvider from "./shared/context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/places/new" component={NewPlace} exact />
            <Route path="/:userId/places" component={UserPlaces} exact />
            <Route path="/auth" component={Auth} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
