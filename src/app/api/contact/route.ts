import { NextRequest, NextResponse } from 'next/server'

const KIT_CONTACT_FORM_ID = '9505510'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const res = await fetch(`https://app.kit.com/forms/${KIT_CONTACT_FORM_ID}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email_address: email,
        'fields[first_name]': name,
        'fields[subject]': subject,
        'fields[message]': message,
      }),
    })

    if (res.ok) return NextResponse.json({ success: true })
    return NextResponse.json({ error: 'Submission failed' }, { status: 502 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
