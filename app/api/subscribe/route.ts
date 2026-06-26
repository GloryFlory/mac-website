import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  const body: Record<string, unknown> = { email };
  if (process.env.MAILERLITE_GROUP_ID) {
    body.groups = [process.env.MAILERLITE_GROUP_ID];
  }

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && res.status !== 200 && res.status !== 201) {
    const data = await res.json().catch(() => ({}));
    const message = (data as { message?: string }).message ?? 'Subscription failed.';
    return NextResponse.json({ error: message }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}
