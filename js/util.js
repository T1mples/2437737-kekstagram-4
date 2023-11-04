const generateArrayOfUniqUrl = () => Array.from ({ length: 25}, (_, index) => index+1);
const arrayOfUniqUrl = generateArrayOfUniqUrl();

export {arrayOfUniqUrl};

const getRandomInt = (min,max) =>
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {getRandomInt};
