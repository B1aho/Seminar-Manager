export interface IResponse {
    seminars: ISeminar[];
}

export interface ISeminar {
    id: number;
    title: string;
    description: string;
    date: string;
    time: TimeString;
    photo: URLString | string;
}

export type Keys = 'date' | 'description' | 'title' | 'time' | 'photo';

// Типизация строкового времени в формате HH:MM (24 часовой формат)
export type Hours =
    | `0${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` // 00-09
    | `1${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` // 10-19
    | `2${0 | 1 | 2 | 3}`;                        // 20-23

export type Minutes = `${0 | 1 | 2 | 3 | 4 | 5}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`; // 00-59

export type TimeString = `${Hours}:${Minutes}`;

// Приблизительная типизация строковой даты в формате DD.MM.YYYY
type Day =
    | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`             // 01-09
    | `${1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`  // 10-29
    | `3${0 | 1}`;                                        // 30-31

type Month =
    | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`     // 01-09
    | `1${0 | 1 | 2}`;                            // 10-12

type Year = `${number}${number}${number}${number}`; // 0000-9999 (упрощённо)

export type DateString = `${Day}.${Month}.${Year}`;

// Поверхностная типизация url
type URLProtocol = "http://" | "https://";
export type URLString = `${URLProtocol}${string}`;