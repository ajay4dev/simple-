const express = require("express");

const app = express();

app.get("/get", (req, res) => {
    console.log("GET /get endpoint was hit");
    res.status(201).send({
        message: "API is working on AWS"
    });
});


app.listen(3000, () => {
    console.log(`server are ready 3000`);
})