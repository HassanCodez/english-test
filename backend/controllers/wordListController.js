const { wordList } = require("../TestData.json");

//@desc get 10 random words from wordList
//@route GET /api/wordList
const getWordList = (req, res) => {
  // const randomWords = [];

  // // categorizing all words with their pos
  // const adverbs = wordList.filter((word) => word.pos === "adverb");
  // const verbs = wordList.filter((word) => word.pos === "verb");
  // const adjectives = wordList.filter((word) => word.pos === "adjective");
  // const nouns = wordList.filter((word) => word.pos === "noun");

  // while (randomWords.length < 10) {
  //   // getting a random word from each category to make sure there is a word from each category
  //   const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  //   const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  //   const randomAdjective =
  //     adjectives[Math.floor(Math.random() * adjectives.length)];
  //   const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  //   randomWords.push(randomAdverb, randomVerb, randomAdjective, randomNoun);
  // }
  // //   shuffle the words to avoid having pattern in the test
  // const finalWordSet = randomWords.slice(0, 10).sort(() => Math.random() - 0.5);
  const words = [];
  let hasAdverb = false;
  let hasAdjective = false;
  let hasNoun = false;
  let hasVerb = false;

  while (
    words.length < 10 ||
    !hasAdverb ||
    !hasAdjective ||
    !hasNoun ||
    !hasVerb
  ) {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    if (!words.includes(randomWord)) {
      words.push(randomWord);

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

  res.status(200).json({ words: words });
};

module.exports = { getWordList };
