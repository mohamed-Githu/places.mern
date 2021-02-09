import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

const MediaContainer = styled(CardMedia)(({ theme }) => ({
  height: "15rem",
  [theme.breakpoints.up("lg")]: {
    height: "20rem",
  },
}));

const PlacesActions = styled(CardActions)(({ theme }) => ({
  padding: "1rem 2rem",
  borderTop: "1px solid #888888",
  display: "flex",
  justifyContent: "space-around",
}));

const PlacesText = styled(Typography)({
  textAlign: "center",
  marginBottom: ".5rem",
  fontSize: (props) => (props.size ? props.size : "1rem"),
  fontWeight: (props) => (props.weight ? props.weight : 400),
});

const PlacesItem = ({ title, description, imageUrl, address }) => (
  <Card style={{ margin: "1rem 0" }}>
    <MediaContainer image={imageUrl} title={title} />
    <CardContent style={{ padding: "2rem" }}>
      <PlacesText weight={700} size="1.5rem">
        {title}
      </PlacesText>
      <PlacesText weight={700} size="1.15rem">
        {address}
      </PlacesText>
      <PlacesText>{description}</PlacesText>
    </CardContent>
    <PlacesActions>
      <Button>View On Map</Button>
      <Button>Edit</Button>
      <Button
        variant="contained"
        // className={classes.button}
        startIcon={<Delete />}
      >
        Delete
      </Button>
    </PlacesActions>
  </Card>
);

export default PlacesItem;
