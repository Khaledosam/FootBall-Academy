import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { mainTitle, subTitle } from "../mui componanets/textStyles";
function SectionFour() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "378px",
        top: "2060px",
        backgroundColor: "var(--main-color)",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ top: "80px", left: "362px", width: "716px" }}>
          BEST IN FOOTBALL ACADEMY
        </Typography>
      </ThemeProvider>
      <Box>
        <CheckCircle
          sx={{
            position: "absolute",
            width: "50px",
            height: "50px",
            top: "214px",
            left: "165px",
            color: "var(--secondry-color)",
          }}
        />

        <ThemeProvider theme={subTitle}>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "30px",
              width: "195px",
              height: "72px",
              top: "204px",
              left: "237px",
            }}
          >
            Personal academic tutors
          </Typography>
        </ThemeProvider>
      </Box>
      <Box>
        <CheckCircle
          sx={{
            position: "absolute",
            width: "50px",
            height: "50px",
            top: "214px",
            left: "602px",

            color: "var(--secondry-color)",
          }}
        />

        <ThemeProvider theme={subTitle}>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "30px",
              width: "195px",
              height: "72px",
              top: "204px",
              left: "660px",
            }}
          >
            Competitive matches
          </Typography>
        </ThemeProvider>
      </Box>
      <Box>
        <CheckCircle
          sx={{
            position: "absolute",
            width: "50px",
            height: "50px",
            top: "214px",
            left: "998px",

            color: "var(--secondry-color)",
          }}
        />

        <ThemeProvider theme={subTitle}>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "30px",
              width: "195px",
              height: "72px",
              top: "204px",
              left: "1070px",
            }}
          >
            Professional games
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
export default SectionFour;
