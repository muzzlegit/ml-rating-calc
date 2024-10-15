import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px 4px",
  width: "130px",
  border: `1px solid ${theme.colors?.text[20]}`,
  borderRadius: "8px",
}));

export const Head = styled.div({
  height: "140px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const LevelWrap = styled.div(({ theme, isActive }) => ({
  width: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 700,
  filter: "drop-shadow(16px 16px 20px red)",
  color: isActive ? theme.colors?.orange[100] : theme.colors?.text[100],
}));

export const FlexWrap = styled.div({
  display: "flex",
  gap: "4px",
});

export const FlexCenterWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "4px",
});

export const Name = styled.div(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 700,
  whiteSpace: "pre-wrap",
  textAlign: "center",
  color: theme.colors?.orange[80],
}));
