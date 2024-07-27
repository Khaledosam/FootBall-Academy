import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import {
  mainTitle,
  pragrhStyle,
  subTitle,
} from "../mui componanets/textStyles";

function SectionThree() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "100px",
        alignContent: "center",
        backgroundColor: "var(--main-color)",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ width: "561px", alignSelf: "center" }}>
          TRAINING PROGRAMS
        </Typography>
      </ThemeProvider>
      <Box display={"flex"} sx={{ mt: "100px" }}>
        <Box flex={1} display={"flex"}>
          <Box
            component="img"
            sx={{
              width: "285px",
              mr: "30px",
            }}
            alt="three-right"
            src="./images/three-left.png"
          />
          <Box display={"flex"} sx={{ flexDirection: "column", mr: "50px" }}>
            <ThemeProvider theme={subTitle}>
              <Typography
                sx={{
                  width: "229px",
                  height: "84px",
                  top: "180px",
                  left: "439px",
                }}
              >
                Immersion Program
              </Typography>
            </ThemeProvider>

            <Typography
              sx={{
                width: "190px",
                height: "60px",
                top: "284px",
                left: "439px",
                fontFamily: "Open Sans",
                fontSize: "19px",
                fontWeight: 700,
                lineHeight: "30.4px",
                letterSpacing: "0.5px",
                textAlign: "left",
                color: "var(--secondry-color)",
              }}
            >
              Recommended Ages 14 - 18
            </Typography>

            <ThemeProvider theme={pragrhStyle}>
              <Typography
                sx={{
                  width: "271px",
                  height: "132px",
                  top: "354px",
                  left: "439px",
                }}
              >
                At the Academy, players live under the supervision of our
                academy staff in the VIA apartment located in a safe
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>
        <Box display={"flex"} flex={1}>
          <Box
            component="img"
            sx={{
              width: "285px",
              mr: "30px",
            }}
            alt="three-left"
            src="./images/three-right.png"
          />
          <Box display={"flex"} flexDirection={"column"}>
            <ThemeProvider theme={subTitle}>
              <Typography
                sx={{
                  width: "229px",
                  height: "84px",
                  top: "180px",
                  left: "1049px",
                }}
              >
                Professional Program
              </Typography>
            </ThemeProvider>

            <Typography
              sx={{
                width: "190px",
                height: "60px",
                top: "284px",
                left: "1049px",
                fontFamily: "Open Sans",
                fontSize: "19px",
                fontWeight: 700,
                lineHeight: "30.4px",
                letterSpacing: "0.5px",
                textAlign: "left",

                color: "var(--secondry-color)",
              }}
            >
              Recommended Ages 17-23
            </Typography>

            <ThemeProvider theme={pragrhStyle}>
              <Typography
                sx={{
                  width: "242px",
                  height: "132px",
                  top: "354px",
                  left: "1049px",
                }}
              >
                Professional Program is designed to ambitions of playing the
                game at the highest level to a multitude
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionThree;
