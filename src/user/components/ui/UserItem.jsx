import { CardContent, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { Flex } from "../../../shared/layout";
import { UserContainer, Image } from "../styles";

const UserItem = ({ id, image, placesCount, name, history }) => (
  <UserContainer onClick={() => history.push(`/${id}/places`)}>
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
  </UserContainer>
);

export default withRouter(UserItem);
