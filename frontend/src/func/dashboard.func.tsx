import {ExpensePayload} from "../interfaces/data.interface";

const API_URL = 'http://localhost:8080/api/';

// Auth Header for fetch
const authHeader = () => {
    const user = JSON.parse(sessionStorage.getItem('coloc-user') || '{}');
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export function createExpenses(payload: { createdAt: string; amount: string; desccription: string; paidFord: string; colocataireId: string; updateAt: string; colocationId: string }) {
    return fetch(`${API_URL}/expense/create`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {...authHeader(), 'Content-Type': 'application/json'}
    });
}

export function getExpenses() {
    return fetch(`${API_URL}/expense`, {headers: authHeader()});
}

export function getExpensesById(id: string) {
    return fetch(`${API_URL}/expense/${id}`, {headers: authHeader()});
}

export function updateExpenses(id: string, payload: ExpensePayload) {
    return fetch(`${API_URL}/expense/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {...authHeader(), 'Content-Type': 'application/json'}
    });
}
