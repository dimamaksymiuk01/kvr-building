import { type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { LANGUAGE } from '@/common/enums';

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = intlMiddleware(request);

  let urlLocale: LANGUAGE = LANGUAGE.UK;

  if (pathname.startsWith('/en')) {
    urlLocale = LANGUAGE.EN;
  } else if (pathname.startsWith('/ru')) {
    urlLocale = LANGUAGE.RU;
  }

  const currentCookie = request.cookies.get('NEXT_LOCALE')?.value;

  if (currentCookie !== urlLocale) {
    response.cookies.set('NEXT_LOCALE', urlLocale, {
      path: '/',
      maxAge: 31536000,
      httpOnly: false,
    });
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
