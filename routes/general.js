import express from "express";
import { getNextProbableWords, greedyMonkey, test } from "../contollers/general";

const router = express.Router();

router.get("/test", test)
router.post("/lazy-developer", getNextProbableWords)
router.post("/greedymonkey", greedyMonkey)
router.post("/digital-colony", greedyMonkey)


module.exports = router;