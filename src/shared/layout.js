import { styled } from "@material-ui/core";

export const Flex = styled("div")({
  display: "flex",
  flexDirection: (props) => (props.direction ? props.direction : "row"),
  justifyContent: (props) => (props.justify ? props.justify : "flex-start"),
  alignItems: (props) => (props.align ? props.align : "flex-start"),
});