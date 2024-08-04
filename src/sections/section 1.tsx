import Box from "@mui/material/Box";
import "./sections.css";
import AppBarr from "../mui componanets/appBar";
import { Button, Typography } from "@mui/material";

function SectionONe() {
  return (
    <Box bgcolor={"common.black"} sx={{ borderRadius: "20px 20px 0 0" }}>
      <AppBarr />
      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          padding: { md: "80px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              letterSpacing: "0.5px",
              textAlign: "left",
              padding: "30px",
            }}
          >
            EXCELLENCE IN FOOTBALL & EDUCATION
          </Typography>
          <Typography
            variant="body2"
            sx={{
              lineHeight: "33px",
              textAlign: "left",
              color: "text.disabled",
              padding: { xs: "0px 30px", md: "0px 100px 0px 0px" },
            }}
          >
            Create the best soccer development environment for ambitious players
            that want to train and play the game at the highest level.
          </Typography>
          <Box
            display={"flex"}
            sx={{ justifyContent: "space-between", padding: "40px" }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "customBg.main",
                fontSize: "body2",
                padding: "20px",
              }}
            >
              Get started
            </Button>
            <Button variant="text" sx={{ color: "text.primary" }}>
              Our programs
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "538px" },
            margin: "0 auto",
            mb: "30px",
          }}
          component="img"
          alt="the scrore shoes"
          src="./images/s one.png"
        />
      </Box>
    </Box>
  );
}

export default SectionONe;
