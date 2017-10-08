const response = {
  coverages:
  [
    {
      name: "Limit",
      value: "10000€"
    },
    {
      name: "Limit Aquariums/water beds",
      value: "no limit"
    },
    {
      name: "Territory",
      value: "within building"
    }
  ],
  expert: {
    name: "Christopher Simons",
    avatar: "static/christopher.png",
    distance: "7500"
  },
  issue: 'Water flood'
};

const prompt = (question) => ({
  question,
  ...response
});

module.exports = {
  prompt
};

