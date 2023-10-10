import React from "react";
import { useRouter } from "next/router";

function Landing() {
  const router = useRouter();
  return (
    <div className="px-20 py-20 bg-custom-white flex justify-center items-center">
      <div className="">
        <h1 className="py-20  text-center font-bold text-3xl">Who are you?</h1>
        <div className="flex">
          <button
            onClick={() => router.push("/freelancers")}
            className="bg-custom-primary text-white mr-2 px-6 py-5 w-[200px] rounded-full"
          >
            Manager/company
          </button>
          <button
            onClick={() => router.push("/verification")}
            className="bg-green-500 text-white px-6 py-5 w-[200px] rounded-full"
          >
            A Freelancer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
