import { Box, ThemeProvider, Typography } from "@mui/material";
import { mainTitle } from "../mui componanets/textStyles";
import { Height } from "@mui/icons-material";

function SectionFive() {
  const myPhoto = [
    {
      alt: "five-one",
      src: "./images/five one.png",
      style: {
        width: "387px",
        margin: "10px",
      },
    },
    {
      alt: "five-two",
      src: "./images/five two.png",
      style: {
        width: "386px",
        margin: "10px 10px -70px 10px",
      },
    },
    {
      alt: "five-three",
      src: "./images/five three.png",
      style: {
        width: "387px",
        margin: "10px",
        Height: "276px",
      },
    },
    {
      alt: "five-four",
      src: "./images/five four.png",
      style: {
        width: "387px",
        margin: "10px",
      },
    },
    {
      alt: "five-five",
      src: "./images/five five.png",
      style: {
        width: "386px",
        margin: "10px",
      },
    },
    {
      alt: "five-six",
      src: "./images/five six.png",
      style: {
        width: "387px",
        margin: "10px",
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ width: "524px", alignSelf: "center", mb: "50px" }}>
          LET SEE WHAT WE DO
        </Typography>
      </ThemeProvider>
      <Box sx={{ width: "125vh" }}>
        {myPhoto.map((item) => {
          return <img src={item.src} alt={item.alt} style={item.style}></img>;
        })}
      </Box>
    </Box>
  );
}
export default SectionFive;
