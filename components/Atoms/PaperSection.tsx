import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { theme } from "@/utils/theme";

const StyledTitleWrapper = styled.div`
  padding: 5px 18px 10px;
`;

const PaperSection: React.FC = ({ ...props }) => {
  const isOverLG = useMediaQuery(theme.breakpoints.up("lg"));
  const titleVariant = isOverLG ? "h5" : "subtitle1";

  return (
    <StyledTitleWrapper>
      <Typography variant={titleVariant} component="h3" {...props} />
    </StyledTitleWrapper>
  );
};

export default PaperSection;
