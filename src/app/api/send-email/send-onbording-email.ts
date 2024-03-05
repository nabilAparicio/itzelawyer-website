import { Resend } from 'resend';
import { OnbordingEmailTemplate } from '@/components/emails/onbording-email-template'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(datas: FormData) {
  try {
  await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'hello world',
  text: 'it works!',
  headers: {
    'X-Entity-Ref-ID': '123456789',
  },
  tags: [
    {
      name: 'category',
      value: 'confirm_email',
    },
  ],
});

    console.log('Email sent');
    return Response.json({ message: 'Email sent' });
  } catch (error) {
    return Response.json({ error });
  }
}
