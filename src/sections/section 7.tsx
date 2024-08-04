import { Box, Typography } from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function SectionSeven() {
  const myPhoto = [
    {
      alt: "seven-one",
      src: "./images/seven one.png",
      content: "SUMMER CAMPS IN KAISON ACADEMY",
    },
    {
      alt: "seven-two",
      src: "./images/seven two.png",
      content: "START YOUR FOOTBALL JOURNEY WITH US",
    },
    {
      alt: "seven-three",
      src: "./images/seven three.png",
      content: "HOW TO BE GOOD PLAYER",
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
          padding: "50px",
          textAlign: "center",
        }}
      >
        STILL HAVE DOUBTS?
      </Typography>

      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        {myPhoto.map((item) => {
          return (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "327px",
                  borderRadius: "8px",
                }}
              ></img>

              <Typography
                variant="h5"
                sx={{
                  lineHeight: "32px",
                  textAlign: "center",
                  color: "text.secondary",
                  padding: "10px 50px 10px 50px",
                }}
              >
                {item.content}
              </Typography>
              <PlayCircleOutlineIcon
                sx={{
                  width: "48px",
                  height: "48px",
                  color: "secondary.main",
                  transform: "translate(-9px, -209px)",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default SectionSeven;
