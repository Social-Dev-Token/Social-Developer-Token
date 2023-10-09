import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSolidUserCircle } from "react-icons/bi";
import { quizData } from "../../components/data";

function Preview() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setData(quizData);
  }, []);

  const iconStyle = {
    fontSize: "45px",
    color: "blue",
  };
  return (
    <div className="mt-12 grid grid-cols-7 gap-4">
      {/* Details */}
      <div className="col-span-2 border border-r-3 ">
        <img src="/assets/quiz-img.png" alt="preview" className="" />
        <div className="px-4">
          <h2 className="pt-6 font-bold text-xl "> {data?.title}</h2>
          <p className="text-justify ">{data?.description}</p>
          <div className="flex items-center">
            <div className="pr-2">
              <RiVerifiedBadgeFill fill="green" />
            </div>
            <p className="flex-1">A public quiz</p>
          </div>

          <div className="flex ">
            <div className="pr-1">
              <BiSolidUserCircle style={iconStyle} />
            </div>
            <div className="flex-1">
              <p className="my-[0px] font-bold">by {`${data?.author?.slice(0, 4)}...${data?.author?.slice(32)}`} </p>
              <p className="mt-[0px] text-gray-500">Updated 4 months ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="max-w-[100%] mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
          <div className="items-center">
            <img src="/assets/header-holder.png" alt="Card Image" className="py-6 w-[200px] h-auto" />
          </div>
          <div className="py-6 pl-6">
            <h3 className="text-xl font-semibold text-gray-800">Quiz Preview</h3>
            <p className="mt-2 text-gray-600">Take this quiz and discover millions more you’ll love!</p>
            <div className="mt-4">
              <Link href={`/quiz/${id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                  Start Quiz Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between"></div>
        <h3 className="pt-6 font-bold text-lg text-gray-500">Total Number of Questions ({data?.questions?.length})</h3>
        {data?.questions?.length > 0 ? (
          data.questions.map((ele, idx) => (
            <div
              className="max-w-[100%] mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
              key={idx}
            >
              <div className="flex">
                <div className="p-6 w-10/12">
                  <h3 className="text-xl font-semibold text-gray-800">Question {idx + 1}</h3>
                  <p className="mt-2 text-gray-600">{`${ele?.question}`}</p>
                </div>
                <img
                  src="/assets/question-holder.png"
                  alt="Card Image"
                  className="py-6 px-1 w-2/12 h-[150px] border-r border-gray-300 "
                />
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Preview;
