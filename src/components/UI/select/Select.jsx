import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Item, Label, List, Wrap } from "./Select.styled";

const Select = ({
  label,
  title,
  value,
  options,
  onChange,
  placeholder = "Виберіть варіант",
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Container ref={selectRef} width={width}>
      {label ? <Label>{label}: </Label> : null}
      <Wrap width={width}>
        <Button
          type="button"
          title={title}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </Button>
        {isOpen && (
          <List>
            {options.map((option) => (
              <Item
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </Item>
            ))}
          </List>
        )}
      </Wrap>
    </Container>
  );
};

export default Select;

Select.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};
