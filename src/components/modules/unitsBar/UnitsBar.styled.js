import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  " @media (min-width: 440px)": {
    minWidth: "260px",
  },
});
