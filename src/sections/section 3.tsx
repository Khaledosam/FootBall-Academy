import Box from "@mui/material/Box";
import { ThemeProvider, Typography } from "@mui/material";
import {
  mainTitle,
  pragrhStyle,
  subTitle,
} from "../mui componanets/textStyles";

function SectionThree() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "1440px",
        height: "583px",
        top: "1477px",

        backgroundColor: "var(--main-color)",

        // border: "1px solid black",
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "285px",
          height: "338px",
          top: "165px",
          left: "120px",
        }}
        alt="three-right"
        src="https://s3-alpha-sig.figma.com/img/f3a3/854c/3bac5cbb935b4954a9900ccb5fe44c17?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnDfGlAQCUPObu3NrAc5rhwOrgFk6CakQBWgyd2aVYtIdkd2u-iU58LLNGSHD808OL-bc~Q0zhnr8FdWNSHyZLh8utDo3FWzxj5xk0lGxQ8SwoGpnawinA0NMT~vC2sYfjgHs4tDLkTMSao~9rIrIJVbD24UwosqQmKq-bxmrIX6jgNKATnUPtk0iC3ICTm9WpIpCB1Jp0NKy58vR7Pkdn5TJke3xrzD2y~Zi8u0k7exCgyG-W7BQ3KzBfR4ygeXc2rZCO5tM2WngznZ9ODEvEyn0-hQq-pk1dHBGeihe45CQw8xOYQN3LRuJ6fgGhbLoAkut32ldsGx3gaaHoCq7w__"
      />

      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ top: "60px", left: "439px", width: "561px" }}>
          TRAINING PROGRAMS
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={subTitle}>
        <Typography
          sx={{ width: "229px", height: "84px", top: "180px", left: "439px" }}
        >
          Immersion Program
        </Typography>
      </ThemeProvider>

      <Typography
        sx={{
          position: "absolute",
          width: "190px",
          height: "60px",
          top: "284px",
          left: "439px",
          fontFamily: "Open Sans",
          fontSize: "19px",
          fontWeight: 700,
          lineHeight: "30.4px",
          letterSpacing: "0.5px",
          textAlign: "left",
          color: "var(--secondry-color)",
        }}
      >
        Recommended Ages 14 - 18
      </Typography>

      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "271px",
            height: "132px",
            top: "354px",
            left: "439px",
          }}
        >
          At the Academy, players live under the supervision of our academy
          staff in the VIA apartment located in a safe
        </Typography>
      </ThemeProvider>

      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "285px",
          height: "338px",
          top: "165px",
          left: "730px",
        }}
        alt="three-left"
        src="https://s3-alpha-sig.figma.com/img/14ce/6d64/f23e0f0663fee5e004cd5eb853af8c53?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~VlZpG7F5Q06VJvhFavsrPTv~mMCqorAFdc~cqjMZaLmxWVo1DQyyC1qL0rNKNXhInz2AhmUST3sAqzgqvgRoIpzxlZYoaJJmsJ--3Dfe-3h6qWJvqONmqUaD5vFFjCc0kgGo8nT72sfFvdVMXFOLeVhAiLwHRuzWWH98XG6RlHXpRHoOM1WY0RbmH6dbCj2H5auQfLNf9fMlPMwxd55cbdIpz1crmkN8OxCsVZoSdNf56rILyyDL6jo3nJMUReohg~YujG2OyQ6T93hzPtWX0QHTUDLFzztb~rWQCQBZ6zso2b51ZY0th6yBS7YpdaB7eAF6ytaAaeMjeQkEX-tw__"
      />

      <ThemeProvider theme={subTitle}>
        <Typography
          sx={{
            width: "229px",
            height: "84px",
            top: "180px",
            left: "1049px",
          }}
        >
          Professional Program
        </Typography>
      </ThemeProvider>

      <Typography
        sx={{
          position: "absolute",
          width: "190px",
          height: "60px",
          top: "284px",
          left: "1049px",
          fontFamily: "Open Sans",
          fontSize: "19px",
          fontWeight: 700,
          lineHeight: "30.4px",
          letterSpacing: "0.5px",
          textAlign: "left",

          color: "var(--secondry-color)",
        }}
      >
        Recommended Ages 17-23
      </Typography>

      <ThemeProvider theme={pragrhStyle}>
        <Typography
          sx={{
            width: "242px",
            height: "132px",
            top: "354px",
            left: "1049px",
          }}
        >
          Professional Program is designed to ambitions of playing the game at
          the highest level to a multitude
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
export default SectionThree;
