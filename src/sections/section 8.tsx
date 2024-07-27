import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { mainTitle, pragrhStyle } from "../mui componanets/textStyles";

function SectionEight() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        mt: "100px",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ width: "577px" }}>
          START YOUR JOURNEY WITH US
        </Typography>
      </ThemeProvider>
      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "680px",
            height: "66px",
            top: "224px",
            left: "380px",

            textAlign: "center",
          }}
        >
          if you need to talk to a Kaison Academy representative, please feel
          free to call us or shoot us an email via the contact form below.
        </Typography>
      </ThemeProvider>
      <Button
        variant="contained"
        sx={{
          width: "183px",
          height: "60px",
          borderRadius: "4px ",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24.51px",
          letterSpacing: "0.5px",
          textAlign: "left",
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
export default SectionEight;
