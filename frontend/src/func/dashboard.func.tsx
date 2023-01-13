import axios from 'axios';

import { ExpensePayload } from '../interfaces/data.interface';

const API_URL = 'http://localhost:8080/api/';

// Auth Header for axios
const authHeader = () => {
    const user = JSON.parse(sessionStorage.getItem('coloc-user') || '{}');
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export function createExpenses(payload: { createdAt: string; amount: string; desccription: string; paidFord: string; colocataireId: string; updateAt: string; colocationId: string }) {
  return axios.post(`${API_URL}/expense/create`, payload, { headers: authHeader() });
}

export function getExpenses() {
  return axios.get(`${API_URL}/expense`, { headers: authHeader() });
}

export function getExpensesById(id: string) {
    return axios.get(`${API_URL}/expense/${id}`, { headers: authHeader() });
}

export function updateExpenses(id: string, payload: ExpensePayload) {
    return axios.put(`${API_URL}/expense/${id}`, payload, { headers: authHeader() });
}

