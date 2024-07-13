import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { mainTitle, pragrhStyle } from "../mui componanets/textStyles";
import StartButton from "../mui componanets/buttonStart";

function SectionEight() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "470px",
        top: " 4520px",
        border: "1px solid black",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography
          sx={{ top: "80px", left: "431px", width: "577px", height: "124px" }}
        >
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
            position: "absolute",
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
          top: "330px",
          left: "628px",
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
