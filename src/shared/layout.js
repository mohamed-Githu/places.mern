import { IconButton, Modal, styled } from "@material-ui/core";

export const Flex = styled("div")({
  display: "flex",
  flexDirection: (props) => props.direction || "row",
  justifyContent: (props) => props.justify || "flex-start",
  alignItems: (props) => props.align || "flex-start",
  width: (props) => props.width || "100%",
});

export const ModalBody = styled("div")(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.common.yellow,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  width: "40rem",
  maxWidth: "100%",
  [theme.breakpoints.down("xs")]: {
    height: "100%"
  }
}));

export const IconWrapper = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 4,
  },
}));
