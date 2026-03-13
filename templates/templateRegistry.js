const templates = {

  makemytrip: {
    type: "flight",
    fields: ["Passenger", "PNR"]
  },

  booking: {
    type: "hotel",
    fields: ["Guest", "Booking ID"]
  },

  indigo: {
    type: "flight",
    fields: ["Passenger", "PNR"]
  },

  airindia: {
    type: "flight",
    fields: ["Passenger", "PNR"]
  },

  oyo: {
    type: "hotel",
    fields: ["Guest", "Booking ID"]
  }

};

function getTemplate(sender){

  const key = Object.keys(templates).find(t => sender.includes(t));

  return templates[key] || null;

}

module.exports = { getTemplate };