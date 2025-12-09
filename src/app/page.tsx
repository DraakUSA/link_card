import { createHash } from 'crypto';
import { LinkCard } from '@/components/link-card';
import { userConfig } from '@/lib/link-card-config';

export default function Home() {
  const emailHash = createHash('md5')
    .update(userConfig.gravatarEmail)
    .digest('hex');
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=200`;

  const user = {
    ...userConfig,
    avatarUrl: gravatarUrl,
    avatarHint: 'portrait person',
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <LinkCard user={user} />
    </main>
  );
}
