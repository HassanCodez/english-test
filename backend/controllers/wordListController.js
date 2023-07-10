const { wordList } = require("../TestData.json");
//@desc get 10 random words from wordList
//@route GET /api/wordList
const getWordList = (req, res) => {
  const words = [];
  let hasAdverb = false;
  let hasAdjective = false;
  let hasNoun = false;
  let hasVerb = false;
  // Loop until we have 10 words and at least one word from each category
  while (
    words.length < 10 ||
    !hasAdverb ||
    !hasAdjective ||
    !hasNoun ||
    !hasVerb
  ) {
    // Get a random word from the wordList
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    // Add the word to the words array if it hasn't been added before
    if (!words.includes(randomWord)) {
      words.push(randomWord);
      // Update the category flags if the word belongs to a category
      if (randomWord.pos === "adverb") {
        hasAdverb = true;
      } else if (randomWord.pos === "adjective") {
        hasAdjective = true;
      } else if (randomWord.pos === "noun") {
        hasNoun = true;
      } else if (randomWord.pos === "verb") {
        hasVerb = true;
      }
    }
  }
  console.log(words);
  res.status(200).json({ words: words });
};
module.exports = { getWordList };
