import React, { useState } from "react";
import CardJob from "~~/components/CardJob";
import Portfolio from "~~/components/Portfolio";
import Skills from "~~/components/Skills";
import Graph from "~~/components/Graph";
import Modal from "~~/components/Modal";
import { MdVerified } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbWorldCheck } from "react-icons/tb";
import { FaCrown, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

function Profile() {
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const completed_works = [
    {
      title: "JavaScript Developer",
      start_end_day: "Aug 5, 2023 - Sep 28, 2023",
      review:
        "Outstanding work by Jessica. She exceeded our expectations and delivered high-quality code on time. I highly recommend her for any JavaScript project.",
    },
    {
      title: "Graphic Designer",
      start_end_day: "Mar 10, 2023 - Apr 30, 2023",
      review:
        "I had a fantastic experience working with David. His creativity and attention to detail resulted in stunning designs for our project. I couldn't be happier with the results.",
    },
    {
      title: "Data Scientist",
      start_end_day: "Jul 1, 2023 - Aug 25, 2023",
      review:
        "Katherine's data analysis skills are impressive. She provided valuable insights from our data and helped us make data-driven decisions. I'm grateful for her expertise.",
    },
  ];
  const dataProfile = {
    title: "Fullstack Developer",
    hour_rate: "20",
    description:
      "With over 40+ team of professionals who are highly skilled and experienced in their field, 3S IT Services guarantees 100% customer satisfaction to all their clients. We believe in quality and on-time delivery. We help businesses and individuals in adapting as well as adopting digital transformation. Our aim is to change people’s lives and improve businesses with our progressive and innovative technology solutions.",
  };


  const createProfile = async () => {
    try {
      const creationDate = await getDay();
      const obj = {
        userhandle,
        time,
        userId
      }

      const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_APIKEY });

      const metadata = await client.store({
        name: "DevToken",
        description: JSON.stringify(obj),
        image: new File([image], "imageName", { type: "image/*" }),
      });

      const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
        contractName: "DevToken",
        functionName: "createProfile",
        args: [createProfile],
        blockConfirmations: 1,
        onBlockConfirmation: txnReceipt => {
          console.log("Transaction blockHash", txnReceipt.blockHash);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] max-w-[900px] mx-auto mt-8 ">
      <section id="header">
        <div className="flex">
          {/* Profile */}
          <div className="py-4 px-8 w-[40%]">
            <div className="flex text-center  justify-center">
              <img
                src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
                alt="user"
                className="w-20 h-20 rounded-full"
              />

              <div className="pl-4">
                <div className="flex justify-center items-center">
                  <p className="pr-2 font-bold text-xl">Joe Smith</p>
                  <MdVerified size="1.5em" fill="blue" />
                </div>

                <div className="flex items-center">
                  <ImLocation2 size="1em" fill="gray" />
                  <p className="my-0 text-custom-base3">Delhi, india</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <div className="rounded-full border border-blue-600 p-1">
                <FaCrown size="1.5em" fill="blue" />
              </div>
              <p className="pl-3 font-semibold">84 % Job Success</p>
            </div>
          </div>

          {/* Graph */}
          <div className="max-w-[100%] max-h-[100%] overflow-hidden flex-tem-1">
            <Graph isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      </section>
      {/* main */}
      <div className="flex bg-white">
        {/* SIDEBAR */}
        <div className="w-64 bg-gray-100 p-4 hidden md:block">
          <ul>
            <li className="mb-4">
              <a href="#profile" className="block  hover:text-indigo-500 ">
                View Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="#history" className="block  hover:text-indigo-500 ">
                Work History
              </a>
            </li>
            <li className="mb-4">
              <a href="#portfolio" className="block  hover:text-indigo-500 ">
                Portfolio
              </a>
            </li>
            <li className="mb-4">
              <a href="#skills" className="block  hover:text-indigo-500 ">
                Skills
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block  hover:text-indigo-500 ">
                Interests
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block  hover:text-indigo-500 ">
                Reviews
              </a>
            </li>
          </ul>

          {/* overview */}
          <div className=" pt-5">
            <p className="  font-bold mb-1">Hours of work</p>
            <div className="flex justify-between px-4">
              <div className="">
                <p className="font-semibold  m-0"> 5</p>
                <p className="font-semibold  text-xs m-0">Total Jobs</p>
              </div>
              <div className="">
                <p className="font-semibold  m-0">20</p>
                <p className="font-semibold  text-xs m-0">Total Hours</p>
              </div>
            </div>
          </div>
          {/* hours */}
          <div className=" pt-8">
            <p className=" font-bold mb-1">Hours per week</p>
            <p className="font-semibold  text-xs m-0">As needed - Open to offers</p>
          </div>

          {/* HANDLES  */}
          <div className="pt-8">
            <p className=" font-bold mb-1">Social Profiles</p>
            <div className="flex space-x-4 pb-2">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <TbWorldCheck className="text-green-600 hover:text-green-200" />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-400 hover:text-gray-300" />
              </a>
              <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-500" />
              </a>
              <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-indigo-500 hover:text-indigo-700" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4">
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
          {/* PROFILE          */}
          <div className="p-2">
            <section className="mt-0 pb-2" id="profile">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg"> {dataProfile?.title} </h1>
                <p className="text-md ">{`$${dataProfile?.hour_rate}/hr `}</p>
              </div>
              <p className="mt-0 text-gray-700 tracking-wide block text-justify">{dataProfile?.description}</p>
            </section>
            <section className="py-2" id="history">
              <h1 className="font-bold text-lg">Work History</h1>
              <div className="px-1">
                <p className="text-sm m-0"> Completed jobs (3)</p>
                {completed_works.length > 0 ? (
                  completed_works.map((job, idx) => <CardJob key={idx} job={job} />)
                ) : (
                  <p>No jobs completed</p>
                )}
              </div>
            </section>
            <section className="d" id="portfolio">
              <Portfolio />
            </section>
            <section className="d" id="skills">
              <Skills />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
