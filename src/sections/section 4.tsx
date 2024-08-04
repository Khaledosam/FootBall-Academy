import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function SectionFour() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        padding: "80px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          lineHeight: "3.9rem",
          textAlign: "center",
        }}
      >
        BEST IN FOOTBALL ACADEMY
      </Typography>

      <Box
        sx={{
          display: "flex",

          mt: "50px",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px" },
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
              padding: "10px",
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
              padding: "10px",
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
              padding: "10px",
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
