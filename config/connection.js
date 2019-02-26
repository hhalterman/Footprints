var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 8030,
        host: "localhost",
        user: "root",
        password: "#Mew4ever",
        database: "footprints",
        dialect: 'mysql'
    });
};

connection.connect(function(err){
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    };
    console.log("connected as id: " + connection.threadID);
});

module.exports = connection;