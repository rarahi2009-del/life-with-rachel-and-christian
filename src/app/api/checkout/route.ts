import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-04-22.dahlia',
  })

  const { priceId, successUrl, cancelUrl } = await req.json()

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
}
