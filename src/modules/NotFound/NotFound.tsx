/* core */
import s from './NotFound.module.scss';
import Link from 'next/link';
import Image from 'next/image';
/* components */
import nfimg from '../../common/assets/images/NotFound.png';
/* instruments */
import { useTranslations } from 'next-intl';

export const NotFound = () => {
  const t = useTranslations();

  return (
    <div className={s.wrapper}>
      <h2>{t('pageNotFound')}</h2>
      <h3>{t('pageNotExist')}</h3>
      <div className={s.imgContainer}>
        <Image width={300} quality={100} src={nfimg} alt={'notFoundImg'} />
      </div>
      <div className={s.btnContainer}>
        <Link href='/'>
          <button>{t('goHome')}</button>
        </Link>
      </div>
    </div>
  );
};
