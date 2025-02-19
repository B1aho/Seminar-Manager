/**
 * api-fetch - обертка над fetch для обработки HTTP запросов к seminar-server
 * 
 * Решил не тянуть axios, т.к. для такого миниатюрного проекта куда проще и эффективнее написать свою
 * обертку над Fetch API
 */

// Базовый url для запросов к seminar-server
const BASE_URL = "http://localhost:3000";

/**
 * Функция обертка для выполнения HTTP-запросов с использованием fetch
 * @param endpoint - конечная часть URL
 * @param options - настройки запроса 
 * @returns - данные проебразованные из json с типом T (используется дженерик для указания типа ответа)
 * @throws - выбрасывает ошибку при проблемах с получением ответа от сервера или невалидном json при успешном ответе
 */
export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit,
): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;

    const defaultHeaders = {
        "Content-Type": "application/json",
    };

    // Делаем запрос через fetch
    const response = await fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...(options?.headers || {})
        },
    })

    // Обрабатываем ошибку
    if (!response.ok) {
        let errorMessage = `Error ${response.status}: ${response.statusText}`;
        try {
            const errorData = await response.json();
            errorMessage += ` - ${errorData.message || JSON.stringify(errorData)}`;
        } catch {
            // если сервер вернул не корректный json ошибки, то читаем её как текст
            const errorText = await response.text();
            errorMessage += ` - ${errorText}`;
        }
        throw new Error(errorMessage);
    }

    // Возвращаем json с сервера и дополнительно проверяем, что сервер действительно вернул валидный json
    try {
        return await response.json();
    } catch {
        const text = await response.text();
        throw new Error(`Failed to parse JSON. Response text: ${text}`);
    }
}

