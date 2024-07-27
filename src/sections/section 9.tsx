import { Box, Typography } from "@mui/material";

import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

import Sheet from "@mui/joy/Sheet";

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
      sx={{
        borderRadius: "0px 0 20px 20px",
        display: "flex",
        width: "1440px",
        alignItems: "center",
        alignContent: "center",
        mt: "100px",
        backgroundColor: "var(--main-Title)",
      }}
    >
      <Box
        sx={{
          gap: "20px",
          display: "flex",
          flexDirection: "column",
          mt: "100px",
          mb: "100px",
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 15,
            textDecoration: "none",
          }}
        >
          kaison
        </Typography>
        <Typography
          color="var(--main-color)"
          sx={{
            width: "368px",

            fontSize: "54px",
            fontWeight: 700,
            lineHeight: "73.54px",
            textAlign: "left",
          }}
        >
          Your Football Academy
        </Typography>
        <Typography
          color="var(--main-color)"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "30.7px",
            textAlign: "left",
          }}
        >
          2021 Ibey Design. Allright reserved
        </Typography>
      </Box>
      <Box sx={{}}>
        <Sheet
          variant="solid"
          invertedColors
          sx={{
            flexGrow: 1,
            p: 2,
            borderRadius: { xs: 0, sm: "sm" },
            backgroundColor: "var(--main-Title)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { md: "flex-start" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {MyList.map((item) => {
              return (
                <List
                  size="sm"
                  orientation="horizontal"
                  wrap
                  sx={{
                    flexGrow: 0,
                    "--ListItem-radius": "8px",
                  }}
                >
                  <ListItem nested>
                    <ListSubheader
                      sx={{
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "40.93px",
                        letterSpacing: "0.5px",
                        textAlign: "left",
                        color: "var(--secondry-color)",
                      }}
                    >
                      {item.content}
                    </ListSubheader>
                    <List
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "30.7px",
                        letterSpacing: "0.5px",
                        textAlign: "left",
                        color: "var(--main-color)",
                      }}
                    >
                      <ListItem>
                        <ListItemButton>{item.contentOne}</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>{item.contentTwo}</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>{item.contentThree}</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>{item.contentFour}</ListItemButton>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              );
            })}
          </Box>
        </Sheet>
      </Box>
    </Box>
  );
}
export default SectionNine;
