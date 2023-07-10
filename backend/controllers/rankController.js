const { scoresList } = require("../TestData.json");
const calculateRank = (req, res) => {
  // Get the score from the request body
  const score = req.body.score;
  // Initialize a variable to store the count of scores less than the given score
  let theLeast = 0;
  // Iterate through the scoresList array
  for (let index = 0; index < scoresList.length; index++) {
    const element = scoresList[index];
    // If the current score is less than the given score, increment theLeast
    if (element < score) {
      theLeast++;
    }
  }
  // Calculate the rank as a percentage
  const rank = Math.round((theLeast / scoresList.length) * 100) + "%";
  // Send the rank as a response
  res.status(200).json({ rank: rank });
};
module.exports = { calculateRank };
