import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function SectionFive() {
  const myPhoto = [
    {
      alt: "five-one",
      src: "./images/five one.png",

      width: { xs: "80%", md: "30%", xl: "387px" },
      Margin: { xs: "0px", md: "0px" },
    },
    {
      alt: "five-two",
      src: "./images/five two.png",

      width: { xs: "80%", md: "30%", xl: "386px" },
      Margin: { xs: "0px", md: "0px" },
    },
    {
      alt: "five-three",
      src: "./images/five three.png",

      width: { xs: "80%", md: "30%", xl: "387px" },
      Margin: { xs: "0px", md: "0px" },
    },
    {
      alt: "five-four",
      src: "./images/five four.png",

      width: { xs: "80%", md: "30%", xl: "387px" },
      Margin: { xs: "0px", md: "-53px" },
    },
    {
      alt: "five-five",
      src: "./images/five five.png",

      width: { xs: "80%", md: "30%", xl: "386px" },
      Margin: { xs: "0px", md: "0px" },
    },
    {
      alt: "five-six",
      src: "./images/five six.png",
      width: { xs: "80%", md: "30%", xl: "387px" },
      Margin: { xs: "0px", md: "-53px" },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          lineHeight: "3.9rem",
          textAlign: "center",
          padding: "50px 50px 10px 50px",
        }}
      >
        LET SEE WHAT WE DO
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {myPhoto.map((item) => {
          return (
            <Box
              component="img"
              width={item.width}
              marginTop={item.Margin}
              alt={item.alt}
              src={item.src}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default SectionFive;
