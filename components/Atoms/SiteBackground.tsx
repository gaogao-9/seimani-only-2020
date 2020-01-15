import styled from "@emotion/styled";

const cellSize = 20;
const primaryColor = "#ffffff";
const secondaryColor = "#8cc0de";

const SiteBackground = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${primaryColor};
  background-image: radial-gradient(${secondaryColor} 1px, transparent 1px);
  background-size: ${cellSize}px ${cellSize}px;
`;

export default SiteBackground;
