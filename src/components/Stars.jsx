import React from "react";
import styled from "@emotion/styled";

function Stars() {
  const StarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const Star = styled.img`
    width: 18px;
    margin: auto 2px;
  `;

  const picto = {
    url: "https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png",
    alt: "Star rating",
  };

  return (
    <StarContainer>
      <Star src={picto.url} alt={picto.alt} />
      <Star src={picto.url} alt={picto.alt} />
      <Star src={picto.url} alt={picto.alt} />
      <Star src={picto.url} alt={picto.alt} />
      <Star src={picto.url} alt={picto.alt} />
    </StarContainer>
  );
}

export default Stars;
