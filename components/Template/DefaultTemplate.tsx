import * as React from "react";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "@/utils/theme";
import { useViewportHeight } from "@/hooks/useViewportHeight";

const DefaultTemplate: React.FC = ({ children }) => {
  useViewportHeight();

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
          href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:200|Noto+Sans+JP:100,300,400,500&display=swap"
        />
      </Head>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
};

export default DefaultTemplate;
