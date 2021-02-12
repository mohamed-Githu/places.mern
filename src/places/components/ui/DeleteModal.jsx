import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import CustomButton from "../../../shared/components/CustomButton";
import CustomModal from "../../../shared/components/CustomModal";
import { Flex } from "../../../shared/layout";

const DeleteModal = ({ open, onClose }) => (
  <CustomModal open={open} onClose={() => onClose("delete")}>
    <Card style={{ padding: "1rem" }}>
      <Typography variant="h4" align="center">
        Are You Sure?
      </Typography>
      <CardContent>
        <Typography variant="body1">
          Do you want to proceed and delete this place? Please note that it
          can't be undone therafter.
        </Typography>
      </CardContent>
      <CardActions>
        <Flex justify="flex-end">
          <CustomButton outline={true} onClick={() => onClose("delete")}>
            Cancel
          </CustomButton>
          <CustomButton style={{ marginLeft: "1rem" }}>Delete</CustomButton>
        </Flex>
      </CardActions>
    </Card>
  </CustomModal>
);
export default DeleteModal;
