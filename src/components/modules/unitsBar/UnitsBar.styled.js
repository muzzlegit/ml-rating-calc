import styled from "@emotion/styled";

export const Container = styled.div({
  marginTop: "12px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  " @media (min-width: 440px)": {
    minWidth: "260px",
  },
});
