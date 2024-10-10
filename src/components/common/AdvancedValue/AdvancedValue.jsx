import { TextInput } from "components/UI";
import PropTypes from "prop-types";
import { useRef } from "react";
import useModalWindow from "shared/hooks/useModalWindow";
import {
  AddButton,
  Container,
  InputStyles,
  Item,
  ListButton,
} from "./AdvancedValue.styled";

const AdvancedValue = ({ values, handleValue, styles }) => {
  const windowRef = useRef(null);
  const { isOpen, toggleWindow } = useModalWindow(windowRef);

  const handleAddValue = () => {
    const valuesLength = Object.keys(values).length;
    if (valuesLength >= 9) return;
    const key = `#${valuesLength + 1}`;
    handleValue(0, key);
  };

  return (
    <div ref={windowRef}>
      <ListButton onClick={toggleWindow} isActive={isOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.104 5.552H21M8.104 12H21M8.104 18.448H21m-18-8.06L4.612 12L3 13.612M3 3.94l1.612 1.612L3 7.164m0 9.672l1.612 1.612L3 20.06"
          />
        </svg>
      </ListButton>
      {isOpen ? (
        <Container styles={styles}>
          {Object.entries(values).map(([key, value]) => {
            return (
              <Item key={key}>
                <div>{key}</div>
                <TextInput
                  id={key}
                  value={value}
                  handleChange={handleValue}
                  styles={InputStyles}
                />
              </Item>
            );
          })}
          <AddButton onClick={handleAddValue}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v8m4-4H8m-5.5 0c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
                color="currentColor"
              />
            </svg>
          </AddButton>
        </Container>
      ) : null}
    </div>
  );
};

export default AdvancedValue;

AdvancedValue.propTypes = {
  styles: PropTypes.object,
  values: PropTypes.object.isRequired,
  handleValue: PropTypes.func.isRequired,
};
