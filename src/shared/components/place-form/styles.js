import { Button, Card, styled, Typography } from "@material-ui/core";

export const FormContainer = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  padding: "1rem 2rem",
  width: "40rem",
  maxWidth: "100%",
  margin: "10rem auto",
  boxSizing: "border-box",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
  "& .Mui-error": {
    color: "#f44336",
  },
  "& .MuiFormControl-root": {
    marginBottom: "2rem",
  }
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontSize: "2.5rem",
  color: theme.palette.secondary.main,
  textAlign: "center",
  marginBottom: "2.2rem",
}));

export const FormSubmit = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "none",
  color: theme.palette.secondary.main,
  fontWeight: 700,
  "&:hover": {
    textDecoration: "underline",
  },
}));
