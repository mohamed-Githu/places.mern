import { createMuiTheme} from '@material-ui/core/styles';

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
      main: `${grey}`
    },
    secondary: {
      main: `${yellow}`
    }
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: yellow,
    },
    h1: {
      color: grey,
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.5,
    },
  }
})

export default theme;