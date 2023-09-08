const BASE_URL = "http://localhost:8080";

export function login(credentials) {
  //localhost:8080/login (method:post , username password ) <----> token "{ 'token':'deneme'  }""
  //axios
  //fetch +++
  //swr, react-query

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials), //"{'username':'burakk', 'password':'123'}",
  };

  return fetch(`${BASE_URL}/login`, options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("server error");
      }

      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export function getWorks() {
  return fetch(`${BASE_URL}/works`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Server err");
      }
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export function getWork(id) {}

export function deleteWork(id) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/works/${id}`, options)
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error("Server err");
      }
      return true;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export function updateWork(id) {}

export function addWork() {}
