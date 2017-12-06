module.exports = {
  path: "/api/applicant/{id}",
  method: "GET",
  config: {
    handler: function(request, reply) {
      let id = request.params.id;

      this.models.Applicant.get(id)
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
