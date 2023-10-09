import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "./data";

function Dashboard() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    setUsers(data);
  }, [users]);

  return (
    <div className="px-20 py-16 bg-custom-white flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-custom-base3 max-w-screen-3xl">
        {users?.length > 0 ? (
          users.map((user: any) => (
            <div
              className="px-4 py-4  border border-solid border-gray-300 shadow-md grid-item text-center  justify-center items-center"
              key={user.user_id}
            >
              <p className="mt-[0px] mb-[1px] font-semibold text-right font-lg">{`$${user.price}/hr`}</p>
              <div className="flex text-center  justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
                  alt="user"
                  className="w-32 h-32 rounded-full"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="font-bold text-2xl mt-3 text-custom-base4">{user.name}</h1>
              <p className="font-semibold mt-1 text-custom-base4 text-lg">Graphic Designer</p>

              <div className="flex text-center justify-center items-center">
                {/* <GiRoundStar fill="#3C8A01" size="1em" /> */}
                <span className="ml-2">
                  {" "}
                  {`$${user.rating}`}/5 ({user.jobs_completed} jobs)
                </span>
              </div>
              <div>
                <div className="flex text-center justify-center items-center mt-3">
                  {/* <FaTrophy size="1em" /> */}
                  <span className="ml-1 text-sm">{user.role} </span>
                </div>
              </div>
              <div className="flex justify-center text-center items-center gap-1">
                {user.skill_tags.map((skill, index) => (
                  <p className=" bg-custom-base1 rounded py-1 px-1 text-xs  grid text-custom-white" key={index}>
                    {skill}
                  </p>
                ))}
              </div>
              <Link href={`/profile/${user.user_id}`}>
                <button className="s bg-custom-primary rounded-md text-white py-2 px-4">See more</button>
              </Link>
            </div>
          ))
        ) : (
          <h1>No users available</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
