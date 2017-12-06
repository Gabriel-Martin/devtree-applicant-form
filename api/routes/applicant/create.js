module.exports = {
  path: "/api/applicant",
  method: "POST",
  config: {
    handler: function(request, reply) {
      let applicant = new this.models.Applicant(request.payload);

      applicant
        .save()
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
