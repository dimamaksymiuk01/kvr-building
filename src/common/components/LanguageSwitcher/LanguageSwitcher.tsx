// 'use client';
//
// /* core */
// import { useState, useEffect } from 'react';
// import { Button, Dropdown, MenuProps } from 'antd';
// import s from './LanguageSwitcher.module.scss';
// /* components */
// import UaIcon from '@/common/assets/icons/UaFlag.svg';
// import EnIcon from '@/common/assets/icons/EnFlag.svg';
// import RuIcon from '@/common/assets/icons/RuFlag.svg';
// /* instruments */
// import { LANGUAGE } from '@/common/enums';
// import { useRouter, usePathname } from 'next/navigation';
//
// export const LanguageSwitcher = () => {
//   const [currentLang, setCurrentLang] = useState<string>('uk');
//   const [isLoading, setIsLoading] = useState(true);
//
//   const router = useRouter();
//   const pathname = usePathname();
//
//   useEffect(() => {
//     const getLanguageFromUrl = () => {
//       if (pathname.startsWith('/en')) {
//         return LANGUAGE.EN;
//       } else if (pathname.startsWith('/ru')) {
//         return LANGUAGE.RU;
//       } else {
//         return LANGUAGE.UK;
//       }
//     };
//
//     const urlLanguage = getLanguageFromUrl();
//     setCurrentLang(urlLanguage);
//
//     const getCookieLanguage = () => {
//       const match = document.cookie.match(new RegExp('(^| )NEXT_LOCALE=([^;]+)'));
//       return match ? match[2] : null;
//     };
//
//     const cookieLang = getCookieLanguage();
//
//     if (cookieLang !== urlLanguage) {
//       document.cookie = `NEXT_LOCALE=${urlLanguage}; path=/; max-age=31536000`;
//     }
//
//     setIsLoading(false);
//   }, [pathname]);
//
//   const languageIcons = {
//     uk: <UaIcon />,
//     en: <EnIcon />,
//     ru: <RuIcon />,
//   } as const;
//
//   const handleLanguageChange = (lang: LANGUAGE) => {
//     let newPathname = pathname;
//
//     if (newPathname.startsWith('/en') || newPathname.startsWith('/ru')) {
//       newPathname = newPathname.replace(/^\/(en|ru)/, '') || '/';
//     }
//
//     const redirectPath = lang === 'uk' ? newPathname : `/${lang}${newPathname}`;
//
//     document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
//
//     router.push(redirectPath);
//   };
//
//   const allLanguages = [
//     { key: 'uk', label: 'UA', icon: <UaIcon /> },
//     { key: 'en', label: 'EN', icon: <EnIcon /> },
//     { key: 'ru', label: 'RU', icon: <RuIcon /> },
//   ];
//
//   const items: MenuProps['items'] = allLanguages
//     .filter(({ key }) => key !== currentLang)
//     .map(({ key, label, icon }) => ({
//       key,
//       label: (
//         <div
//           style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
//           className={s.item}
//           onClick={() => handleLanguageChange(key as LANGUAGE)}
//         >
//           {icon}
//           <span>{label}</span>
//         </div>
//       ),
//     }));
//
//   if (isLoading) {
//     return (
//       <Button
//         style={{
//           width: '50px',
//           height: '50px',
//           position: 'relative',
//         }}
//         shape='circle'
//       />
//     );
//   }
//
//   return (
//     <Dropdown
//       menu={{ items }}
//       placement='bottomLeft'
//       arrow={{ pointAtCenter: true }}
//       className={s.LanguageSwitcher}
//     >
//       <Button
//         style={{
//           width: '50px',
//           height: '50px',
//           position: 'relative',
//         }}
//         shape='circle'
//         icon={languageIcons[currentLang as keyof typeof languageIcons] || <UaIcon />}
//       />
//     </Dropdown>
//   );
// };
