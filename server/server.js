const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./database/db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(express.json());

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.post("/api/message", async (req, res) => {
    const { email, message } = req.body;
    try {
        const { rows } = await db.newMessage(email, message);
        console.log("rows: ", rows);
        res.json({ succesStatus: true });
    } catch {
        res.json({ succesStatus: false });
    }
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
