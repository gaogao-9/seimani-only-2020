import * as React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  const [vh, setVh] = React.useState(0);

  React.useEffect(() => {
    const updateVH = (): void => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setVh(vh);
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
      }, 500);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return (): void => {
      window.removeEventListener("resize", onResize);
    };
  }, [vh]);

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
        <link rel="stylesheet" type="text/css" href="/global.css" />
      </Head>
      {children}
    </>
  );
};

export default DefaultTemplate;
