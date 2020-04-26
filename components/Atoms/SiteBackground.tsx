import styled from "@emotion/styled";

const SiteBackground = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  background-image: url(/assets/img/gear.png), url(/assets/img/bg.jpg);
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position: right bottom, center center;
`;

export default SiteBackground;
