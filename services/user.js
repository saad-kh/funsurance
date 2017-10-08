const get = async () => {
  const res = await fetch('http://localhost:3001/user');
  return res.json();
}

const set = async (payload) => {
  const res = await fetch(
    'http://localhost:3001/user',
    {
      method: "PUT",
      body: payload
    }
  );
  return res.json();
}

export default get;
export {
  get,
  set
}
