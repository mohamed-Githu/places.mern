import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const authLinks = [
  {
    id: 0,
    name: "All Users",
    routeName: "/",
    Icon: HomeIcon,
  },
  {
    id: 1,
    name: "My Places",
    routeName: "/17/places",
    Icon: AccountCircleIcon,
  },
  {
    id: 2,
    name: "Add Place",
    routeName: "/places/new",
    Icon: PeopleIcon,
  },
];

export const unAuthLinks = [
  {
    id: 0,
    name: "All Users",
    routeName: "/",
    Icon: HomeIcon,
  },
  {
    id: 3,
    name: "Authentication",
    routeName: "/auth/sign-in",
    Icon: VpnKeyIcon,
  },
];

