import Box from "@mui/material/Box";
import "./sections.css";
import AppBarr from "../mui componanets/appBar";
import { Button, ThemeProvider, Typography } from "@mui/material";
import StartButton from "../mui componanets/buttonStart";
import { pragrhStyle } from "../mui componanets/textStyles";

function SectionONe() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        className="blackContent"
        sx={{
          width: "1440px",
          height: "800px",
          backgroundColor: "var(--main-Title)",
          borderRadius: "20px 20px 0 0",
          position: "absolute",
        }}
      ></Box>
      <Box
        className="blueContent"
        sx={{
          width: "703px",
          height: "800px",

          left: "737px",
          backgroundColor: "var(--secondry-color)",
          position: "absolute",
          borderRadius: "20px 20px 0 0",
        }}
      ></Box>
      <AppBarr />

      <Typography
        sx={{
          width: "697px",
          height: "282px",
          top: "187px",
          left: "120px",
          position: "absolute",
          fontWeight: 800,
          fontSize: "72px",
          lineHeight: "93.6px",
          letterSpacing: "0.5px",
          color: "var(--main-color)",
        }}
      >
        EXCELLENCE IN FOOTBALL & EDUCATION
      </Typography>

      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "576px",
            height: "66px",
            top: "489px",
            left: "120px",
          }}
        >
          Create the best soccer development environment for ambitious players
          that want to train and play the game at the highest level.
        </Typography>
      </ThemeProvider>
      <Box
        component="img"
        sx={{
          height: "613px",
          width: "538px",
          top: "187px",
          left: "802px",
          position: "absolute",
        }}
        alt="the scrore shoes"
        src="./images/s one.png"
      />
      <StartButton />

      <Button
        variant="text"
        sx={{
          height: "25px",
          top: "620px",
          left: "374px",
          position: "absolute",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "24.51px",
          letterSpacing: "0.5px",
          textAlign: "left",
          color: "var(--main-color)",
        }}
      >
        Our programs
      </Button>
    </Box>
  );
}

export default SectionONe;
