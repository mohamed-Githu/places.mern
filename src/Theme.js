import { createMuiTheme} from '@material-ui/core/styles';

const yellow = "#ffd900";
const grey = "#292929";
const backGrey = "#ffd9";

const theme = createMuiTheme({
  palette: {
    common: {
      yellow: `${yellow}`,
      grey: `${grey}`,
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