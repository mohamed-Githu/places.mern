import { FormContainer, FormTitle } from "../styles";
import { Flex } from "../../../layout";

const Form = ({ children, title }) => {
  return (
    <FormContainer elevation={4}>
      <Flex align="center" direction="column">
        <FormTitle>{title}</FormTitle>
        {children}
      </Flex>
    </FormContainer>
  );
};

export default Form;
