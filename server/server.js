// dependencies below
const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./database/db");

// dependencies above
// middleware below
app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(express.json());

if (process.env.NODE_ENV == "production") {
    app.use((req, res, next) => {
        if (req.headers["x-forwarded-proto"].startsWith("https")) {
            return next();
        }
        res.redirect(`https://${req.hostname}${req.url}`);
    });
}

// middleware above
// requests below

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

// requests above
// server PORT below

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
