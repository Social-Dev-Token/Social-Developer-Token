import React from "react";

function CardJob({ job }) {
  return (
    <div className="pt-4 border-b border-gray-800">
      <h2 className="font-semibold">{job?.title}</h2>
      <p className="text-sm text-gray-400 m-0">{job?.start_end_day}</p>
      <p className="mt-1 text-gray-700 tracking-wide  text-justify">{job?.review}</p>
    </div>
  );
}

export default CardJob;
