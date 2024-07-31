import { Box, Typography } from "@mui/material";

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
        mt: "50px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          mb: "50px",
          lineHeight: "3.9rem",
          letterSpacing: "-3.5px",
          textAlign: "center",
        }}
      >
        LET SEE WHAT WE DO
      </Typography>

      <Box sx={{ ml: "100px" }}>
        {myPhoto.map((item) => {
          return <img src={item.src} alt={item.alt} style={item.style}></img>;
        })}
      </Box>
    </Box>
  );
}
export default SectionFive;
