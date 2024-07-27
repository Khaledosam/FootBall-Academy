import { Avatar, Box, ThemeProvider, Typography } from "@mui/material";
import { mainTitle, pragrhStyle } from "../mui componanets/textStyles";

function SectionSix() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "100px",
      }}
    >
      <ThemeProvider theme={mainTitle}>
        <Typography sx={{ width: "420px", alignSelf: "center" }}>
          WHAT THEY SAID
        </Typography>
      </ThemeProvider>
      <Box sx={{ display: "flex", gap: "20px", mt: "50px" }}>
        <Box
          sx={{
            width: "590px",
            padding: "30px",
            borderRadius: "6px 0px 0px 0px",
            border: "1px solid #52BF7633",
          }}
        >
          <Typography
            sx={{
              width: "29px",

              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "87.16px",
              textAlign: "center",
              color: "var(--secondry-color)",
            }}
          >
            “
          </Typography>

          <ThemeProvider theme={pragrhStyle}>
            <Typography
              sx={{
                width: "490px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Typography>
            <Box sx={{ display: "flex", width: "217px" }}>
              <Box>
                <Avatar
                  sx={{
                    width: "40px",
                    height: "40px",
                    alignItems: "left",
                  }}
                  alt="ahmed "
                  src="./images/avatar 1.png"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    width: "147px",
                    height: "33px",

                    color: "var( --main-Title)",
                    fontSize: "16px",
                  }}
                >
                  Ahmad Metronom
                </Typography>

                <Typography
                  sx={{
                    width: "167px",
                    height: "33px",
                  }}
                >
                  Professional player
                </Typography>
              </Box>
            </Box>
          </ThemeProvider>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "590px",
              padding: "30px",
              borderRadius: "6px 0px 0px 0px",
              border: "1px solid #52BF7633",
            }}
          >
            <Typography
              sx={{
                width: "29px",

                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "87.16px",
                textAlign: "center",
                color: "var(--secondry-color)",
              }}
            >
              “
            </Typography>

            <ThemeProvider theme={pragrhStyle}>
              <Typography
                sx={{
                  width: "490px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Box sx={{ display: "flex", width: "217px" }}>
                <Box>
                  <Avatar
                    sx={{
                      width: "40px",
                      height: "40px",
                      alignItems: "left",
                    }}
                    alt="ahmed "
                    src="./images/avatar 1.png"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      width: "147px",
                      height: "33px",

                      color: "var( --main-Title)",
                      fontSize: "16px",
                    }}
                  >
                    Masud Coip
                  </Typography>

                  <Typography
                    sx={{
                      width: "167px",
                      height: "33px",
                    }}
                  >
                    Professional player
                  </Typography>
                </Box>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionSix;
