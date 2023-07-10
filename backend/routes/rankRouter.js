const express = require("express");
const { calculateRank } = require("../controllers/rankController");
const router = express.Router();

router.route("/").post(calculateRank);

module.exports = router;
