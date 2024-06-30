import { UseQueryResult, useQuery } from 'react-query';
import queryKeys from './queryKeys';
import { request } from '@homework-task/utils/axios';
import { ListItem } from '@homework-task/types/list';

const { GET_LIST } = queryKeys;

async function fetchListData(): Promise<ListItem[]> {
    const response = await request<unknown, ListItem[]>({
        url: '/users',
        method: 'get',
    });
    return response.data;
}

export function useGetList(
    onSuccess?: (data: ListItem[]) => void,
    onError?: (error: unknown) => void
): UseQueryResult<ListItem[], unknown> {
    return useQuery([GET_LIST], fetchListData, {
        onSuccess,
        onError,
        select: (data) =>
            data?.map((item) => ({
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
                phone: item.phone,
            })),
    });
}
