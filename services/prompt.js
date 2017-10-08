const get = async () => {
  const res = await fetch('http://localhost:3001/prompt');
  return res.json();
}


export default get;
export {
  get
}
