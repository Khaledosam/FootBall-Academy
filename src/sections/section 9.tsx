import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

function SectionNine() {
  const MyList = [
    {
      content: "Menu",
      contentOne: "Home",
      contentTwo: "Academics",
      contentThree: "Programs",
      contentFour: "About",
    },
    {
      content: "Programs",
      contentOne: "For Kids",
      contentTwo: "For Teen",
      contentThree: "Professional",
      contentFour: "Pivate",
    },
  ];

  return (
    <Box
      display={"flex"}
      bgcolor={"common.black"}
      gap={"30px"}
      flex={1}
      padding={"30px"}
      sx={{
        borderRadius: "0 0 20px 20px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        display={"flex"}
        gap={"20px"}
        flexDirection={"column"}
        sx={{ flex: { md: "1" } }}
      >
        <Typography variant="h3" color="customBg.main">
          Kaision
        </Typography>
        <Typography variant="h2" color="text.primary">
          Your Football Academy
        </Typography>
        <Typography variant="body2" color="text.primary">
          2021 Ibey Design. Allright reserved
        </Typography>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        {MyList.map((item) => {
          return (
            <Box
              display={"flex"}
              sx={{ flexDirection: "column", flex: 1, textAlign: "left" }}
            >
              <Typography
                sx={{ mb: 2 }}
                variant="h5"
                component="div"
                color={"customBg.main"}
                textAlign={"left"}
              >
                {item.content}
              </Typography>

              <List>
                {
                  <ListItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mr: "40px",
                      fontSize: "18px",
                      fontWeight: "600",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    <ListItemText primary={item.contentOne} />
                    <ListItemText primary={item.contentTwo} />
                    <ListItemText primary={item.contentThree} />
                    <ListItemText primary={item.contentFour} />
                  </ListItem>
                }
              </List>
            </Box>
          );
        })}
        <Box sx={{ mt: { md: "-30px" } }}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h5"
            component="div"
            color={"customBg.main"}
            textAlign={"left"}
          >
            {"About Us"}
          </Typography>
          <List>
            {
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  fontSize: "18px",
                  fontWeight: "600",
                  flexWrap: "wrap",

                  alignItems: { md: "flex-start" },
                }}
              >
                <ListItemText sx={{ mr: "30px" }} primary={"About Us"} />
                <ListItemText sx={{ mr: "30px" }} primary={"Security"} />
                <ListItemText sx={{ mr: "30px" }} primary={"Our Offices"} />
                <ListItemText primary={"Social Media"} />
              </ListItem>
            }
          </List>
        </Box>
      </Box>
    </Box>
  );
}
export default SectionNine;
