import { Router, json } from "express";
const router = Router();
import bcrypt from "bcrypt"
import db from "../databases/connection.js"

router.get("/auth/signup", async (req, res) => {
    const users = await db.all("SELECT * FROM users");
    console.log(users);
    res.send({});
})

router.post("/auth/signup", async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).send("Form not completed");
    }
    const password = await bcrypt.hash(req.body.password, 12);
    const { lastID } = await db.run("INSERT INTO users(username, password, email) VALUES (?, ?, ?);", [req.body.username, password, req.body.email]);
    res.send({
        id: lastID,
        name: req.body.username,
        email: req.body.email
    });
});

router.post("/auth/login", async (req, res) => {
    const userFound = await db.get("SELECT * FROM users WHERE username = ?;", [req.body.username]);
    if (userFound) {
        const passwordMatch = await bcrypt.compare(req.body.password, userFound.password);
        if (passwordMatch) {
            req.session.username = userFound.username;
            res.send(`Welcome back ${req.session.username}`);
        }
        else {
            res.send("Wrong password");
        }
    }
    else {
        res.send("User not found");
    }
});

router.get("/auth/logout", (req, res) => {
    req.session.destroy(() => res.send("Goodbye"));
})

export default router;