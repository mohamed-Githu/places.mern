import { Button, styled } from "@material-ui/core";

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  letterSpacing: "1px",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  textTransform: "none",
  padding: ".2rem 1rem",
  boxShadow: "2px 2px 4px -1px rgb(0 0 0 / 20%), -2px 0px 4px -2px rgb(0 0 0 / 20%)",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CustomButton = ({ children, ...buttonProps }) => (
  <StyledButton {...buttonProps}>{children}</StyledButton>
);

export default CustomButton;
