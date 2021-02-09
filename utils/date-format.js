const moment = require("moment");

function formatDate(theDate) {
  return moment(theDate).format("MM/DD/YYYY");
}

module.exports = formatDate;
