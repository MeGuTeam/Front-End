import { useQuery, QueryClient } from '@tanstack/react-query';
import { getParticle } from '../services/data'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { trackerParticle } from '../services/tracker';

export function useFetchParticle() {
  return useQuery({
    queryKey: ['particle'],
    queryFn: getParticle,
  });
}

export async function prefetchParticles(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: ['particle'],
    queryFn: getParticle,
  });
}

export function useToggleParticleMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: boolean }) =>
      trackerParticle(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['particle'] });
    },

    onError: (error) => {
      console.error('Gagal memperbarui status particle:', error);
    },
  });
}