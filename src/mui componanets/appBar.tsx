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
      sx={{
        borderRadius: "20px 20px 0 0",
        backgroundColor: "common.black",
        mt: "20px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2, top: "19px" }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: { md: 25, xs: 0 },
              color: "customBg.main",
              textDecoration: "none",
              ml: { xs: "50px" },
            }}
          >
            kaison
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              mr: 50,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "text.disabled",
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
