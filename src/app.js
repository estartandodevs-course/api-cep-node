const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("API CEP");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
