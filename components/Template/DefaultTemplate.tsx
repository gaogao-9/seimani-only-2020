import * as React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    const onResize = (): void => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    onResize();

    window.addEventListener("resize", onResize, { passive: true });

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
      </Head>
      {children}
    </>
  );
};

export default DefaultTemplate;
