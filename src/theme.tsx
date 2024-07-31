import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    subtitle1: {
      fontSize: number;
      fontWeight: number;
    };
    customBg: {
      main: string;
    };
  }

  //   interface PaletteOptions {
  //     customBg: {
  //       main?: string;
  //     };
  //   }
  interface PaletteOptions {
    customBg: {
      main?: string;
      second?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    common: {
      black: "#091524",
      white: "#fff",
    },
    primary: {
      main: "#091524",
    },
    secondary: {
      main: "#FFFFFF",
    },

    customBg: {
      main: "  #287BCA",
    },
    text: {
      primary: "#FFFFFF",
      secondary: " #091524",
      disabled: "#C0C0C0",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 834,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),

    h1: {
      fontSize: 72,
      fontWeight: 800,
    },
    h2: {
      fontSize: 54,
      fontWeight: 700,
    },
    h3: {
      fontSize: 48,
      fontWeight: 800,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontSize: 19,
      fontWeight: 700,
    },

    body1: {
      fontSize: 20,
      fontWeight: 700,
    },
    body2: {
      fontSize: 18,
      fontWeight: 600,
    },

    subtitle1: {
      fontSize: 42,
      fontWeight: 800,
    },
    // subtitle2: {
    //   fontSize: 54,
    //   fontWeight: 700,
    // },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 42,
  },
};

// theme.typography.h2 = {
//   ...theme.typography.h2,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 22,
//   },
// };

// theme.typography.body1 = {
//   ...theme.typography.body1,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 12,
//   },
// };

// theme.typography.body2 = {
//   ...theme.typography.body2,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 10,
//   },
// };

// theme.typography.subtitle1 = {
//   ...theme.typography.subtitle1,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 10,
//   },
// };

// theme.typography.subtitle2 = {
//   ...theme.typography.subtitle2,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 8,
//   },
// };
