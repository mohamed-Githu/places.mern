import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import PlacesItem from "./PlacesItem";
import { PlacesContainer } from "../styles";
import CustomButton from "../../../shared/components/CustomButton";
import { Flex } from "../../../shared/layout";

const PlacesList = ({ items }) =>
  items.length ? (
    <PlacesContainer align="center" direction="column">
      {items.map((place) => (
        <PlacesItem {...place} key={place.id} />
      ))}
    </PlacesContainer>
  ) : (
    <Card style={{ width: "50rem", margin: "1rem auto" }}>
      <CardContent>
        <Flex direction="column" align="center">
          <Typography variant="h4" align="center">
            No Places Found. Create one?
          </Typography>
          <Link style={{ textDecoration: "none", marginTop: "2rem" }} to="/places/new">
            <CustomButton>Share Place</CustomButton>
          </Link>
        </Flex>
      </CardContent>
    </Card>
  );

export default PlacesList;
