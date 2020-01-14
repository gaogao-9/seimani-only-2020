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
  const [subTitle, setSubTitle] = React.useState();
  const title = React.useMemo(() => Title({ subTitle }), [subTitle]);

  React.useEffect(() => {
    const route = routes.find(x => x.pathname === router.pathname);

    setSubTitle(route?.pathname === "/top" ? "" : route?.title ?? "");
  }, [router.pathname]);

  useViewportHeight();

  return (
    <>
      <Head>
        {title}
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
