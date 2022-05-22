const Router = require('express');
const router = new Router();
const cardController = require("../controller/card.controller");

router.post("/card", cardController.createCard);
// router.get("/card/:id", cardController.getOneUser);
router.get("/cards", cardController.getCards);
// router.delete("/user/:id", cardController.deleteUser);
// router.put("/user/:id", cardController.updateUser);

module.exports = router;
