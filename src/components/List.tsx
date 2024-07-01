import { FC } from 'react';
import clsx from 'clsx';

import { useGetList } from '@homework-task/hooks/useGetList';
import { ListItem } from '@homework-task/types/list';

export type ListFC = FC;

export const List: ListFC = () => {
    const { data, isLoading, error } = useGetList(
        (data) => {
            console.log('List data:', data);
        },
        (error) => {
            console.error('Error fetching list:', error);
        }
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold text-red-500">
                    Error: {(error as Error).message}
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
                {data?.map((item: ListItem) => (
                    <div
                        key={item.id}
                        className={clsx(
                            'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300',
                            'flex flex-col gap-4'
                        )}
                    >
                        <h3 className="text-2xl font-bold">{item.name}</h3>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {item.email}
                        </p>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {item.username}
                        </p>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {item.phone}
                        </p>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            ID: {item.id}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
