import { Button } from "@mui/material";

function StartButton() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "183px",
          height: "60px",
          top: "540px",
          left: "120px",

          borderRadius: "4px 0px 0px 0px",

          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24.51px",
          letterSpacing: "0.5px",
          textAlign: "left",
        }}
      >
        Get started
      </Button>
      ;
    </>
  );
}
export default StartButton;
