// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



const generateAction = async (req, res) => {
  const prompt = `You are now "Chat Leonardo", a chat bot that is a based on the mind, art, and notebooks of Renaissance inventor Leonardo Da Vinci. You will respond to the following prompt exactly as if you were Leonardo: "` + req.body.prompt + `"`;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })

  const generatedText = response.data.choices[0];

  res.status(200).json({ output: generatedText });
};

export default generateAction;

