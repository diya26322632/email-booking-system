const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("vault.db");

db.run(`CREATE TABLE IF NOT EXISTS bookings(

id INTEGER PRIMARY KEY AUTOINCREMENT,

passenger TEXT,

pnr TEXT,

bookingId TEXT

)`);

function saveBooking(data){

return new Promise((resolve,reject)=>{

db.run(

`INSERT INTO bookings(passenger,pnr,bookingId)

VALUES(?,?,?)`,

[data.passenger,data.pnr,data.bookingId],

function(err){

if(err) reject(err);

else resolve();

}

);

});

}

module.exports = { saveBooking }