import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "10px",
  border: `1px solid ${theme.colors?.text[20]}`,
  borderRadius: "8px",
}));

export const ScrollBox = styled.div({
  width: "fit-content",
  height: "702px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "space-between",
  justifyContent: "center",
  gap: "10px",
  overflowY: "scroll",
});
