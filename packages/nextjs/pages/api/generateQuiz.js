import axios from "axios";

export default async function handler(req, res) {
  console.log("__________🚀 ~ file: generateQuiz.js:5 ~ handler ~ POST:");
  if (req.method === "POST") {
    const API_KEY = process.env.CHAT_GPT_KEY;
    console.log("🚀 ~ file: generateQuiz.js:7 ~ handler ~ API_KEY:", API_KEY);
    const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

    try {
      const response = await axios.post(
        API_URL,
        {
          prompt:
            "Generate a quiz aboout React Js of 2 questions with multiple answers and also provide de correct answer. Provide everyting a json format",
          max_tokens: 20,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );
      const quizQuestion = response.data.choices[0].text;

      console.log("🚀 ~ file: generateQuiz.js:26 ~ handler ~ quizQuestions:", quizQuestion);
      return res.status(200).json({ quizQuestion });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
