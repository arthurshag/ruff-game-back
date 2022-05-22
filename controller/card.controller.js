const db = require('../db');

class CardController {
    async getCards(req, res) {
        const cards = await db.query("SELECT * FROM card");
        res.json(cards.rows);
    }

    async createCard(req, res) {
        const {name, task} = req.body;
        if (!name || !task) {
            return;
        }
        const newCard = await db.query(
            `INSERT INTO cardoffer (name, task)
             values ($1, $2)
             RETURNING *`,
            [name, task]);
        res.json(newCard.rows[0]);
    }

    async addCard(req, res) {
        const {id} = req.body;
        // const cardToAdd = await db.query(`SELECT * FROM cardoffer WHERE id = $1`, [id])
        // const newCard = await db.query(
        //     `INSERT INTO card (name, task)
        //      values ($1, $2)
        //      RETURNING *`,
        //     [name, task]);
        res.status(200);
    }


    // async createUser(req, res) {
    //     const {name, surname} = req.body;
    //     const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING  *`, [name, surname])
    //     res.json(newPerson.rows[0]);
    // }
    // async getUsers(req, res) {
    //     const users = await db.query(`SELECT * FROM person`);
    //     res.json(users.rows);
    // }
    // async getOneUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id]);
    //     res.json(user.rows[0]);
    // }
    // async updateUser(req, res) {
    //     const id = req.params.id;
    //     const {name, surname} = req.body;
    //     const user = await db.query(
    //         `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
    //         [name, surname, id]);
    //     res.json("okey");
    // }
    // async deleteUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query(
    //         `DELETE FROM person where id = $1`, [id]);
    //     res.json("okey");
    // }
}

module.exports = new CardController()
