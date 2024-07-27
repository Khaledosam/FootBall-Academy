import { createTheme } from "@mui/material";

export const mainTitle = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          width: "466px",

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
