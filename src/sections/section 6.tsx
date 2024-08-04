import { Avatar, Box, Typography } from "@mui/material";

function SectionSix() {
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
          color: "text.secondary",
          alignSelf: "center",
          lineHeight: "3.9rem",
          textAlign: "center",
          padding: "50px",
        }}
      >
        WHAT THEY SAID
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "30px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: "6px 0px 0px 0px",
            border: "1px solid #52BF7633",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "64px",
              color: "customBg.main",
            }}
          >
            “
          </Typography>

          <Typography
            variant="body2"
            sx={{
              lineHeight: "33px",
              textAlign: "left",
              color: "text.disabled",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </Typography>
          <Box sx={{ display: "flex", flex: 1, mt: "40px" }}>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                alignItems: "left",
              }}
              alt="ahmed "
              src="./images/avatar 1.png"
            />

            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "text.secondary",
                  padding: "0px 10px 0px 10px",
                }}
              >
                Ahmad Metronom
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.disabled",
                  padding: "0px 10px 0px 10px",
                }}
              >
                Professional player
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: "30px",
            borderRadius: "6px 0px 0px 0px",
            border: "1px solid #52BF7633",
          }}
        >
          <Typography
            sx={{
              width: "29px",
              fontSize: "64px",
              color: "customBg.main",
            }}
          >
            “
          </Typography>

          <Typography
            variant="body2"
            sx={{
              lineHeight: "33px",
              textAlign: "left",
              color: "text.disabled",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </Typography>
          <Box sx={{ display: "flex", flex: 1, mt: "40px" }}>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                alignItems: "left",
              }}
              alt="ahmed "
              src="./images/avatar 1.png"
            />

            <Box>
              <Typography
                sx={{
                  padding: "0px 10px 0px 10px",
                  fontSize: "16px",
                  color: "text.secondary",
                }}
              >
                Ahmad Metronom
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.disabled",
                  padding: "0px 10px 0px 10px",
                }}
              >
                Professional player
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionSix;
