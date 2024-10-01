import PropTypes from "prop-types";
import { InputField } from "./Input.styled";

const TextInput = ({ id, placeholder = "", value, handleChange, styles }) => {
  return (
    <InputField
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      styles={styles}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
};
