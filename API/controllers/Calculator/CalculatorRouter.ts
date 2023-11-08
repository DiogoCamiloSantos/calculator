import { CalcSync, GetResultById } from "./CalculatorController";

const express = require('express');
const router = express.Router();

router.post('/', CalcSync);
router.post('/sync', CalcSync);
router.get('/get-result/:id', GetResultById);

module.exports = router;