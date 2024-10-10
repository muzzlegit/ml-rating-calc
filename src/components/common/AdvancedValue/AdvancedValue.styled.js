import styled from "@emotion/styled";
import { theme } from "app/styles/theme/theme";

export const Container = styled.div(({ theme, styles }) => ({
  position: "absolute",
  zIndex: 20,
  padding: "4px",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  border: `1px solid ${theme.colors?.secondary[100]}`,
  borderRadius: "4px",
  backgroundColor: theme.colors?.text[100],
  ...styles,
}));

export const Item = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "12px",
  fontWeight: 700,
  color: theme.colors?.secondary[100],
}));

export const InputStyles = {
  width: "40px",
  fontSize: "12px",
  padding: "0 4px",
  color: theme.colors?.secondary[100],
  backgroundColor: theme.colors?.secondary[20],
};

export const ListButton = styled.div(({ theme, isActive }) => ({
  position: "relative",
  height: "20px",
  cursor: "pointer",
  stroke: isActive ? theme.colors?.orange[100] : theme.colors?.text[100],
}));

export const AddButton = styled.div(({ theme }) => ({
  color: theme.colors?.green[60],
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    color: theme.colors?.green[100],
  },
}));
