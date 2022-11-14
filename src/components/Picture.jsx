import React from "react";
import styled from "@emotion/styled";
import { themeColor } from "../tools/constCSS";

function Picture() {
  const ContainerProfilePic = styled.div`
    height: 98px;
    width: 98px;
    border-radius: 60px;
    background-color: ${themeColor};
    position: absolute;
    bottom: -20px;
    left: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ProfilePic = styled.img`
    height: 90px;
    border-radius: 60px;
    border: 2px solid white;
  `;

  return (
    <ContainerProfilePic>
      <ProfilePic
        src="https://randomuser.me/api/portraits/men/64.jpg"
        alt="Profile"
      />
    </ContainerProfilePic>
  );
}

export default Picture;
