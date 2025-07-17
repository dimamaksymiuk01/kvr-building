/* instruments */
import { useTranslations } from 'next-intl';

export const HomePage = () => {
  const t = useTranslations();

  return <h2>{t('pageNotFound')}</h2>;
};
