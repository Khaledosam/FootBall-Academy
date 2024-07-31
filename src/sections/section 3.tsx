import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function SectionThree() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "100px",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          lineHeight: "3.9rem",
          letterSpacing: "-3.5px",
          textAlign: "center",
        }}
      >
        TRAINING PROGRAMS
      </Typography>

      <Box
        display={"flex"}
        sx={{ mt: "50px", flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          flex={1}
          display={"flex"}
          mr={"40px"}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            component="img"
            sx={{
              width: "285px",
              mr: "30px",
              ml: "80px",
            }}
            alt="three-right"
            src="./images/three-left.png"
          />
          <Box display={"flex"} sx={{ flexDirection: "column", mr: "50px" }}>
            <Typography
              variant="h4"
              sx={{
                color: "text.secondary",
                lineHeight: "41.6px",
                textAlign: "left",
              }}
            >
              Immersion Program
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "customBg.main",
                lienHeight: "30.4px",
                letterSpacing: "0.5px",
                textAlign: "left",
                mr: "30px",
              }}
            >
              Recommended Ages 14 - 18
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.disabled",
                lineHeight: "33px",
                textAlign: "left",
                mr: "-16px",
              }}
            >
              At the Academy, players live under the supervision of our academy
              staff in the VIA apartment located in a safe
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flex={1}
          mr={"50px"}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            component="img"
            sx={{
              width: "285px",
              mr: "30px",
            }}
            alt="three-left"
            src="./images/three-right.png"
          />
          <Box display={"flex"} flexDirection={"column"} mr={"100px"}>
            <Typography
              variant="h4"
              sx={{
                lineHeight: "41.6px",
                color: "text.secondary",
                textAlign: "left",
              }}
            >
              Professional Program
            </Typography>

            <Typography
              variant="h6"
              sx={{
                lineHeight: "30.4px",
                letterSpacing: "0.5px",
                textAlign: "left",
                color: "customBg.main",
                mr: "50px",
              }}
            >
              Recommended Ages 17-23
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.disabled",
                lineHeight: "33px",
                textAlign: "left",
              }}
            >
              Professional Program is designed to ambitions of playing the game
              at the highest level to a multitude
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionThree;
