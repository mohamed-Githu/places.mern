import { Card, CardContent, Typography } from "@material-ui/core";

import PlacesItem from "./PlacesItem";
import { PlacesContainer } from "./styles";

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
