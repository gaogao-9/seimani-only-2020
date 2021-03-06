import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  SideDrawerContext,
  useSideDrawerContext,
} from "@/hooks/contexts/SideDrawerContext";
import DefaultTemplate from "@/components/Template/DefaultTemplate";
import SiteBackground from "@/components/Atoms/SiteBackground";
import SiteHeaderBar from "@/components/Organisms/SiteHeaderBar";
import SideDrawer from "@/components/Organisms/SideDrawer";
import styled from "@emotion/styled";
import { theme } from "@/utils/theme";

const StyledContentWrapper = styled.div`
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  height: auto;
  min-height: calc(100% - 58px);
  padding: 10px 0px;
  overflow-wrap: break-word;

  ${theme.breakpoints.up("sm")} {
    min-height: calc(100% - 64px);
    padding: 10px 5px;
  }
`;

const SiteTemplate: React.FC = ({ children, ...props }) => {
  const sideDrawerContextValue = useSideDrawerContext();

  return (
    <DefaultTemplate {...props}>
      <SideDrawerContext.Provider value={sideDrawerContextValue}>
        <SiteBackground>
          <StyledContentWrapper>
            <SiteHeaderBar />
            <StyledMain>
              <CssBaseline />
              {children}
            </StyledMain>
          </StyledContentWrapper>
          <SideDrawer />
        </SiteBackground>
      </SideDrawerContext.Provider>
    </DefaultTemplate>
  );
};

export default SiteTemplate;
