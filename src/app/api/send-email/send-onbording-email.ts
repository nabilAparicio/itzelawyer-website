import { Resend } from 'resend';
import { OnbordingEmailTemplate } from '@/components/emails/onbording-email-template'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(datas: FormData) {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['orlando.nabil@gmail.com'],
      subject: 'Hello world',
      react: OnbordingEmailTemplate({ firstName: 'John' }),
      text: 'Hello world',
    });

    console.log(data);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
