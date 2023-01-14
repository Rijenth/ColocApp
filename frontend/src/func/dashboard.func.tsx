import { ExpensePayload } from "../interfaces/data.interface";

const API_URL = "http://localhost:5500/api";

export function getColocataireId(uid: string) {
  return fetch(`${API_URL}/api/users/${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export function createExpenses(payload: {
  amount: string;
  uid: string;
  paidFor: string;
  description: string;
  colocationId: string;
}) {
  console.log(payload);
  console.log(getColocataireId(payload.uid));
  let body = {
    amount: payload.amount,
    colocataireId: getColocataireId(payload.uid).relationships.Colocataire.id,
    paidFor: payload.paidFor,
    description: payload.description,
    colocationId: payload.colocationId,
  };
  return fetch(`${API_URL}/expense`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getExpenses() {
  return fetch(`${API_URL}/expense`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateExpenses(id: string, payload: ExpensePayload) {
  return fetch(`${API_URL}/expense/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
}
