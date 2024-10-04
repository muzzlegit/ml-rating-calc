import PropTypes from "prop-types";
import { InputField } from "./Input.styled";

const TextInput = ({ placeholder = "", value, handleChange, styles }) => {
  return (
    <InputField
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        handleChange(e.currentTarget.value);
      }}
      styles={styles}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
};
