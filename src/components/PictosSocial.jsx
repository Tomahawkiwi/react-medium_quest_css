import React from "react";
import styled from "@emotion/styled";

function PictosSocial() {
  const ContainerLogoPic = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    display: flex;
    flex-direction: column;
  `;

  const LogoPic = styled.img`
    width: 14px;
    margin-bottom: 8px;
    opacity: 0.8;
    &:hover {
      transform: scale(1.2);
    }
  `;

  return (
    <ContainerLogoPic>
      <LogoPic
        src="https://www.unipile.com/wp-content/uploads/2022/06/logo-facebook-blanc.png"
        alt="Facebook logo"
      />
      <LogoPic
        src="https://global-uploads.webflow.com/5d76860495ab0751a73bbb20/61e456fc1ede5d072ba39b97_LinkedIn-rond-blanc-300x300.png"
        alt="LinkedIn logo"
      />
      <LogoPic
        src="https://bassin-arcachon.com/wp-content/uploads/2017/02/logo-twitter-blanc.png"
        alt="Twitter logo"
      />
    </ContainerLogoPic>
  );
}

export default PictosSocial;
