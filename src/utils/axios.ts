import axios, { AxiosError, AxiosResponse } from 'axios';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export function request<T, D = unknown>(options: {
    url: string;
    method?: 'get' | 'post' | 'put' | 'delete';
    data?: T;
}): Promise<AxiosResponse<D>> {
    client.defaults.headers.common.Authorization = 'Bearer token';
    const onSuccess = (response: AxiosResponse<D>) => response;
    const onError = (error: AxiosError<unknown>) => {
        console.error('Request failed:', error);
        throw error;
    };

    return client(options).then(onSuccess).catch(onError);
}
