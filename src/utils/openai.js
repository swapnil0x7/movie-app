import OpenAI from 'openai';

const openAI = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_KEY,
	dangerouslyAllowBrowser: true,
});

export default openAI;
