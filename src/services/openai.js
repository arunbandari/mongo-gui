const OpenAI = require('openai');

const openai = new OpenAI();

const getQuery = async (meta, prompt) => {
  const systemPrompt = `
  Given a MongoDB collection with the following fields and their respective data types:

  ${JSON.stringify(meta)}

  Please produce a query string that would correctly represent a 'find' operation on this collection. The string should be valid JSON format (i.e., be able to be parsed using 'JSON.parse'). Use placeholders for the actual values of the fields.

  The output format should look like:

  "{\"field\": \"value\"}"

  Keep in mind the special MongoDB syntax for fields like "date" and "objectId". For example, if you're representing a date, it might look something like this: "{\"createdAt\": {\"$date\": \"date-value\"}}".

  The output should not have any explanation

  `;

  const completion = await openai.chat.completions.create({
    messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
    ],
    model: 'gpt-4',
    temperature: 0
  });

  return JSON.parse(completion.choices[0].message.content);
}

module.exports = {
    getQuery
}