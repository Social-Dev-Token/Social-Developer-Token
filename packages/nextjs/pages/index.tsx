import type { NextPage } from "next";
// import Dashboard from "~~/components/Dashboard";
import Landing from "~~/components/Landing";
import HeaderFilter from "~~/components/HeaderFilter";

const Home: NextPage = () => {
  return (
    <>
      <HeaderFilter />
      <Landing />
      {/* <Dashboard /> */}
    </>
  );
};

export default Home;
