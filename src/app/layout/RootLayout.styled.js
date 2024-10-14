import styled from "@emotion/styled";

export const RootContainer = styled.div(({ theme }) => ({
  padding: "16px",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  gap: "10px",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));

export const FlexCol = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});
