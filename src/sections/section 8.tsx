import { Box, Button, Typography } from "@mui/material";

function SectionEight() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        mt: "100px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          lineHeight: "3.9rem",
          textAlign: "center",
          color: "text.secondary",
        }}
      >
        START YOUR JOURNEY WITH US
      </Typography>

      <Typography
        variant="body2"
        sx={{
          lineHeight: "33px",
          textAlign: "center",
          color: "text.disabled",
        }}
      >
        if you need to talk to a Kaison Academy representative, please feel free
        to call us or shoot us an email via the contact form below.
      </Typography>

      <Button
        variant="contained"
        sx={{
          borderRadius: "4px ",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24.51px",
          letterSpacing: "0.5px",
          textAlign: "left",
          padding: "20px",
          backgroundColor: "customBg.main",
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
export default SectionEight;
