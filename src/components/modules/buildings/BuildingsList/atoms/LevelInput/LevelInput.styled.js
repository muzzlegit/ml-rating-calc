import styled from "@emotion/styled";

export const LevelWrap = styled.div(({ theme, isActive }) => ({
  width: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 700,
  color: isActive ? theme.colors?.orange[100] : theme.colors?.text[100],
}));

export const FlexWrap = styled.div({
  display: "flex",
  gap: "4px",
});
