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
      main: `${yellow}`
    },
    secondary: {
      main: `${grey}`
    }
  },
})

export default theme;