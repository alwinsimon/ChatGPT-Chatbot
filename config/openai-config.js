import OpenAI from 'openai';

process.loadEnvFile();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;