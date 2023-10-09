import React from "react";
import Link from "next/link";

const quizzes = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
    title: "The basics of ReactJS",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Introduction to JavaScript",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "HTML and CSS Fundamentals",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Node.js for Beginners",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Python Crash Course",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Web Development with Vue.js",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "The Complete C# Developer",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Mastering Data Science",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Android App Development",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Machine Learning Basics",
  },
];

const questionsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
    title: "The basics of ReactJS",
    description: "Practice the basics of ReactJS and master it",
    author: "Joe Doe",
    questions: [
      {
        id: 1,
        question: "What is Reactjs?",
        options: {
          a: "It's a dummy data",
          b: "It's a brand new object",
          c: "It's a famous coffee",
          d: "It's a frontend framework for Javascript",
        },
        correct_answer: "d",
      },
      {
        id: 2,
        question: "How do you use Reactjs?",
        options: {
          a: "You use React to create frontend interfaces",
          b: "It's a brand new object",
          c: "It's a famous coffee",
          d: "It's a frontend framework for Javascript",
        },
        correct_answer: "a",
      },
    ],
    subject: "Technology",
    author_profession: "Student",
    grade: "University",
    language: "English",
  },
];

function intelliquiz(props) {
  return (
    <div>
      <div className="pt-2">
        {/* header filter */}
        <div className="bg-[#6918c2] h-[80px] p-4 flex flex-wrap gap-4">
          <h3 className="text-white font-bold text-2xl  ">Explore content</h3>
          <div className="flex gap-4">
            <select name="subject" id="subject" className="h-[35px] p-[8px] rounded">
              <option value="Technology">Technology</option>
              <option value="Medical">Medical</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
              <option value="Science">Science</option>
            </select>

            <select name="contentBy" id="contentBy" className="h-[35px] p-[8px] rounded">
              <option value="Professors">Professors</option>
              <option value="Students">Students</option>
              <option value="Anyone">Anyone</option>
            </select>

            <select name="grade" id="grade" className="h-[35px] p-[8px] rounded">
              <option value="All">All</option>
              <option value="Elementary">Elementary</option>
              <option value="Secondary">Secondary</option>
              <option value="University">University</option>
            </select>

            <select name="language" id="language" className="h-[35px] p-[8px] rounded">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
        </div>
        {/* cardList */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-8 px-4">
          {quizzes.length > 0
            ? quizzes.map(quizz => (
                <div key={quizz.id} className="border border-gray-300 pb-8 rounded-lg">
                  <img src={quizz.image} alt="image rep" className="w-full h-[200px] object-cover rounded-t-lg " />
                  <h3 className="px-4 pt-2 font-bold text-xl truncate">{quizz.title}</h3>
                  <Link href={`/preview-quiz/${quizz.id}`} className="px-4 pt-0 text-blue-600 font-bold ">
                    See collection
                  </Link>
                </div>
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
}

export default intelliquiz;
