import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiRoundStar } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";

const data = [
  {
    id: 1,
    user_id: 1,
    price: "20",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Gina S.",
    role: "Graphic Designer",
    rating: "4.8",
    jobs_completed: "55",
    skill_tags: ["Design", "Music", "Photoshop", "Logo"],
  },
  {
    id: 2,
    user_id: 2,
    price: "25",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "David P.",
    role: "Web Developer",
    rating: "4.5",
    jobs_completed: "42",
    skill_tags: ["JavaScript"],
  },
  {
    id: 3,
    user_id: 3,
    price: "18",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Sarah M.",
    role: "Content Writer",
    rating: "4.7",
    jobs_completed: "63",
    skill_tags: ["Content Creation", "SEO Writing"],
  },
  {
    id: 4,
    user_id: 4,
    price: "22",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Alex K.",
    role: "Photographer",
    rating: "4.9",
    jobs_completed: "70",
    skill_tags: ["Portrait Photography", "Nature Photography"],
  },
  {
    id: 5,
    user_id: 5,
    price: "28",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Emily L.",
    role: "UI/UX Designer",
    rating: "4.6",
    jobs_completed: "38",
    skill_tags: ["UI Design", "User Research"],
  },
  {
    id: 6,
    user_id: 6,
    price: "23",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "John D.",
    role: "Video Editor",
    rating: "4.7",
    jobs_completed: "58",
    skill_tags: ["Video Editing", "Motion Graphics"],
  },
  {
    id: 7,
    user_id: 7,
    price: "19",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Rachel B.",
    role: "Social Media Manager",
    rating: "4.6",
    jobs_completed: "49",
    skill_tags: ["Social Media Strategy", "Content Planning"],
  },
  {
    id: 8,
    user_id: 8,
    price: "26",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Michael W.",
    role: "SEO Specialist",
    rating: "4.9",
    jobs_completed: "65",
    skill_tags: ["SEO Optimization", "Keyword Research"],
  },
  {
    id: 9,
    user_id: 9,
    price: "21",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Laura H.",
    role: "Copywriter",
    rating: "4.8",
    jobs_completed: "53",
    skill_tags: ["Copywriting", "Content Marketing"],
  },
  {
    id: 10,
    user_id: 10,
    price: "24",
    img:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    name: "Daniel R.",
    role: "App Developer",
    rating: "4.7",
    jobs_completed: "44",
    skill_tags: ["Mobile App Development", "iOS"],
  },
];
export default function dashboard() {
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ file: dashboard.tsx:129 ~ dashboard ~ users:", users);
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <div className="px-20 py-16 bg-custom-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-custom-base3">
        {users?.length > 0 ? (
          users.map(user => (
            <div
              className="px-4 py-4  border border-solid border-gray-300 shadow-md grid-item text-center  justify-center items-center"
              key={user.user_id}
            >
              <p className="mt-[0px] mb-[1px] font-semibold text-right font-lg">{`$${user.price}/hr`}</p>
              <div className="flex text-center  justify-center">
                <img
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
                  alt="user"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h1 className="font-bold text-2xl mt-3 text-custom-base4">{user.name}</h1>
              <p className="font-semibold mt-1 text-custom-base4 text-lg">Graphic Designer</p>

              <div className="flex text-center justify-center items-center">
                <GiRoundStar fill="#3C8A01" size="1em" />
                <span className="ml-2">
                  {" "}
                  {`$${user.rating}`}/5 ({user.jobs_completed} jobs)
                </span>
              </div>
              <div>
                <div className="flex text-center justify-center items-center mt-3">
                  <FaTrophy size="1em" />
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

        {/* ProfileCard */}
        {/* <div className="border border-gray-400">
          <p className="e">$20/hr</p>
          <img
            src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            alt="user"
            className="w-[70px] h-[70px] rounded-full"
          />
          <h2>Gina S.</h2>
          <p className="text">Graphic Designer</p>
          <GiRoundStar />
          4.8/5 (55 jobs)
          <div className="flex">
            <FaTrophy />
            <p className="text">Graphic Designer</p>
          </div>
          <div className="flex">
            <p className="e">Layout Design</p>
            <p className="e">Logo Design</p>
          </div>
          <button className="s">See more</button>
        </div> */}
      </div>
    </div>
  );
}
