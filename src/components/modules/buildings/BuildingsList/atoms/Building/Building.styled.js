import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
});

export const LevelWrap = styled.div({
  width: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FlexWrap = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const Name = styled.div(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 700,
  color: theme.colors?.orange[80],
}));
