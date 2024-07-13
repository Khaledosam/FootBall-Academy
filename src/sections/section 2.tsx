import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import { mainTitle, subTitle } from "../mui componanets/textStyles";

function SectionTwo() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "677px",
        top: "800px",
        backgroundColor: "var(--main-color)",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography>KAISON MISSION</Typography>
      </ThemeProvider>

      <Box
        sx={{
          position: "absolute",
          width: "590px",
          height: "160px",
          top: "238px",
          left: "730px",
          borderRadius: "4px 0px 0px 0px",
          backgroundColor: "var(--secondry-color)",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "40px",
            letterSpacing: "0.5px",
            textAlign: "left",
            padding: "20px 52px",
            color: "var(--main-color)",
          }}
        >
          Identify, develop and polish young US and International soccer talent
          with the goal of playing International
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "590px",
          height: "144px",
          top: "438px",
          left: "730px",
          borderRadius: "4px 0px 0px 0px",
          border: "1px 0px 0px 0px",
          borderColor: "#C0C0C0",
          borderStyle: "solid",
        }}
      >
        <ThemeProvider theme={subTitle}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              lineHeight: "32px",
              padding: "40px 45.5px",
              letterSpacing: "0.5px",
            }}
          >
            Provide the opportunity and gateway for players to play
            professionally in Europe.
          </Typography>
        </ThemeProvider>
      </Box>

      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "488px",
          height: "477px",
          top: "120px",
          left: "120px",
        }}
        alt="two"
        src=".\images\section 2.png"
      />
    </Box>
  );
}

export default SectionTwo;
