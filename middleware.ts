import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Keep slug list static here (avoids importing the full data module into Edge runtime)
const VALID_SLUGS = new Set([
  'coni-mati',
  'michal-klara',
  'lloydie-flo',
  'eli-bagaz',
  'manas-mira',
  'nick-chrysa',
  'caspian-laura',
  'mads-gavin',
  'pri-anna',
  'organisers',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /portal/* — leave /portal/login and API routes untouched
  if (
    pathname.startsWith('/portal/') &&
    !pathname.startsWith('/portal/login')
  ) {
    const slug = pathname.split('/')[2];

    // Unknown slug → back to login
    if (!slug || !VALID_SLUGS.has(slug)) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    const token = request.cookies.get('portal-token')?.value;
    if (!token || (token !== slug && token !== 'organisers')) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*'],
};
