import * as React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const DefaultTempate: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Head>
    {children}
  </>
);

export default DefaultTempate;
