import React from "react";
import styled from "@emotion/styled";

function Texts() {
  const Name = styled.h1`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 0px;
  `;

  const Job = styled.h2`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-top: 0px;
  `;

  return (
    <div>
      <Name>Michel Jemledev</Name>
      <Job>Web developer</Job>
    </div>
  );
}

export default Texts;
