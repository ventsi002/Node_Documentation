import { Router } from "express"
const route = Router();

route.get("/", (req, res) => {
    res.send(`Hello there, ${req.session.username}`);
});

export default route