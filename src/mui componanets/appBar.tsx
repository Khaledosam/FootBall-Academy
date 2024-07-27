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
    <AppBar
      position="static"
      sx={{ borderRadius: "20px 20px 0 0", backgroundColor: "#091524" }}
    >
      <Container
        sx={{
          width: "1200px",
          right: "280px",
          display: "flex",
          alignItems: "center",
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
        <Box sx={{}}>
          <Menu sx={{}} />
        </Box>
      </Container>
    </AppBar>
  );
}
export default AppBarr;
