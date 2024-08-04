import { Box, Typography } from "@mui/material";

function SectionFive() {
  const myPhoto = [
    {
      alt: "five-one",
      src: "./images/five one.png",
      style: {
        width: { xs: "80%", md: "387px" },
      },
    },
    {
      alt: "five-two",
      src: "./images/five two.png",
      style: {
        width: { xs: "80%", md: "386px" },
      },
    },
    {
      alt: "five-three",
      src: "./images/five three.png",
      style: {
        width: { xs: "80%", md: "387px" },
      },
    },
    {
      alt: "five-four",
      src: "./images/five four.png",
      style: {
        width: { xs: "80%", md: "387px" },
      },
    },
    {
      alt: "five-five",
      src: "./images/five five.png",
      style: {
        width: { xs: "80%", md: "386px" },
      },
    },
    {
      alt: "five-six",
      src: "./images/five six.png",
      style: {
        width: { xs: "80%", md: "387px" },
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
          flexDirection: "column",
          padding: "20px",
          gap: "20px",
        }}
      >
        {myPhoto.map((item) => {
          return <img src={item.src} alt={item.alt} style={item.style}></img>;
        })}
      </Box>
    </Box>
  );
}
export default SectionFive;
