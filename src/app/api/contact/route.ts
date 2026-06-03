import { NextRequest, NextResponse } from 'next/server'

// TODO: Set up an email service (e.g. Resend, SendGrid, or Postmark) and add your
// CONTACT_EMAIL env var to send form submissions to your inbox.
// For now, submissions are logged server-side and return success to the user.
// Required env vars once configured:
//   CONTACT_EMAIL=hello@lifewithrachelandchristian.com
//   RESEND_API_KEY=re_...  (or equivalent for your chosen provider)

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    // Log to server console until email service is configured
    console.log('Contact form submission:', { name, email, subject, message })

    // TODO: Replace the log above with an actual email send, e.g.:
    // await resend.emails.send({
    //   from: 'noreply@lifewithrachelandchristian.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `Contact form: ${subject}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
