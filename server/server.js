const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(express.json());

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.post("/api/message", (req, res) => {
    console.log("req.body: ", req.body);
    const { email, message } = req.body;
    try { 
        const { rows } = await db.newMessage(email, message)
        console.log(": ", );
        
    }
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
