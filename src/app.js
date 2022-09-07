require("dotenv").config();
const express = require("express");

const {
    searchAddressByZipCode,
} = require("./services/search-address-by-zipcode-service");

const app = express();

const PORT = process.env.APP_PORT || 3000;

app.get("/", async (request, response) => {
    const result = await searchAddressByZipCode();
    response.json(result);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
