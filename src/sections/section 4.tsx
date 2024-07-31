import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function SectionFour() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "100px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          lineHeight: "3.9rem",
          letterSpacing: "-3.5px",
          textAlign: "center",
        }}
      >
        BEST IN FOOTBALL ACADEMY
      </Typography>

      <Box
        sx={{
          display: "flex",
          mb: "100px",
          mt: "70px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",
              color: "customBg.main",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              lineHeight: "30px",
              color: "text.secondary",
              textAlign: "left",
              mr: "100px",
            }}
          >
            Personal academic tutors
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",
              color: "customBg.main",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              lineHeight: "30px",
              color: "text.secondary",
              textAlign: "left",
              mr: "100px",
            }}
          >
            Competitive matches
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",
              color: "customBg.main",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              lineHeight: "30px",
              color: "text.secondary",
              textAlign: "left",
              mr: "100px",
            }}
          >
            Professional games
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionFour;
