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
    {
      content: "About Us",
      contentOne: "About Us",
      contentTwo: "Security",
      contentThree: "Our Offices",
      contentFour: "Social Media",
    },
  ];

  return (
    <Box
      display={"flex"}
      bgcolor={"common.black"}
      gap={"100px"}
      flex={1}
      padding={"30px"}
      sx={{
        borderRadius: "0 0 20px 20px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box display={"flex"} gap={"20px"} flexDirection={"column"}>
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
                sx={{ mt: 4, mb: 2 }}
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
      </Box>
    </Box>
  );
}
export default SectionNine;
