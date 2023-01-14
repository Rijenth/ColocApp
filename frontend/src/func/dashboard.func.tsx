import { ExpensePayload } from "../interfaces/data.interface";

const API_URL = "http://localhost:5500/api";

// Auth Header for fetch
const authHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("coloc-user") || "{}");
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
};

export function createExpenses(payload: {
  amount: string;
  colocataireUid: string;
  paidFor: string;
  description: string;
  colocationId: string;
}) {
  let body = {
    amount: payload.amount,
    colocataireUid: payload.colocataireUid,
    paidFor: payload.paidFor,
    description: payload.description,
    colocationId: payload.colocationId,
  };
  return fetch(`${API_URL}/expense`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      AccessControlAllowOrigin: "*",
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
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getExpensesById(id: string) {
  return fetch(`${API_URL}/expense/${id}`, { headers: authHeader() });
}

export function updateExpenses(id: string, payload: ExpensePayload) {
  return fetch(`${API_URL}/expense/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });
}
