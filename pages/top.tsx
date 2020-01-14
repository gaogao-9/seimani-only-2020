import Template from "@/components/Template/SiteTemplate";
import Head from "next/head";
import Title from "@/components/Atoms/Title";

const Home = (): JSX.Element => (
  <Template>
    <Head>
      <Title />
    </Head>
    <h1>トップページ</h1>
  </Template>
);

export default Home;
