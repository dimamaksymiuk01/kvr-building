/* core */
import { cookies, headers } from 'next/headers';
import acceptLanguage from 'accept-language-parser';
import { NextResponse } from 'next/server';
/* instruments */
import { routing } from '@i18n/routing';
import { LANGUAGE } from '@/common/enums';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
    if (cookieLocale && routing.locales.includes(cookieLocale as LANGUAGE)) {
      return NextResponse.json({ language: cookieLocale });
    }
  } catch (error) {
    console.warn('Failed to read cookies:', error);
  }

  try {
    const headersList = await headers();
    const acceptLangHeader = headersList.get('accept-language');
    if (acceptLangHeader) {
      const parsedLangs = acceptLanguage.parse(acceptLangHeader);
      if (parsedLangs.length > 0) {
        const detectedLocale = parsedLangs[0].code;
        if (routing.locales.includes(detectedLocale as LANGUAGE)) {
          return NextResponse.json({ language: detectedLocale });
        }
      }
    }
  } catch (error) {
    console.warn('Failed to read headers:', error);
  }

  return NextResponse.json({ language: routing.defaultLocale });
}
