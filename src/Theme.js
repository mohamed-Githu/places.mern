import { createMuiTheme, darken, lighten} from '@material-ui/core/styles';

const yellow = "#ffd900";
const grey = "#292929";
const backGrey = "#ffd9";
const backGrey2 = "#382e2e";

const theme = createMuiTheme({
  palette: {
    common: {
      yellow,
      grey,
      backGrey,
      backGrey2,
      white: "#fff",
    },
    primary: {
      main: yellow,
    },
    secondary: {
      main: grey,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: grey,
    },
    h1: {
      color: yellow,
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.5,
    },
  },
})

export default theme;