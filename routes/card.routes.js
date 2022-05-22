const Router = require('express');
const router = new Router();
const cardController = require("../controller/card.controller");
const pool = require('./../db')
router.post("/card", cardController.createCard);
router.get("/cards", cardController.getCards);

module.exports = router;
