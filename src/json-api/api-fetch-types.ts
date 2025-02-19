export interface IResponse {
    seminars: ISeminar[];
}

export interface ISeminar {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string; // сузить к временному формату
    photo: string; // сузить как url 
}