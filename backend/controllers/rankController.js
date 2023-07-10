const { scoresList } = require("../TestData.json");

const calculateRank = (req, res) => {
  const score = req.body.score;

  let theLeast = 0;
  for (let index = 0; index < scoresList.length; index++) {
    const element = scoresList[index];
    if (element < score) {
      theLeast++;
    }
  }
  const rank = (theLeast / scoresList.length) * 100 + "%";
  res.status(200).json({ rank: rank });
};

module.exports = { calculateRank };
