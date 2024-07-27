import Box from "@mui/material/Box";
import "./sections.css";
import AppBarr from "../mui componanets/appBar";
import { Button, Typography } from "@mui/material";

function SectionONe() {
  return (
    <Box sx={{ backgroundColor: "#091524", borderRadius: "20px 20px 0 0" }}>
      <AppBarr />
      <Box sx={{ display: "flex" }}>
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
            sx={{
              width: "697px",
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: "93.6px",
              letterSpacing: "0.5px",
              textAlign: "left",
              color: " #FFFFFF",
            }}
          >
            EXCELLENCE IN FOOTBALL & EDUCATION
          </Typography>
          <Typography
            sx={{
              width: "576px",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "33px",
              textAlign: "left",
              color: "#C0C0C0",
            }}
          >
            Create the best soccer development environment for ambitious players
            that want to train and play the game at the highest level.
          </Typography>
          <Box display={"flex"}>
            <Button variant="contained" sx={{ width: "183px" }}>
              Get started
            </Button>
            <Button variant="text" sx={{ width: "132px" }}>
              Our programs
            </Button>{" "}
          </Box>
        </Box>
        <Box
          sx={{ width: "538px", mt: "50px", mr: "50px" }}
          component="img"
          alt="the scrore shoes"
          src="./images/s one.png"
        />
      </Box>
    </Box>
  );
}

export default SectionONe;
