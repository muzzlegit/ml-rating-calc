import styled from "@emotion/styled";

export const RootContainer = styled.div(({ theme }) => ({
  padding: "16px",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));
