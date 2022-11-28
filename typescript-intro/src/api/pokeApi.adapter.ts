import axios from 'axios';

export interface HttpAdapter{
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }

}

export class PokeApiAdapter  implements HttpAdapter{
    
    private readonly axios = axios; // pivate porque no quiero que nadie lo use fuera de esta clase

    async get<T>(url: string): Promise<T> { // <T> es un tipo generico, es decir, que puede ser cualquier tipo de dato
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, data: any) {}

    async put(url: string, data: any) {}

    async delete(url: string) {}
}