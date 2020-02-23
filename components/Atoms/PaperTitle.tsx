import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { theme } from "@/utils/theme";
import { FiberPin } from "@material-ui/icons";

const StyledTitleWrapper = styled.div`
  padding: 0px 10px 20px;
`;

const StyledTitleLine = styled.div`
  border-bottom: #3c3c3c 1px solid;
  padding: 5px 0;
`;

const PaperTitle: React.FC = ({ ...props }) => {
  const isOverSM = useMediaQuery(theme.breakpoints.up("sm"));
  const isOverLG = useMediaQuery(theme.breakpoints.up("lg"));
  const titleVariant = isOverLG ? "h4" : isOverSM ? "h5" : "h6";

  return (
    <StyledTitleWrapper>
      <StyledTitleLine>
        <Typography variant={titleVariant} component="h2" {...props} />
      </StyledTitleLine>
    </StyledTitleWrapper>
  );
};

export default PaperTitle;
