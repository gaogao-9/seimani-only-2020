import React from "react";
import styled from "@emotion/styled";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { theme } from "@/utils/theme";

const StyledTitle = styled.div`
  border-bottom: #3c3c3c 1px solid;
  margin: 20px 10px;
  padding: 5px 0;
`;

const PaperTitle: React.FC = ({ ...props }) => {
  const isOverSM = useMediaQuery(theme.breakpoints.up("sm"));
  const isOverLG = useMediaQuery(theme.breakpoints.up("lg"));
  const titleVariant = isOverLG ? "h4" : isOverSM ? "h5" : "h6";

  return (
    <StyledTitle>
      <Typography variant={titleVariant} component="h2" {...props} />
    </StyledTitle>
  );
};

export default PaperTitle;
