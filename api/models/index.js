const thinky = require("thinky");

const db = thinky({
  db: "studentApplication"
});

let Applicant = require("./Applicant")(db);

module.exports = {
  Applicant: Applicant
};
