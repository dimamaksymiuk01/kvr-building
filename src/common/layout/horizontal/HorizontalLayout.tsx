/* core */
import { FC, ReactNode } from 'react';
import s from './HorizontalLayout.module.scss';
/* components */
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

interface HorizontalLayoutProps {
  children: ReactNode;
}

const HorizontalLayout: FC<HorizontalLayoutProps> = ({ children }) => (
  <div className={s.wrapper}>
    <Header />
    <main className={s.mainContent}>
      <div className={s.container}>{children}</div>
    </main>
    <Footer />
  </div>
);

export default HorizontalLayout;
