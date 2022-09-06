const connection = require("./connection");

const QUERY = `
        SELECT 
        s.id, s.name, s.zip_code, 
        n.name neighborhood, 
        c.name city, 
        st.name state

        FROM streets s 

        INNER JOIN neighborhoods n ON n.id = s.neighborhood_id
        INNER JOIN cities c ON c.id = n.city_id
        INNER JOIN states st  ON st.id = c.state_id
        
        WHERE zip_code = $1;
`;

async function searchAddressByZipCode(zipCode) {
    const { rows } = await connection.query(QUERY, [zipCode]);
    return rows[0];
}

module.exports = { QUERY, searchAddressByZipCode };
