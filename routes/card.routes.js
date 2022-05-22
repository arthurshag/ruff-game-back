const Router = require('express');
const router = new Router();
const cardController = require("../controller/card.controller");
const pool = require('./../db')
router.post("/card", cardController.createCard);
// router.get("/card/:id", cardController.getOneUser);
router.get("/cards", cardController.getCards);
router.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        res.render('pages/db', results );
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})
// router.delete("/user/:id", cardController.deleteUser);
// router.put("/user/:id", cardController.updateUser);

module.exports = router;
