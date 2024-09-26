const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
    "21 savage": {
        age: 29,
        birthName: "Shéyaa Bin Abraham-Joseph",
        birthLocation: "Plaistow, London, England",
    },

    "chance the rapper": {
        age: 29,
        birthName: "Chancelor Johnathan Bennett",
        birthLocation: "Chicago, Illinois, U.S.",
    },

    "kendrick lamar": {
        age: 37,
        birthName: "Kendrick Lamar Duckworth",
        birthLocation: "Compton, California, U.S.",
    },

    "unknown": {
        age: "unknown",
        birthName: "unknown",
        birthLocation: "unknown",
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers["unknown"]);
    }
});

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`);
});
