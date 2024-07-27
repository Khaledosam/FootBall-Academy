import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { mainTitle, subTitle } from "../mui componanets/textStyles";
function SectionFour() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "100px",

        backgroundColor: "var(--main-color)",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ width: "716px", alignSelf: "center" }}>
          BEST IN FOOTBALL ACADEMY
        </Typography>
      </ThemeProvider>
      <Box sx={{ display: "flex", mb: "100px", mt: "70px", width: "140vh" }}>
        <Box sx={{ display: "flex" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",
              color: "var(--secondry-color)",
            }}
          />

          <ThemeProvider theme={subTitle}>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                width: "195px",
              }}
            >
              Personal academic tutors
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",

              color: "var(--secondry-color)",
            }}
          />
          <ThemeProvider theme={subTitle}>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                width: "195px",
              }}
            >
              Competitive matches
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CheckCircle
            sx={{
              width: "50px",
              height: "50px",

              color: "var(--secondry-color)",
            }}
          />

          <ThemeProvider theme={subTitle}>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                width: "195px",
              }}
            >
              Professional games
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionFour;
