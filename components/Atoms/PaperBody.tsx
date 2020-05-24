import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { theme } from "@/utils/theme";

const StyledTitleWrapper = styled.div`
  padding: 5px 35px 20px;
`;

const PaperBody: React.FC = ({ ...props }) => {
  const isOverSM = useMediaQuery(theme.breakpoints.up("sm"));
  const isOverLG = useMediaQuery(theme.breakpoints.up("lg"));
  const titleVariant = isOverLG ? "subtitle1" : isOverSM ? "body1" : "body2";

  return (
    <StyledTitleWrapper>
      <Typography variant={titleVariant} component="p" {...props} />
    </StyledTitleWrapper>
  );
};

export default PaperBody;
