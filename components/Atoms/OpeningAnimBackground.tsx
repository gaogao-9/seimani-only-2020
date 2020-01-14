import styled from "@emotion/styled";
import { media } from "@/utils/media";

const OpeningAnimBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000000;

  ${media({ orientation: "portrait" })} {
    flex-direction: column;
  }
`;

export default OpeningAnimBackground;
