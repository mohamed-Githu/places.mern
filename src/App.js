import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import Nav from "./shared/components/navigation/ui/Nav";
import UserPlaces from "./places/pages/UserPlaces";
import Auth from "./user/pages/Auth";

import theme from "./Theme";
import { AuthContext } from "./shared/context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  let Routes = isLoggedIn ? () => (
    <>
      <Route path="/" component={Users} exact />
      <Route path="/places/new" component={NewPlace} exact />
      <Route path="/:userId/places" component={UserPlaces} exact />
    </>
  ) : () => (
    <>
      <Route path="/" component={Users} exact />
      <Route path="/auth" component={Auth} />
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContext.Provider value={{ login, isLoggedIn }}>
          <Nav />
          <Switch>
            <Routes />
            <Redirect to="/" />
          </Switch>
        </AuthContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
