import { faker } from "@faker-js/faker";

const baseUrl = "https://bank-services-challenge2.herokuapp.com/";

export const createClients = (data) => {
  data.dataNasc = new Date(data.dataNasc).toISOString();
  data.cep = data.cep.replace("-", "");
  data.cpf = data.cpf.replace(".", "").replace(".", "").replace("-", "");
  data.telefone = data.telefone
    .replace("(", "")
    .replace(")", "")
    .replace(" ", "")
    .replace("-", "");
  data.codigo = faker.random.alphaNumeric(10);

  return fetch(`${baseUrl}api/v1/cliente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const getClients = () => {
  return fetch(`${baseUrl}api/v1/cliente`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const deleteClient = (id) => {
  console.log(id)
  return fetch(`${baseUrl}api/v1/cliente/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const updtadeClients = (id, data) => {
  return fetch(
    `https://bank-services-challenge2.herokuapp.com/api/v1/cliente/${id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  }
  