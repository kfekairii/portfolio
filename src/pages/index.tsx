import type { NextPage } from "next";
import { Layout, Menu } from "../containers";
import { Hero } from "../sections";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
