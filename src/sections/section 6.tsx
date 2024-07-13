import { Avatar, Box, Paper, ThemeProvider, Typography } from "@mui/material";
import { mainTitle, pragrhStyle } from "../mui componanets/textStyles";

function SectionSix() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "1440px",
        height: "589px",
        top: "3300px",
        // border: "1px solid black",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ top: "80px", left: "510px", width: "420px" }}>
          WHAT THEY SAID
        </Typography>
      </ThemeProvider>

      <Paper
        className="left"
        sx={{
          position: "absolute",
          width: "590px",
          height: "327px",
          top: "182px",
          left: "120px",
          borderRadius: "6px 0px 0px 0px",
          border: "1px solid #52BF7633",
        }}
      ></Paper>

      <Typography
        sx={{
          position: "absolute",
          width: "29px",
          height: "58px",
          top: "212px",
          left: "160px",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "87.16px",
          textAlign: "center",
          color: "var(--secondry-color)",
        }}
      >
        “
      </Typography>
      <Avatar
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          top: "419px",
          left: "160px",
        }}
        alt="ahmed "
        src="./images/avatar 1.png"
      />
      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "490px",
            height: "99px",
            top: "280px",
            left: "160px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </Typography>
        <Typography
          sx={{
            width: "147px",
            height: "33px",
            top: "409px",
            left: "210px",
            color: "var( --main-Title)",
            fontSize: "16px",
          }}
        >
          Ahmad Metronom
        </Typography>
        <Typography
          sx={{
            width: "167px",
            height: "33px",
            top: "436px",
            left: "210px",
          }}
        >
          Professional player
        </Typography>
      </ThemeProvider>

      <Paper
        className="right"
        sx={{
          position: "absolute",
          width: "590px",
          height: "327px",
          top: "182px",
          left: "730px",
          borderRadius: "6px 0px 0px 0px",
          border: "1px solid #52BF7633",
        }}
      ></Paper>

      <Typography
        sx={{
          position: "absolute",
          width: "29px",
          height: "58px",
          top: "212px",
          left: "770px",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "87.16px",
          textAlign: "center",
          color: "var(--secondry-color)",
        }}
      >
        “
      </Typography>
      <Avatar
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          top: "419px",
          left: "770px",
        }}
        alt="ahmed "
        src="./images/avatar 1.png"
      />
      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "490px",
            height: "99px",
            top: "280px",
            left: "770px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </Typography>
        <Typography
          sx={{
            width: "147px",
            height: "33px",
            top: "409px",
            left: "820px",
            color: "var( --main-Title)",
            fontSize: "16px",
          }}
        >
          Masud Coip
        </Typography>
        <Typography
          sx={{
            width: "167px",
            height: "33px",
            top: "436px",
            left: "820px",
          }}
        >
          Professional player
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
export default SectionSix;
