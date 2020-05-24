import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { theme } from "@/utils/theme";

const StyledTitleWrapper = styled.div`
  padding: 10px 15px 20px;
`;

const StyledTitleLine = styled.div`
  border-bottom: #3c3c3c 1px solid;
  padding: 5px 0;
`;

const PaperTitle: React.FC = ({ ...props }) => {
  const isOverSM = useMediaQuery(theme.breakpoints.up("sm"));
  const titleVariant = isOverSM ? "h4" : "h5";

  return (
    <StyledTitleWrapper>
      <StyledTitleLine>
        <Typography variant={titleVariant} component="h2" {...props} />
      </StyledTitleLine>
    </StyledTitleWrapper>
  );
};

export default PaperTitle;
