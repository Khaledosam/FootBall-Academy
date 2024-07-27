import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import { mainTitle, subTitle } from "../mui componanets/textStyles";


function SectionTwo() {
  return (
    <Box display={"flex"} sx={{ flexDirection: "row-reverse", mt: "100px" }}>
      <Box sx={{ flex: 1 }}>
        <ThemeProvider theme={mainTitle}>
          <Typography sx={{ mb: "30px" }}>KAISON MISSION</Typography>
        </ThemeProvider>
        <Box
          sx={{
            width: "590px",

            borderRadius: "4px 0px 0px 0px",
            backgroundColor: "var(--secondry-color)",
          }}
        >
          <Typography
            sx={{
              mb: "40px",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0.5px",
              textAlign: "left",
              padding: "20px 52px",
              color: "var(--main-color)",
            }}
          >
            Identify, develop and polish young US and International soccer
            talent with the goal of playing International
          </Typography>
        </Box>
        <Box
          sx={{
            width: "590px",

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
      </Box>
      <Box
        component="img"
        sx={{
          width: "488px",
          height: "477px",
          mr: "100px",
        }}
        alt="two"
        src=".\images\section 2.png"
      />
    </Box>
  );
}

export default SectionTwo;
