import styled from "@emotion/styled";

export const RootContainer = styled.div(({ theme }) => ({
  width: "100vw",
  minHeight: "100vh",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));
