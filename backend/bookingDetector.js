function detectBooking(email){

    const keywords = [
        "booking",
        "flight",
        "hotel",
        "ticket",
        "pnr"
    ];

    const text = email.subject + " " + email.body;

    return keywords.some(word =>
        text.toLowerCase().includes(word)
    );

}

module.exports = { detectBooking };