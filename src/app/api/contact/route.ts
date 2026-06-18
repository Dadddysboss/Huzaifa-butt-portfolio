import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

const CONTACT_LIMIT = 128;

const ContactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(CONTACT_LIMIT, `Name exceeds ${CONTACT_LIMIT}-character LPDoS limit`)
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .max(CONTACT_LIMIT, `Email exceeds ${CONTACT_LIMIT}-character LPDoS limit`)
    .email('Invalid email structure')
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(CONTACT_LIMIT, `Message exceeds ${CONTACT_LIMIT}-character LPDoS limit`)
    .trim(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return NextResponse.json(
        { error: `LPDoS PRE-PROCESSOR: ${firstError.message}` },
        { status: 422 },
      );
    }

    const { name, email, message } = result.data;

    console.log(
      `[CONTACT] LPDoS-cleared transmission from ${name} <${email}> — ${message.length} chars`,
    );

    return NextResponse.json(
      { status: 'queued', detail: 'Transmission accepted for review' },
      { status: 200 },
    );
  } catch (err) {
    const msg = err instanceof SyntaxError ? 'Malformed JSON payload' : 'Internal fault';
    return NextResponse.json({ error: `LPDoS PRE-PROCESSOR: ${msg}` }, { status: 400 });
  }
}
