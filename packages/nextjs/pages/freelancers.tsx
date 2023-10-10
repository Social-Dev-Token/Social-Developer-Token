import type { NextPage } from "next";
import Dashboard from "~~/components/Dashboard";
import HeaderFilter from "~~/components/HeaderFilter";

const freelancers: NextPage = () => {
  return (
    <>
      <HeaderFilter />
      <Dashboard />
    </>
  );
};

export default freelancers;
