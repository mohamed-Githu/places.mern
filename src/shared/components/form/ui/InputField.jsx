import { TextField } from "@material-ui/core";

const InputField = ({ id, field, action, rows }) => (
  <TextField
    id={id}
    label={id}
    variant="filled"
    color="secondary"
    error={field.isValid}
    value={field.value}
    onChange={action}
    onBlur={action}
    helperText={field.isValid && field.helperText}
    fullWidth
    multiline={Boolean(rows)}
    rows={rows}
  />
);

export default InputField;
