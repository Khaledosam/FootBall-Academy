import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function SectionTwo() {
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row-reverse" },
        mt: "100px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            mt: "30px",
            mb: "50px",
            letterSpacing: "-3.5px",
            textAlign: "left",
            color: "text.secondary",
          }}
        >
          KAISON MISSION
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: "50px",
            mr: "100px",
            bgcolor: "customBg.main",
            lineHeight: "40px",
            letterSpacing: "0.5px",
            textAlign: "left",
            padding: "30px 88px",
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
            padding: "30px 91px",
            letterSpacing: "0.5px",
            mr: "100px",
          }}
        >
          Provide the opportunity and gateway for players to play professionally
          in Europe.
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          width: "488px",
          mr: "100px",
          ml: "100px",
        }}
        alt="two"
        src=".\images\section 2.png"
      />
    </Box>
  );
}

export default SectionTwo;
