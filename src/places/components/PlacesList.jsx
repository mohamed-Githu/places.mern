import { Card, CardContent, styled, Typography } from "@material-ui/core";

import PlacesItem from "./PlacesItem";
import { Flex } from "../../shared/layout";

const PlacesContainer = styled(Flex)({
  margin: "1rem auto",
  padding: 0,
  width: "90%",
  maxWidth: "40rem",
});

const PlacesList = ({ items }) =>
  items.length ? (
    <PlacesContainer align="center" direction="column">
      {items.map((place) => (
        <PlacesItem {...place} key={place.id} />
      ))}
    </PlacesContainer>
  ) : (
    <Card>
      <CardContent>
        <Typography variant="h2" align="center">
          No Places Found. Create one?
        </Typography>
      </CardContent>
    </Card>
  );

export default PlacesList;
