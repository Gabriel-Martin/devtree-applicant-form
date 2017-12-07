const baseUrl = (path = "") => `http://localhost:4040/api/applicant/${path}`;

const create = data => {
  return fetch(baseUrl(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

const getById = id => {
  return fetch(baseUrl(id), {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

const update = (id, data) => {
  return fetch(baseUrl(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default { create, getById, update };
