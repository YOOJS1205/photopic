import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { request } from '@/api/config';

export function useDeletePost(
  options?: UseMutationOptions<void, Error, number>,
) {
  return useMutation<void, Error, number>({
    mutationFn: (postId: number) =>
      request({
        method: 'DELETE',
        url: `/posts/${postId}`,
      }),
    ...options,
  });
}
