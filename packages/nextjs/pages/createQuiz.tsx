import React, { useEffect, useState } from "react";
import Link from "next/link";

function ModalPopup({ isOpen, closePopup }) {
  const [isSuccess, setIsSuccess] = useState(true);
  useEffect(() => {
    const delayInMilliseconds = 3000;
    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
    }, delayInMilliseconds);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-60">
      {/* OVERLAY: ONClick will close the modal*/}
      {isOpen && <div className="fixed inset-0 bg-black opacity-60" onClick={closePopup}></div>}

      {/* POPUP */}
      {isOpen && (
        <div className="bg-white p-4 rounded-xl shadow-xl z-50 text-black  py-8 px-4">
          {isSuccess && (
            <div className="justify-center text-center">
              <h2 className=" my-5 text-lg font-semibold ">Generaring your quiz...</h2>
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            </div>
          )}
          {!isSuccess && (
            <>
              <h2 className="text-lg font-semibold mb-4">Congratulations</h2>
              <p>Your Quiz was successfully created!</p>
              <Link href="/preview-quiz/1">
                <button className="mt-4 p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={closePopup}>
                  Preview Quiz
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function CreateQuiz() {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const generateQuiz = async () => {
    console.log("🚀 ~ file: createQuiz.tsx:26 ~ generateQuiz ~ generateQuiz:");

    openPopup();
    // try {
    //   const response = await fetch("/api/generateQuiz/", {
    //     method: "POST",
    //   });
    //   const data = await response.json();
    //   console.log("____data:", data);
    //   setQuestions(data.quizQuestion);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="py-24 px-10 bg-gray-700 text-white h-screen w-screen flex  justify-center">
      {/* DISPALYS POPUP */}
      {isOpen && <ModalPopup isOpen={isOpen} closePopup={closePopup} />}

      {/* FORM */}
      <div className="w-[80%]">
        <h2 className="text-2xl py-3">Feed the AI with information about your quiz</h2>
        <textarea
          name="prompt"
          id="prompt"
          placeholder="Create a quiz about the basics of
React of 20 questions"
          rows={10}
          className="text-black w-full h-auto rounded-[20px] py-8 px-6"
        />
        <button
          className={`mt-8 btn btn-xl bg-green-500   hover:bg-green-600 font-normal text-lg w-[200px]`}
          onClick={generateQuiz}
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
}
