import styled from "@emotion/styled";

export const Bar = styled.div(({ theme }) => ({
  padding: "2px",
  height: "16px",
  width: "100%",
  border: `1px solid ${theme.colors?.orange[100]}`,
  borderRadius: "8px",
}));

export const Progress = styled.div(({ theme, width }) => ({
  width: `${width}%`,
  height: "100%",
  backgroundColor: theme.colors?.orange[100],
  border: `1px solid ${theme.colors?.orange[100]}`,
  borderRadius: "8px",
  borderTopRightRadius: width < 99 ? "0px" : "8px",
  borderBottomRightRadius: width < 99 ? "0px" : "8px",
}));
