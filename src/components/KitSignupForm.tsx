'use client'

import { useState } from 'react'

export default function KitSignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gold-pale border-l-4 border-gold p-6 max-w-md text-left">
        <p className="font-playfair font-bold text-lg text-brand-black mb-1">You&apos;re on the list.</p>
        <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
          Check your email to confirm. We&apos;ll be in touch when spots open up.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === 'loading'}
          className="flex-1 border border-divider bg-white px-4 py-3.5 font-jost text-sm text-brand-black placeholder:text-muted/50 focus:outline-none focus:border-brand-black transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200 disabled:opacity-60"
        >
          {status === 'loading' ? '...' : 'Count Me In'}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-jost text-xs text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
      <p className="font-jost text-xs text-muted mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  )
}
