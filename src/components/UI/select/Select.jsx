import PropTypes from "prop-types";
import { Container, SelectBox } from "./Select.styled";

const Select = ({ id, label, defaultValue, options, handleChange }) => {
  console.log(options);
  return (
    <Container>
      {label ? <label>{label}</label> : null}
      <SelectBox id={id} onChange={handleChange} defaultValue={defaultValue}>
        {options.map(({ label, value }) => {
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        })}
      </SelectBox>
    </Container>
  );
};

export default Select;

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};
