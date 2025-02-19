import { apiFetch } from "./api-fetch";
import { IResponse, ISeminar } from "./seminar-service-types";

export async function getSeminars(): Promise<ISeminar[]> {
    return apiFetch<ISeminar[]>('/seminars');
}

export async function deleteSeminar(id: number): Promise<IResponse> {
    return apiFetch<IResponse>(`/seminars/${id}`, {
        method: 'DELETE',
    });
}

export async function updateSeminar(id: number, data: Partial<ISeminar>): Promise<IResponse> {
    return apiFetch<IResponse>(`/seminars/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    });
}

export async function addSeminar(data: Omit<ISeminar, 'id'>): Promise<IResponse> {

    return apiFetch<IResponse>(`/seminars`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    });
}