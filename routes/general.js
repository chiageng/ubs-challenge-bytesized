import express from "express";
import { getNextProbableWords, test } from "../contollers/general";

const router = express.Router();

router.get("/test", test)
router.post("/lazy-developer", getNextProbableWords)


module.exports = router;