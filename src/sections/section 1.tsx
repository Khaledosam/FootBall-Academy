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
        }}
      >
        <Box
          sx={{
            mt: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            padding: "80px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              letterSpacing: "0.5px",
              textAlign: "left",
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
            }}
          >
            Create the best soccer development environment for ambitious players
            that want to train and play the game at the highest level.
          </Typography>
          <Box display={"flex"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "customBg.main",
                fontSize: "body2",
                padding: "20px",
                mr: { xs: "25px", md: "100px" },
              }}
            >
              Get started
            </Button>
            <Button
              variant="text"
              sx={{ color: "text.primary", mr: { xs: "25px", md: "270px" } }}
            >
              Our programs
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ width: "538px", mt: { xs: "0px", md: "125px" }, mr: "80px" }}
          component="img"
          alt="the scrore shoes"
          src="./images/s one.png"
        />
      </Box>
    </Box>
  );
}

export default SectionONe;
