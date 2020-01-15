import React from "react";
import { AppProps, AppContext, AppInitialProps } from "next/app";
import { useRouter } from "next/router";
import { PageTransition } from "next-page-transitions";

export interface IApp<AppProps> extends React.FC<AppProps> {
  getInitialProps: (props: AppContext) => Promise<AppInitialProps>;
}

const MyApp: IApp<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.pathname} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms ease;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms ease;
        }
      `}</style>
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
