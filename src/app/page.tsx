import { LinkCard } from '@/components/link-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { userConfig } from '@/lib/link-card-config';

export default function Home() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'avatar');

  const user = {
    ...userConfig,
    avatarUrl: avatarImage?.imageUrl ?? 'https://www.gravatar.com/avatar/f9b5a8355982e6c5c44158461159959f?s=200',
    avatarHint: avatarImage?.imageHint ?? 'portrait person',
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <LinkCard user={user} />
    </main>
  );
}
