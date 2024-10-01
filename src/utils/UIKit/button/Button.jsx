import PropTypes from "prop-types";
import { Container } from "./Button.styled";

const Button = ({
  type = "button",
  children,
  handleClick,
  styles,
  ...rest
}) => {
  return (
    <Container type={type} onClick={handleClick} styles={styles} {...rest}>
      {children}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  styles: PropTypes.object,
};
