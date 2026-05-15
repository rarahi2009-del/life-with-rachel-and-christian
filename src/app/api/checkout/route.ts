import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    return NextResponse.json({ error: 'STRIPE_SECRET_KEY is not set in environment' }, { status: 500 })
  }

  const stripe = new Stripe(key, {
    apiVersion: '2026-04-22.dahlia',
  })

  const { priceId, successUrl, cancelUrl } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'emergency_contact',
          label: { type: 'custom', custom: 'Emergency contact name & phone' },
          type: 'text',
          optional: true,
        },
      ],
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
