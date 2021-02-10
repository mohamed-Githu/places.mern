import { Card, CardActions, CardContent, CardMedia, styled, Typography } from "@material-ui/core";
import { Flex } from "../../shared/layout";

export const PlacesContainer = styled(Flex)(({ theme }) => ({
  margin: "1rem auto",
  padding: 0,
  width: "90%",
  maxWidth: "38rem",
  [theme.breakpoints.down("xs")]:{
    width: "100%",
    margin: "1rem 0",
  }
}));

export const MediaContainer = styled(CardMedia)(({ theme }) => ({
  height: "15rem",
  [theme.breakpoints.up("lg")]: {
    height: "20rem",
  },
}));

export const PlacesActions = styled(CardActions)({
  padding: "1rem .5rem",
  borderTop: "1px solid #888888",
  display: "flex",
  "& *:first-child": {
    marginRight: "auto",
  },
});

export const PlacesContent = styled(CardContent)({
  padding: "2rem",
  "& *": {
    textAlign: "center",
    marginBottom: ".5rem",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  "& *:last-child": {
    fontWeight: 400,
    fontSize: "1rem",
  },
  "& *:nth-child(2)": {
    fontSize: "1.1rem",
  },
});

export const PlacesCard = styled(Card)(({ theme }) => ({
  width: "40rem",
  maxWidth: "100%",
  marginBottom: "4rem",
  [theme.breakpoints.down("xs")]: {
    borderRadius: 0,
  },
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.common.grey,
  fontSize: "1.4rem",
}));

export const ModalHeader = styled(Flex)(({ theme }) => ({
  padding: "1rem",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "space-between",
}));
