const {
    loadAddressByZipCode,
} = require("../repositories/postgres/load-address-by-zipcode-repository");

async function searchAddressByZipCode(zipcode) {
    try {
        const result = await loadAddressByZipCode(zipcode);

        return result;
    } catch (error) {
        throw new Error("CEP não encontrado");
    }
}

module.exports = { searchAddressByZipCode };
