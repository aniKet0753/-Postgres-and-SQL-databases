"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pg_1 = require("pg");
const app = express();
app.use(express.json()); // for request body parsing
app.get("/", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        //sql query 
        const insertquery = `INSERT INTO users (email,password) VALUES ('${email}','${password}','${username}')`;
        const response = await pg_1.pgClient.query(insertquery, [email, password]);
    }
    catch (err) {
        console.error(err);
    }
});
const port = 3000;
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map