import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="\" component={Users} exact />
          <Route path="\places\new" component={NewPlace} exact />
          <Redirect path="\" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
