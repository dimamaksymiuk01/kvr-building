/* instruments */
import { cookies } from 'next/headers';
import { HomePage } from '@/modules';

export default async function Home() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value;

  return (
    <>
      <HomePage />
    </>
  );
}
