import type { NextPage } from "next";
import Dashboard from "~~/components/Dashboard";
import HeaderFilter from "~~/components/HeaderFilter";

const Home: NextPage = () => {
  return (
    <>
      <HeaderFilter />
      <Dashboard />
    </>
  );
};

export default Home;
