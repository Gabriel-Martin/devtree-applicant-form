module.exports = db => {
  let Applicant = db.createModel("Applicant", {
    phone: db.type.string(),
    email: db.type.string(),
    preferredcourse: db.type.string(),
    codingexperience: db.type.string(),
    lastname: db.type.string().required(),
    firstname: db.type.string().required(),
    overeighteen: db.type.boolean().required(),
    address: db.type.object().schema({
      zip: db.type.number(),
      city: db.type.string(),
      state: db.type.string(),
      street: db.type.string()
    }),
    workhistory: db.type.array().schema(
      db.type.object().schema({
        end: db.type.string(),
        zip: db.type.number(),
        city: db.type.string(),
        phone: db.type.string(),
        state: db.type.string(),
        start: db.type.string(),
        street: db.type.string(),
        company: db.type.string(),
        position: db.type.string()
      })
    ),
    education: db.type.array().schema(
      db.type.object().schema({
        end: db.type.string(),
        type: db.type.string(),
        start: db.type.string(),
        school: db.type.string()
      })
    )
  });

  return Applicant;
};
