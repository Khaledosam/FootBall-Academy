import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function SectionThree() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "50px",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          color: "text.secondary",
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
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "80%", md: "285px" },
              margin: "0 auto",
              padding: { md: "0px 45px 0px 30px" },
            }}
            alt="three-right"
            src="./images/three-left.png"
          />
          <Box
            display={"flex"}
            sx={{
              flexDirection: "column",
              ml: { xs: "30px", md: "-10px" },
              padding: { md: " 20px 20px 5px 0px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "text.secondary",
                lineHeight: "41.6px",
                textAlign: "left",
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
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
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
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
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
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
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "80%", md: "285px" },
              margin: "0 auto",
              padding: { md: "0px 45px 0px 30px" },
            }}
            alt="three-left"
            src="./images/three-right.png"
          />
          <Box
            display={"flex"}
            sx={{
              flexDirection: "column",
              ml: { xs: "30px", md: "-10px" },
              mt: { md: "20px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "text.secondary",
                lineHeight: "41.6px",
                textAlign: "left",
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
              }}
            >
              Professional Program
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "customBg.main",
                lienHeight: "30.4px",
                letterSpacing: "0.5px",
                textAlign: "left",
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
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
                padding: { xs: "10px 100px 10px 10px", md: "0px" },
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
