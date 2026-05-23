import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }
    const res = await fetch('https://app.kit.com/forms/9476777/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email_address: email }),
    })
    if (res.ok) return NextResponse.json({ success: true })
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
