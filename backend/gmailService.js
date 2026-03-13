async function fetchEmails(){

return [

{
sender:"makemytrip.com",
subject:"Flight Booking Confirmed",
body:"Passenger: Diya Sangar PNR: AB123 Flight: AI202 Date: 10 May"
},

{
sender:"booking.com",
subject:"Hotel Reservation",
body:"Guest: Diya Sangar Booking ID: HTL567 Check-in: 15 May"
},

{
sender:"indigo.com",
subject:"Flight Ticket Confirmation",
body:"Passenger: Rahul Sharma PNR: XY456 Flight: 6E203 Date: 12 May"
},

{
sender:"airindia.com",
subject:"Flight Booking",
body:"Passenger: Neha Gupta PNR: AI789 Flight: AI305 Date: 20 May"
},

{
sender:"oyo.com",
subject:"Hotel Booking Confirmation",
body:"Guest: Amit Verma Booking ID: HTL890 Check-in: 18 May"
},

{
sender:"makemytrip.com",
subject:"Flight Booking Confirmed",
body:"Passenger: Priya Singh PNR: PN234 Flight: AI505 Date: 22 May"
}

];

}

module.exports={fetchEmails};