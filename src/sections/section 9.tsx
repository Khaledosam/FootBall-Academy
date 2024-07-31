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
      mt={"100px"}
      gap={"100px"}
      flex={1}
      padding={"50px"}
      sx={{
        borderRadius: "0 0 20px 20px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box display={"flex"} mr={"220px"} gap={"50px"} flexDirection={"column"}>
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

      {MyList.map((item) => {
        return (
          <Box
            display={"flex"}
            sx={{ flexDirection: "column", flex: 1, textAlign: "center" }}
          >
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h5"
              component="div"
              color={"customBg.main"}
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
  );
}
export default SectionNine;
