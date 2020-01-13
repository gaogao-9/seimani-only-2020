import React from "react";

export const useViewportHeight = (): void => {
  React.useEffect(() => {
    const updateVH = (): void => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVH();

    let timerId: number | null = null;
    const onResize = (): void => {
      if (typeof timerId === "number") {
        clearTimeout(timerId);
      }

      timerId = window.setTimeout(() => {
        updateVH();
        timerId = null;
      }, 200);
    };

    window.addEventListener("resize", onResize);

    return (): void => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
};
