# Tesla Poshuk 

## Менеджер пакетів

**У цьому проєкті використовується `pnpm` замість класичного `npm`.**

Перед початком роботи, будь ласка, переконайтеся, що `pnpm` встановлено у вашій системі. Якщо ні, встановіть його за допомогою однієї з наступних команд:

```bash
# Використовуючи npm
npm install -g pnpm

# Використовуючи Homebrew (macOS)
brew install pnpm

# Використовуючи Scoop (Windows)
scoop install pnpm
```

## Правила структури імпортів

Усі файли з імпортами повинні дотримуватися цієї специфічної структури з чітким розділенням між різними типами імпортів:

## Структура імпорту

```bash
/* core */
// Бібліотеки, SCSS модулі та всі основні імпорти (наприклад, React)

/* components */
// Власноруч написані компоненти (не з бібліотек)

/* instruments */
// Функції, типи, утиліти тощо (не бібліотечний, не компонентний код)
```

# Приклади

Приклад 1 - Компонент сторінки:

```bash
/* core */
import React, { useEffect, useState } from 'react';
import s from './Home.module.scss';

/* components */
import { Answers } from '@/common/components';
import { ScrollTopButton } from '@components/Buttons';
import { HomeSlider } from './components/HomeSlider/HomeSlider';
import { ProductBannersSection } from './components/ProductBannersSection/ProductBannersSection';
import { ProductList } from './components/ProductList/ProductList';
import { ReadMoreBlock } from './components/ReadMoreBlock/ReadMoreBlock';

/* instruments */
import { text_home_1, text_home_2 } from '@constants/mock';
import { formatCurrency } from '@/utils/formatters';
```

Приклад 2 - UI Компонент:

```bash
/* core */
import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

/* components */
import { Icon } from '@/common/components/Icon';

/* instruments */
import { ButtonProps } from './Button.types';
import { useButtonAnimation } from '@/hooks/animations';
```

# Правила перекладу

Для перекладів використовуйте наступні хуки:

### 1. useClientTranslation (Рекомендовано)

Використовуйте цей хук у більшості компонентів:

```bash
const t = useTranslations();

// Приклад використання
<Tooltip title={t('Cart')}>
<Button>{t('Add to cart')}</Button>
```

### 2. useServerTranslation (Використовувати з обережністю)

Використовуйте лише у серверних компонентах вищого рівня. Надмірне використання може спричинити помилки гідрації через циклічність імпортів та їх взаємозалежність.

```bash
const { t } = useServerTranslation();

// Приклад використання у серверному компоненті
export async function ServerComponent() {
  const { t } = useServerTranslation();
  return <h1>{t('Welcome')}</h1>;
}
```

## Початок роботи

Спочатку запустіть сервер розробки:

```bash
# Start development server
pnpm run dev

# Build for production
pnpm eun build

# Start production server
pnpm run start
```

Відкрийте http://localhost:3000 у вашому браузері, щоб побачити результат.

# Структура проєкту

### Загальна структура проєкту

Проєкт має наступну структуру:

```bash
tesla_poshuk/
├── .github/            # Конфігурації для GitHub
├── .husky/             # Git hooks для автоматизації процесу розробки
├── .next/              # Згенеровані Next.js файли (створюються автоматично)
├── node_modules/       # Залежності проєкту (створюються автоматично)
├── src/                # Вихідний код проєкту
│   ├── __test__/       # Тести
│   ├── api/            # API роути
│   ├── app/            # App маршрутизація та основні компоненти
│   │   ├── auth/       # Сторінка авторизації
│   │   ├── product/    # Сторінка продукту
│   │   └── ...
│   ├── common/         # Спільні ресурси проєкту
│   │   ├── assets/     # Статичні ресурси (зображення, шрифти)
│   │   ├── components/ # Компоненті, які використовуються в багатьох місцях
│   │   ├── constants/  # Константи
│   │   ├── enums/      # Захардкоджені імена/назви/статичні дані
│   │   ├── hooks/      # Самописні хуки
│   │   ├── layout/     # Компоненти розмітки
│   │   ├── lib/        # Бібліотеки
│   │   ├── providers/  # Провайдери React Context
│   │   ├── styles/     # Глобальні стилі
│   │   ├── types/      # TypeScript типи
│   │   └── utils/      # Утиліти (функції)
│   ├── locale/         # Файли локалізації
│   └── modules/        # Модульна структура проєкту
│       ├── Auth/       # Модуль авторизації
│       ├── Home/       # Модуль головної сторінки
│       └── Product/    # Модуль продукту
├── store/              # Глобальний стан (Zustand)
├── .eslintignore       # Файли, які мають бути проігноровані ESLint
├── .eslintrc.json      # Конфігурація ESLint
├── .gitignore          # Файли, які мають бути проігноровані Git
├── .prettierignore     # Файли, які мають бути проігноровані Prettier
├── .prettierrc         # Конфігурація Prettier
├── jest.config.ts      # Конфігурація Jest
├── jest.setup.ts       # Налаштування Jest
├── next.config.js      # Конфігурація Next.js
├── next-env.d.ts       # Типи для Next.js
├── package.json        # Інформація про проєкт та залежності
├── package-lock.json   # Фіксація залежностей (автоматично генерується)
├── pnpm-lock.yaml      # Фіксація залежностей для pnpm (автоматично генерується)
├── README.md           # Опис проєкту
└── tsconfig.json       # Конфігурація TypeScript
```
