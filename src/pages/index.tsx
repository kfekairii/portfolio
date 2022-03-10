import type { NextPage } from "next";
import { AppHead } from "../components";
import { Nav } from "../containers";

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <Nav />
    </>
  );
};

export default Home;
