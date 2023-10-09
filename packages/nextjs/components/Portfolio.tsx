import React from "react";
const portfolioData = [
  {
    name: "Corporate Office Web3 Services ",
    img:
      "https://images.unsplash.com/photo-1651130532935-2ef1634501fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Coingecko Frontend Project ",
    img:
      "https://images.unsplash.com/photo-1651130537842-eec4720ba02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];
function Portfolio(props) {
  return (
    <div className="pt-4">
      <h1 className="font-bold text-lg ">Portfolio</h1>
      {portfolioData?.length > 0 ? (
        portfolioData.map((project, idx) => (
          <div className="f" key={idx}>
            <img src={project?.img} alt="" className="w-32 h-auto" />
            <p className="font-bold text-xs ">{project?.name}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No Projects Available</p>
      )}
    </div>
  );
}

export default Portfolio;
