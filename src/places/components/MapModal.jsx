import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@material-ui/core";

import { Flex, ModalBody } from "../../shared/layout";

const MapModal = ({ address, ...modalProps }) => (
  <Modal {...modalProps} style={{ zIndex: 1303 }}>
    <ModalBody>
      <Card style={{ borderRadius: 0 }} elevation={0}>
        <CardContent>
          <Typography variant="h4" align="center">
            {address}
          </Typography>
        </CardContent>
        <CardMedia />
        <CardActions>
          <Flex justify="flex-end">
            <Button variant="outlined" onClick={modalProps.onClose}>
              Close
            </Button>
          </Flex>
        </CardActions>
      </Card>
    </ModalBody>
  </Modal>
);

export default MapModal;
