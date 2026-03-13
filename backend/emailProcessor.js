const { fetchEmails } = require("./gmailService");
const { detectBooking } = require("./bookingDetector");
const { extractData } = require("./extractor");
const { saveBooking } = require("./database");

async function processEmails(){

    const emails = await fetchEmails();

    let results = [];

    for(let email of emails){

        const isBooking = detectBooking(email);

        if(isBooking){

            const data = extractData(email);

            await saveBooking(data);

            results.push(data);

        }

    }

    return results;
}

module.exports = { processEmails };