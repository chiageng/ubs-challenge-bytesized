import express from "express";
import { getNextProbableWords, greedyMonkey, railway_builder, test } from "../contollers/general";

const router = express.Router();

router.get("/test", test)
router.post("/lazy-developer", getNextProbableWords)
router.post("/greedymonkey", greedyMonkey)
router.post("/railway-builder", railway_builder)


module.exports = router;