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

            color: "var(--main-color)",
          }}
        />
      ),
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
        <Typography sx={{ width: "521px", alignSelf: "center", mt: "100px" }}>
          STILL HAVE DOUBTS?
        </Typography>
      </ThemeProvider>
      <Box display={"flex"} gap={"20px"} mt={"50px"}>
        {myPhoto.map((item) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
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
