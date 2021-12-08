const mysql = require("mysql");


const mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "P7",
    multipleStatements: true
});
mysqlConnection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql Connected on port 3306");
});




module.exports = mysqlConnection;