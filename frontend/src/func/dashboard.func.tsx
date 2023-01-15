import { decodeJwt } from "jose";
import { ExpensePayload } from "../interfaces/data.interface";

const API_URL = "http://localhost:5500/api";

export function createExpenses(payload: {
  amount: string;
  uid: string;
  paidFor: string;
  description: string;
  colocationId: string;
}) {
  fetch(`${API_URL}/users/${payload.uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
    .then((data) => {
        let resId: string;

        resId = data.relationships.Colocataire.id;

        let body = {
          amount: payload.amount,
          colocataireId: resId,
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
    });
}

export function getExpenses() {
    const colocationId = decodeJwt(sessionStorage.getItem("ColocUser")).sub.colocation;
    let res = []
    fetch(`${API_URL}/expense/colocation/${colocationId}`, {
    method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
    }
    ).then((response) => response.json())
    .then((res) => {
        let data: ExpensePayload[] = [];
        res[0].map((item: ExpensePayload) => {
            const expense: ExpensePayload = {
                id: item.id,
                amount: item.amount,
                colocataireId: item.colocataireId,
                firstName: item.firstName,
                createdAt: item.createdAt,
                paidFor: item.paidFor,
                description: item.description,
                colocationId: item.colocationId,
            };
            data.push(expense);
        });
        res = data;
    })
    .finally(() => {
        return res;
    })
    .catch((error) => {
        console.log(error);
    }
    );
}

export function updateExpenses(id: string, payload: ExpensePayload) {
  return fetch(`${API_URL}/expense/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
}
