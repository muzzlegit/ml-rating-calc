import styled from "@emotion/styled";

export const InputField = styled.input(({ theme, styles }) => ({
  padding: "2px 4px",
  width: "20px",
  outline: "none",
  borderColor: "transparent",
  borderRadius: "4px",
  fontSize: "12px",
  textAlign: "center",
  "&:placeholder": {
    color: theme.colors?.text[50],
  },
  ...styles,
}));
