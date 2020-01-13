import React from "react";

export type SideDrawerContextValue = {
  visibility: boolean;
  setVisibility: (isVisible: boolean) => void;
};

export const SideDrawerContext = React.createContext<SideDrawerContextValue>({
  visibility: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setVisibility: () => {},
});

export const useSideDrawerContext = (
  initialValue = false,
): SideDrawerContextValue => {
  const [visibility, setVisibility] = React.useState(initialValue);
  const sideDrawerContextValue: SideDrawerContextValue = {
    visibility,
    setVisibility,
  };

  return sideDrawerContextValue;
};
