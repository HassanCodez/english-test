const express = require("express");
const { getWordList } = require("../controllers/wordListController");
const router = express.Router();


router.route('/').get(getWordList)

module.exports = router;