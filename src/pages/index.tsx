import type { NextPage } from "next";
import { Layout, Menu } from "../containers";
import { About, Hero } from "../sections";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  );
};

export default Home;
