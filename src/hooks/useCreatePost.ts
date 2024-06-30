import { UseMutationResult, useMutation, useQueryClient } from 'react-query';
import { request } from '@homework-task/utils/axios';
import { PostFormType, PostResponse } from '@homework-task/types/post';

async function createPost(post: PostFormType) {
    const response = await request<PostFormType, PostResponse>({
        url: '/posts',
        method: 'post',
        data: post,
    });
    return response.data;
}

export function useCreatePost<T extends PostFormType>(
    onSuccess?: (data: PostResponse) => void,
    onError?: (error: unknown) => void
): {
    mutate: (values: T) => Promise<void>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
} {
    const queryClient = useQueryClient();
    const mutation: UseMutationResult<
        PostResponse,
        unknown,
        PostFormType,
        unknown
    > = useMutation(createPost, {
        onSuccess: (data) => {
            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            if (onError) {
                onError(error);
            }
        },
    });

    return {
        mutate: async (values: T) => {
            const post: PostFormType = {
                title: values.title,
                content: values.content,
            };
            await mutation.mutateAsync(post);
        },
        isLoading: mutation.isLoading,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
    };
}
