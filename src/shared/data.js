import Users from "../user/pages/Users";
import NewPlace from "../places/pages/NewPlace";
import UserPlaces from "../places/pages/UserPlaces";
import Auth from "../user/pages/Auth";

export const authRoutes = [
  {
    path: "/",
    component: Users,
    exact: true,
  },
  {
    path: "/places/new",
    component: NewPlace,
    exact: true,
  },
  {
    path: "/:userId/places",
    component: UserPlaces,
    exact: true,
  },
];

export const unAuthRoutes = [
  {
    path: "/",
    component: Users,
    exact: true,
  },
  {
    path: "/auth",
    component: Auth,
    exact: false,
  },
];
