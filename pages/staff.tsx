import React from "react";
import Template from "@/components/Template/SiteTemplate";
import Head from "next/head";
import Title from "@/components/Atoms/Title";

const Page: React.FC = () => (
  <Template>
    <Head>
      <Title subTitle="スタッフ一覧" />
    </Head>
    <h1>スタッフ一覧</h1>
  </Template>
);

export default Page;
