import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

const pages = ["Home", "Acadmecs", "Programs", "About"];

function AppBarr() {
  return (
    <AppBar position="static" sx={{ borderRadius: "20px 20px 0 0" }}>
      <Container
        sx={{
          width: "830px",
          right: "280px",
          position: "relative",
          top: "19px",
        }}
      >
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2, top: "19px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 15,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".3rem",
              color: "#287BCA",
              textDecoration: "none",
              fontSize: "25px",
              top: "19px",
            }}
          >
            kaison
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#c0c0c0",
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "600px",
                  lineHeight: "24.51px",
                  letterSpacing: "0.5px",
                  ml: "30px",

                  textTransform: "capitalize",
                  "&:hover": { color: "#287BCA" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Box
        sx={{
          width: "62px",
          height: "62px",
          position: "absolute",
          top: "19px",
          left: "1258px",
        }}
      >
        <Menu
          sx={{
            width: "24px",
            height: "24px",
            top: "19px",
            left: "19px",
            position: "absolute",
            color: "#ffffff",
            cursor: "pointer",
          }}
        />
      </Box>
    </AppBar>
  );
}
export default AppBarr;
