import { apiFetch } from "./api-fetch";
import { ISeminar } from "./seminar-service-types";

export async function getSeminars(): Promise<ISeminar[]> {
    return apiFetch<ISeminar[]>('/seminars');
}

export async function getSeminar(id: number): Promise<ISeminar[]> {
    return apiFetch<ISeminar[]>(`/seminars/${id}`);
}

export async function deleteSeminar(id: number): Promise<ISeminar> {
    return apiFetch<ISeminar>(`/seminars/${id}`, {
        method: 'DELETE',
    });
}

export async function updateSeminar(id: number, data: Partial<ISeminar>): Promise<ISeminar> {
    return apiFetch<ISeminar>(`/seminars/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    });
}

export async function postSeminar(data: Omit<ISeminar, 'id'>): Promise<ISeminar> {
    return apiFetch<ISeminar>(`/seminars`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}