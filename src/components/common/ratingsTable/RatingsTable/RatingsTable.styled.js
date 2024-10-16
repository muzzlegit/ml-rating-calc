import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});

export const FlexWrap = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: "8px",
});

export const FlexCol = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const CommonRating = styled.div(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 700,
  color: theme.colors?.red[80],
}));

export const Rating = styled.div(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 700,
  color: theme.colors?.orange[80],
}));

export const Label = styled.div(({ theme }) => ({
  fontSize: "12px",
}));
export const Rank = styled.div(({ theme }) => ({
  fontWeight: 600,
  color: theme.colors?.textAcent[100],
}));
