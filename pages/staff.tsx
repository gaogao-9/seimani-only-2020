import Template from "@/components/Template/SiteTemplate";
import Head from "next/head";
import Title from "@/components/Atoms/Title";

const Home = (): JSX.Element => (
  <Template>
    <Head>
      <Title subTitle="スタッフ一覧" />
    </Head>
    <h1>スタッフ一覧</h1>
  </Template>
);

export default Home;
