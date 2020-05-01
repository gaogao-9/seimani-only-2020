import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MuiThemeProvider } from "@material-ui/core";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import { theme } from "@/utils/theme";
import { routes } from "@/utils/routes";
import Title from "@/components/Atoms/Title";

const DefaultTemplate: React.FC = ({ children }) => {
  const router = useRouter();
  const route = routes.find(x => x.pathname === router.pathname);
  const title =
    "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅲ";
  const subTitle = route?.pathname === "/top" ? "" : route?.title ?? "";
  const fullTitle = subTitle ? `${title} | ${subTitle}` : title;
  const titleElement = React.useMemo(() => Title({ title: fullTitle }), [
    fullTitle,
  ]);
  const description = `${title}の公式サイトです`;
  const origin = "https://festia.moe/";
  const ogpImage = `${origin}ogp_icon.jpg`;

  useViewportHeight();

  return (
    <>
      <Head>
        {titleElement}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="google" content="notranslate" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:url" content={origin} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogpImage} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:200|Noto+Sans+JP:100,300,400,500|Kosugi&display=swap"
        />
      </Head>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
};

export default DefaultTemplate;
