const express = require("express");
const cors = require("cors");

const { processEmails } = require("./emailProcessor");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"));

app.get("/", (req, res) => {
    res.send("Email Booking System Running");
});

app.get("/process", async (req, res) => {

    const result = await processEmails();

    res.json(result);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});