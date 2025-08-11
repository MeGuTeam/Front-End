import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { prefetchParticles } from '@/features/home/hooks';
import ParticleClient from './page.client';

export default async function ParticlePage() {
  const queryClient = new QueryClient();

  await prefetchParticles(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParticleClient />
    </HydrationBoundary>
  );
}
