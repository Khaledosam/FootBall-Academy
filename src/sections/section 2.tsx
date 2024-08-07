import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function SectionTwo() {
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row-reverse" },
        mt: "50px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            mt: "30px",
            mb: "30px",
            ml: { md: "30px" },
            textAlign: { xs: "center", md: "left" },
            color: "text.secondary",
          }}
        >
          KAISON MISSION
        </Typography>

        <Typography
          variant="body1"
          sx={{
            margin: "30px ",
            bgcolor: "customBg.main",
            lineHeight: "40px",
            letterSpacing: "0.5px",
            textAlign: "left",
            padding: "10px 50px 10px 30px",
            borderRadius: "4px 0px 0px 0px",
          }}
        >
          Identify, develop and polish young US and International soccer talent
          with the goal of playing International
        </Typography>

        <Typography
          variant="body1"
          sx={{
            borderRadius: "4px 0px 0px 0px",
            border: "1px 0px 0px 0px",
            borderStyle: "solid",
            borderColor: "text.disabled",
            color: "text.secondary",
            textAlign: "left",
            lineHeight: "32px",
            padding: "10px 80px 10px 30px",
            letterSpacing: "0.5px",
            margin: "30px ",
          }}
        >
          Provide the opportunity and gateway for players to play professionally
          in Europe.
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          width: { xs: "80%", md: "488px" },
          margin: "0 auto",
          padding: { md: " 30px " },
        }}
        alt="two"
        src=".\images\section 2.png"
      />
    </Box>
  );
}

export default SectionTwo;
