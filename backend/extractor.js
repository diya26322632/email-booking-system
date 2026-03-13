function extractData(email) {
    const body = email.body;

    const pnrMatch = body.match(/PNR:\s*([A-Z0-9]+)/i);
    const passengerMatch = body.match(/Passenger:\s*([A-Za-z ]+?)\s*PNR:/i);
    const bookingIdMatch = body.match(/Booking ID:\s*([A-Z0-9]+)/i);

    return {
        passenger: passengerMatch ? passengerMatch[1].trim() : null,
        pnr: pnrMatch ? pnrMatch[1].trim() : null,
        bookingId: bookingIdMatch ? bookingIdMatch[1].trim() : null
    };
}

module.exports = { extractData };