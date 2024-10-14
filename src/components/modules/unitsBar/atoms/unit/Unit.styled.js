import styled from "@emotion/styled";
import { theme } from "app/styles/theme/theme";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const inputStyles = {
  width: "54px",
  color: theme.colors?.secondary[100],
  backgroundColor: theme.colors?.text[100],
};
