import * as React from "react";
import Head from "next/head";

const DefaultTemplate: React.FC = ({ children }) => {
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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:200&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {children}
    </>
  );
};

export default DefaultTemplate;
