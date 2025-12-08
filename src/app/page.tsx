import { LinkCard } from '@/components/link-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'avatar');

  const user = {
    name: 'Alex Doe',
    title: 'Full-Stack Developer',
    avatarUrl: avatarImage?.imageUrl ?? 'https://picsum.photos/seed/avatar/200/200',
    avatarHint: avatarImage?.imageHint ?? 'portrait person',
    avatarFallback: 'AD',
    links: [
      {
        label: 'Website',
        url: 'https://example.com',
        icon: 'Globe',
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/example',
        icon: 'Linkedin',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/example',
        icon: 'Github',
      },
      {
        label: 'Contact Me',
        url: 'mailto:alex.doe@example.com',
        icon: 'Mail',
      },
    ],
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <LinkCard user={user} />
    </main>
  );
}
