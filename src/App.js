import "./App.css";
import styled from "@emotion/styled";
import Stars from "./components/Stars";
import PictosSocial from "./components/PictosSocial";
import Texts from "./components/Texts";
import Buttons from "./components/Buttons";
import Picture from "./components/Picture";
import { themeColor } from "./tools/constCSS";

function App() {
  const CardContainer = styled.div`
    width: 240px;
    background-color: white;
    margin: 100px auto;
    border-radius: 20px;
    box-shadow: 5px 4px 16px -10px rgba(0, 0, 0, 0.4);
  `;

  const CoverHeader = styled.div`
    height: 100px;
    background-color: ${themeColor};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
  `;

  return (
    <CardContainer>
      <CoverHeader>
        <PictosSocial />
        <Picture />
      </CoverHeader>
      <Texts />
      <Stars />
      <Buttons />
    </CardContainer>
  );
}

export default App;
