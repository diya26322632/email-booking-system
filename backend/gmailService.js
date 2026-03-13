async function fetchEmails() {

    return [

        {
            sender: "makemytrip.com",
            subject: "Flight Booking Confirmed",
            body: "Passenger: Diya Sangar PNR: AB123 Flight: AI202 Date: 10 May"
        },

        {
            sender: "booking.com",
            subject: "Hotel Reservation",
            body: "Guest: Diya Sangar Booking ID: HTL567 Check-in: 15 May"
        }

    ];

}

module.exports = { fetchEmails };