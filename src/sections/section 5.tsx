import { Box, ThemeProvider, Typography } from "@mui/material";
import { mainTitle } from "../mui componanets/textStyles";

function SectionFive() {
  const myPhoto = [
    {
      alt: "five-one",
      src: "./images/five one.png",
      style: {
        width: "387px",
        height: "276px",
        top: "182px",
        left: "120px",
        position: "absolute",
      },
    },
    {
      alt: "five-two",
      src: "./images/five two.png",
      style: {
        width: "386px",
        height: "349px",
        top: "183px",
        left: "527px",
        position: "absolute",
      },
    },
    {
      alt: "five-three",
      src: "./images/five three.png",
      style: {
        width: "387px",
        height: "276px",
        top: "182px",
        left: "933px",
        position: "absolute",
      },
    },
    {
      alt: "five-four",
      src: "./images/five four.png",
      style: {
        width: "387px",
        height: "350px",
        top: "478px",
        left: "120px",
        position: "absolute",
      },
    },
    {
      alt: "five-five",
      src: "./images/five five.png",
      style: {
        width: "386px",
        height: "275px",
        top: "552px",
        left: "527px",
        position: "absolute",
      },
    },
    {
      alt: "five-six",
      src: "./images/five six.png",
      style: {
        width: "387px",
        height: "350px",
        top: "478px",
        left: "933px",
        position: "absolute",
      },
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "902px",
        top: "2438px",
        // border: "1px solid black",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ top: "80px", left: "458px", width: "524px" }}>
          LET SEE WHAT WE DO
        </Typography>
      </ThemeProvider>
      <Box>
        {myPhoto.map((item) => {
          return <img src={item.src} alt={item.alt} style={item.style}></img>;
        })}
      </Box>
    </Box>
  );
}
export default SectionFive;
