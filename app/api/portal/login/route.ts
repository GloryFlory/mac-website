import { NextResponse } from 'next/server';
import { PORTAL_CODE_TO_TEACHER } from '@/lib/portal-teachers';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || !('code' in body) || typeof (body as Record<string, unknown>).code !== 'string') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const code = ((body as Record<string, string>).code).trim().toUpperCase();

  const teacher = PORTAL_CODE_TO_TEACHER.get(code);

  if (!teacher) {
    // Return same error for invalid and valid codes to prevent enumeration
    return NextResponse.json(
      { error: 'Code not recognised. Check capitalisation and try again.' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ redirect: `/portal/${teacher.slug}` });
  response.cookies.set('portal-token', teacher.slug, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
  return response;
}
