import styled from "@emotion/styled";

export const Container = styled.button(({ styles }) => ({
  padding: "4px 4px",
  outline: "none",
  borderColor: "transparent",
  borderRadius: "4px",
  fontSize: "12px",
  textAlign: "center",
  cursor: "pointer",
  ...styles,
}));
