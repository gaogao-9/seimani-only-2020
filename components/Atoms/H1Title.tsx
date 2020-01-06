import styled from "@emotion/styled";
import { media } from "@/utils/media";

const H1Title = styled.h1`
  color: green;

  ${media({ orientation: "landscape" })} {
    color: red;
  }
  ${media({ orientation: "portrait" })} {
    color: blue;
  }
`;

export default H1Title;
