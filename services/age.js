export default (birthday) =>{
  const ageDate = new Date(Date.now() - (new Date(birthday)).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
