import { Box, ThemeProvider, Typography } from "@mui/material";
import { mainTitle, subTitle } from "../mui componanets/textStyles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function SectionSeven() {
  const myPhoto = [
    {
      alt: "seven-one",
      src: "./images/seven one.png",
      style: {
        width: "387px",
        height: "234px",
        top: "170px",
        left: "120px",
        borderRadius: "8px ",
        position: "absolute",
      },
      styleP: {
        width: "311px",
        height: "64px",
        top: "424px",
        left: "152px",

        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px",
        textAlign: "center",
      },
      content: "SUMMER CAMPS IN KAISON ACADEMY",
      icon: (
        <PlayCircleOutlineIcon
          sx={{
            width: "48px",
            height: "48px",
            top: "263px",
            left: "289px",
            position: "absolute",
            color: "var(--main-color)",
          }}
        />
      ),
    },
    {
      alt: "seven-two",
      src: "./images/seven two.png",
      style: {
        width: "387px",
        height: "234px",
        top: "170px",
        left: "527px",
        borderRadius: "8px ",
        position: "absolute",
      },
      styleP: {
        width: "311px",
        height: "64px",
        top: "424px",
        left: "573px",

        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px",
        textAlign: "center",
      },
      content: "START YOUR FOOTBALL JOURNEY WITH US",
      icon: (
        <PlayCircleOutlineIcon
          sx={{
            width: "48px",
            height: "48px",
            top: "263px",
            left: "696px",
            position: "absolute",
            color: "var(--main-color)",
          }}
        />
      ),
    },
    {
      alt: "seven-three",
      src: "./images/seven three.png",
      style: {
        width: "387px",
        height: "234px",
        top: "170px",
        left: "934px",
        borderRadius: "8px ",
        position: "absolute",
      },
      styleP: {
        width: "192px",
        height: "64px",
        top: "424px",
        left: "1032px",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px",
        textAlign: "center",
      },
      content: "HOW TO BE GOOD PLAYER",
      icon: (
        <PlayCircleOutlineIcon
          sx={{
            width: "48px",
            height: "48px",
            top: "263px",
            left: "1103px",
            position: "absolute",
            color: "var(--main-color)",
          }}
        />
      ),
    },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "591px",
        top: " 3929px",
        // border: "1px solid black",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ top: "65px", left: "462px", width: "521px" }}>
          STILL HAVE DOUBTS?
        </Typography>
      </ThemeProvider>
      <Box>
        {myPhoto.map((item) => {
          return (
            <Box>
              <img src={item.src} alt={item.alt} style={item.style}></img>
              <ThemeProvider theme={subTitle}>
                <Typography sx={item.styleP}>{item.content}</Typography>
              </ThemeProvider>
              {item.icon}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default SectionSeven;
