import React from "react";
import {
  SideDrawerContext,
  useSideDrawerContext,
} from "@/hooks/contexts/SideDrawerContext";
import DefaultTemplate from "@/components/Template/DefaultTemplate";
import SiteHeaderBar from "@/components/Organisms/SiteHeaderBar";
import SideDrawer from "@/components/Organisms/SideDrawer";

const SiteTemplate: React.FC = ({ children, ...props }) => {
  const sideDrawerContextValue = useSideDrawerContext();

  return (
    <DefaultTemplate {...props}>
      <SideDrawerContext.Provider value={sideDrawerContextValue}>
        <SiteHeaderBar />
        {children}
        <SideDrawer />
      </SideDrawerContext.Provider>
    </DefaultTemplate>
  );
};

export default SiteTemplate;
