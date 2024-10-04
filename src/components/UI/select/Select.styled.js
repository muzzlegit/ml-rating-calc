import styled from "@emotion/styled";

export const Container = styled.div({
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const Wrap = styled.div(({ width }) => ({
  position: "relative",
  width,
}));

export const Label = styled.div(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors?.text[100],
}));

export const Button = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 700,
  color: theme.colors?.secondary[100],
  backgroundColor: theme.colors?.text[100],
}));

export const List = styled.div(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  left: "50%",
  translate: "-50% 102%",
  width: "100%",
  textAlign: "center",
  borderRadius: "4px",
  backgroundColor: theme.colors?.text[100],
}));

export const Item = styled.div(({ theme }) => ({
  width: "100%",
  padding: "4px 4px",
  fontSize: "14px",
  cursor: "pointer",
  color: theme.colors?.secondary[100],
  "&:hover": {
    fontWeight: 700,
    backgroundColor: theme.colors?.primary[30],
  },
}));
