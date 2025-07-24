import type { Metadata } from 'next';
import ClientPage from '@/modules/ClientPage/ClientPage';

export const metadata: Metadata = {
  title: 'Profesjonalne remonty w Krakowie | Wykończenia wnętrz | m2.visual',
  description:
    'Kompleksowe remonty mieszkań i domów w Krakowie. Wykończenia wnętrz, generalne remonty, malowanie, płytki, podłogi. Bezpłatna wycena. ☎️ +48 123 456 789',
  openGraph: {
    title: 'm2.visual - Profesjonalne remonty w Krakowie',
    description:
      'Wykończenia wnętrz i generalne remonty. Profesjonalna ekipa, wysokiej jakości materiały.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return <ClientPage />;
}
