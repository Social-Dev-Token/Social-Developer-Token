import React from "react";
import { Doughnut } from "react-chartjs-2";

function Graph({ isModalOpen, setIsModalOpen }) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4">
      <div className="col-span-4">
        <img src="/assets/graph1.png" alt="graph" className="" />
      </div>
      <div className="col-span-1">
        <h1 className="font-bold text-2xl">$0.20 eth</h1>
        <div className="">
          <button
            className=" bg-green-500 px-6 py-1 text-white text-lg font-semibold w-full"
            onClick={() => setIsModalOpen(true)}
          >
            Buy
          </button>
          <button className="mt-4 bg-blue-500 px-6 py-1 text-white text-lg font-semibold w-full">Sale</button>
        </div>
      </div>
    </div>
  );
}

export default Graph;
