import { Grid, Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const UserItem = ({ id, image, placesCount, name }) => (
  <Grid item>
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item direction="column">
            <Typography variant="h2">{name}</Typography>
            <Typography variant="subtitle1">
              {placesCount} {placesCount === 1 ? "Place" : "Places"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);

export default UserItem;
