const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
// If request is urlencoded, then express automatically parses it and understand it
app.use(express.json());
//If we are sending JSON data, then we write this line

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET response. Welcome ${user}!!!`)
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard POST response. Welcome ${user}!!!`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})