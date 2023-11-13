const OpenAI = require('openai');

const openai = new OpenAI();

const getQuery = async (meta, prompt) => {
  const systemPrompt = `
  Return a stringified JSON query that can be used with the find method of a MongoDB collection. Below are the fields of the collection with their data types
    ${JSON.stringify(meta)}

    Return just the json
  `;
  console.log(systemPrompt)
  const completion = await openai.chat.completions.create({
    messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
    ],
    model: 'gpt-4',
    temperature: 0
  });

  console.log(typeof completion.choices[0].message.content);
  return JSON.parse(completion.choices[0].message.content);
}

module.exports = {
    getQuery
}