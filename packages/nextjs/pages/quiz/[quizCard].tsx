import React, { useEffect, useState } from "react";
import Link from "next/link";
import { quizData } from "~~/components/data";

export default function QuizCard() {
  const [currentQuestionIdx, setCurentQuestionIdx] = useState(0);
  const [isClicked, setIsClicked] = useState<number>(-1);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [ans, setAns] = useState<Array<number>>([]); //zero is wrong and 1 is right
  const TOTAL_NUMBER_QUESTIONS = quizData?.questions?.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const score = (arr: Array<number>, c: number) => {
    return arr.filter(item => item == c).length;
  };

  const header = (title: string) => {
    return (
      <div className="px-4 flex justify-between items-center h-[70px] ">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="px-2 py-1 flex bg-blue-500 items-center  h-[30px] rounded ">
          <p className="text-white rounded  font-semibold i">Time Left</p>
          <p className="p-1 ml-3 bg-gray-700 text-white rounded text-xs font-semibold">{timeLeft}</p>
        </div>
      </div>
    );
  };

  const footer = (currentQuesiton: number, totalQuestion: number) => {
    return (
      <div className="p-4 bg-green-200  flex justify-between items-center">
        <section>
          <p>
            {currentQuesiton} of {totalQuestion} Questions
          </p>
        </section>
        <section>
          <button
            onClick={() => {
              setCurentQuestionIdx(currentQuestionIdx + 1);
              setTimeLeft(30);
              setIsClicked(-1);
            }}
            className="bg-blue-500 hover::bg-bue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md  transition duration-300 transform hover:scale-105 rounded-md"
          >
            Next Question
          </button>
        </section>
      </div>
    );
  };

  const questionBody = (question: string, options: any) => {
    return (
      <>
        <header>
          <p className="mx-5 font-bold text-md">
            {currentQuestionIdx + 1}. {question}
          </p>
        </header>
        <section>
          {options?.map((op: Record<any, string>, index: number) => (
            <p
              key={index}
              className={`cursor-pointer p-2 bg-blue-100 mx-5 text-sm font-light ${
                isClicked === index ? "text-green-500" : ""
              }`}
              onClick={() => {
                setIsClicked(index);
                const correctAnswer = quizData?.questions?.[currentQuestionIdx].correct;
                const selectedOption = Object.keys(quizData?.questions?.[currentQuestionIdx].options[index])[0];
                setAns([...ans, correctAnswer == selectedOption ? 1 : 0]);
              }}
            >
              {Object.values(op)[0]}
            </p>
          ))}
        </section>
      </>
    );
  };

  return (
    <div className="w-full min-h-screen justify-center items-center flex bg-blue-200 ">
      {currentQuestionIdx < TOTAL_NUMBER_QUESTIONS ? (
        <div className="max-w-[500px] w-[90%] bg-white border-red-500 rounded-lg overflow-hidden shadow-[0_5px_5px_rgb(192,192,192)] block">
          {header("Quiz Application")}
          {/* Progress Bar */}
          <div className="h-2 bg-gray-300 w-full"></div>
          {questionBody(
            quizData?.questions?.[currentQuestionIdx].question,
            quizData?.questions?.[currentQuestionIdx].options,
          )}
          {footer(currentQuestionIdx + 1, TOTAL_NUMBER_QUESTIONS)}
        </div>
      ) : (
        <div>
          <h1 className="text-xl">Results</h1>

          {/*  ALL ANSWERS CORRECT, MINT  */}
          {score(ans, 1) === TOTAL_NUMBER_QUESTIONS && (
            <div className="bg-white rounded-lg shadow-md px-4 py-6 border border-gray-300 text-center pb-8">
              <h2 className="py-5 text-lg font-semibold">Congratulations you answered all questions correct. </h2>
              <button className="p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg">Mint NFT</button>
            </div>
          )}

          {/*  ALL ANSWERS NOT  ANSWERED CORRECT, TRY AGAIN  */}
          {score(ans, 1) !== TOTAL_NUMBER_QUESTIONS && (
            <div className="bg-white rounded-lg shadow-md px-8 py-6 border  border-gray-300 pb-8">
              <h2 className="text-gray-500 text-lg font-bold tracking-wide mb-2">
                Number of correct answers <span className="text-blue-900"> {score(ans, 1)} </span>
                out of {TOTAL_NUMBER_QUESTIONS}{" "}
              </h2>
              <h2 className="text-gray-500 text-lg font-bold tracking-wide mb-6">
                Number of wrong answers <span className="text-blue-900"> {score(ans, 0)} </span> out of{" "}
                {TOTAL_NUMBER_QUESTIONS}{" "}
              </h2>
              <div>
                <h3 className="text-lg font-bold">Questions with wrong answers: </h3>
                <ul>
                  {ans.map((item, idx) => {
                    return (
                      <li key={idx}>
                        {item == 0 ? (
                          <div className="my-6">
                            <h4 className="font-semibold text-gray-500">{quizData.questions[idx].question}</h4>
                            <p className="mt-0 text-gray-400">
                              Correct answer:
                              {
                                quizData.questions[idx].options.find((item: Record<any, string>) =>
                                  item.hasOwnProperty(quizData.questions[idx].correct),
                                )[quizData.questions[idx].correct]
                              }
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
                </ul>

                <Link href="/preview-quiz/1">
                  <button className="px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-md">
                    Try Again
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
