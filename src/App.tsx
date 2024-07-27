import { Container, CssBaseline } from "@mui/material";
import "./App.css";

import SectionONe from "./sections/section 1";
import SectionTwo from "./sections/section 2";
import SectionThree from "./sections/section 3";
import SectionFour from "./sections/section 4";
import SectionFive from "./sections/section 5";
import SectionSix from "./sections/section 6";
import SectionSeven from "./sections/section 7";
import SectionEight from "./sections/section 8";
import SectionNine from "./sections/section 9";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          bgcolor: "#FFFFFF",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <SectionONe />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
      </Container>
    </>
  );
}

export default App;
