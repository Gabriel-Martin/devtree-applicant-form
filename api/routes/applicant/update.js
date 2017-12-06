module.exports = {
  path: "/api/applicant/{id}",
  method: ["PUT", "PATCH"],
  config: {
    handler: function(request, reply) {
      let id = request.params.id;
      let applicantUpdate = request.payload;

      this.models.Applicant.get(id)
        .update(applicantUpdate)
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
