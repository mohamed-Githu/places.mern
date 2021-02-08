import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  styled,
} from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const CardContainer = styled(Card)(({ theme }) => ({
  margin: "1rem",
  width: "calc(45% - 2rem)",
  minWidth: "20rem",
  backgroundColor: theme.palette.common.grey,
  color: theme.palette.common.yellow,
  cursor: "pointer",
  "& h6": {
    color: theme.palette.common.white,
  },
  "&:hover": {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.common.grey,
    "& h6": {
      color: theme.palette.common.grey,
    },
  },
}));

const Image = styled(Avatar)({
  width: "4rem",
  height: "4rem",
  marginRight: "1rem",
});

const Flex = styled("div")({
  display: "flex",
  flexDirection: (props) => (props.direction ? props.direction : "row"),
});

const UserItem = ({ id, image, placesCount, name, history }) => (
  <CardContainer onClick={() => history.push(`/${id}/places`)}>
    <CardContent style={{ paddingBottom: "1rem" }}>
      <Flex>
        <Image alt={name} src={image} />
        <Flex direction="column">
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
            {placesCount + (placesCount === 1 ? " Place" : " Places")}
          </Typography>
        </Flex>
      </Flex>
    </CardContent>
  </CardContainer>
);

export default withRouter(UserItem);
