import type { NextPage } from "next";
import { Layout, Menu } from "../containers";
import { About, Hero, Work } from "../sections";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Work />
      </Layout>
    </>
  );
};

export default Home;
