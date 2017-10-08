const prompt = async (question) => {
  const res = await fetch(
    'http://localhost:3001/prompt',
    {
      method: 'POST',
      body: JSON.stringify({question})
    }
  );
  return res.json();
}


export default prompt;
export {
  prompt
}
