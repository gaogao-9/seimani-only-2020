import React from "react";
import { AppProps, AppContext } from "next/app";
import { useRouter } from "next/router";
import { PageTransition } from "next-page-transitions";

interface IMyApp<AppProps> extends React.FC<AppProps> {
  getInitialProps: (props: AppContext) => Promise<{ pageProps: any }>;
}

const MyApp: IMyApp<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router.pathname);

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
}): Promise<{ pageProps: any }> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
