import { createTheme } from "@mui/material";

export const mainTitle = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          position: "absolute",
          width: "466px",
          height: "62px",
          top: "136px",
          left: "730px",
          display: "flex",
          fontSize: "3rem",
          fontWeight: 800,
          lineHeight: "3.9rem",
          letterSpacing: "-3.5px",
          textAlign: "center",
          color: "var(--main-Title)",
        },
      },
    },
  },
});
export const subTitle = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          position: "absolute",
          fontFamily: "Open Sans",
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "41.6px",
          textAlign: "left",
          color: "var(--main-Title)",
        },
      },
    },
  },
});
export const pragrhStyle = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          position: "absolute",
          width: "242px",
          height: "132px",
          top: "354px",
          left: "1049px",
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "33px",
          textAlign: "left",
          color: "var(--pragrh-color)",
        },
      },
    },
  },
});
