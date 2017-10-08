const response = {
  coverages:
  [
    {
      name: "Limit",
      value: 10000
    }
  ],
  expert: {
    name: "Christopher Simons",
    avatar: "static/christopher.png",
    distance: "7500"
  }
};

const get = () => (response);

module.exports = {
  get
};

