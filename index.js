const express = require('express');
const cardsRouter = require("./routes/card.routes");
const cors = require('cors');
const PORT = process.env.PORT || 8080
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', cardsRouter)
app.get("/", (req, res) => res.send("Работает"))
app.get("/asd", (req, res) => res.json({asd:"asd", da:12}))

app.listen(PORT, () => console.log(`Start listen on post ${PORT}`));


