import { Redirect, Route, Switch } from "react-router-dom";
import SignInForm from "../components/ui/SignInForm";
import SignUpForm from "../components/ui/SignUpForm";

const Auth = ({ match }) => (
  <Switch>
    <Route component={SignInForm} path={`${match.path}/sign-in`} exact />
    <Route component={SignUpForm} path={`${match.path}/sign-up`} exact />
    <Redirect to="/" />
  </Switch>
);

export default Auth;
