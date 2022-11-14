import React from "react";
import styled from "@emotion/styled";
import { themeColor } from "../tools/constCSS";

function Buttons() {
  const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px auto;
  `;

  const Button = styled.button`
    padding: 7px 15px;
    justify-content: center;
    margin: 20px 5px;
    background-color: ${themeColor};
    font-family: inherit;
    font-weight: 500;
    font-size: 13px;
    color: white;
    border: none;
    border-radius: 20px;
    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <ContainerButton>
      <Button type="button">Follow me</Button>
      <Button type="button">Contact me</Button>
    </ContainerButton>
  );
}

export default Buttons;
