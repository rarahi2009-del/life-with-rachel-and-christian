'use client'

import { useState } from 'react'

type Props = {
  buttonLabel?: string
  successTitle?: string
  successBody?: string
  variant?: 'light' | 'dark'
  tag?: string
  className?: string
}

export default function KitSignupForm({
  buttonLabel = 'Count Me In',
  successTitle = "You're on the list.",
  successBody = "Check your email to confirm. We'll be in touch soon.",
  variant = 'light',
  tag,
  className = '',
}: Props) {
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
        body: JSON.stringify({ email, tag }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`bg-gold-pale border-l-4 border-gold p-6 max-w-md text-left ${className}`}>
        <p className="font-playfair font-bold text-lg text-brand-black mb-1">{successTitle}</p>
        <p className="font-jost font-light text-sm text-charcoal leading-relaxed">{successBody}</p>
      </div>
    )
  }

  const inputClass =
    variant === 'dark'
      ? 'flex-1 border border-white/20 bg-white/10 px-4 py-3.5 font-jost text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors'
      : 'flex-1 border border-divider bg-white px-4 py-3.5 font-jost text-sm text-brand-black placeholder:text-muted/50 focus:outline-none focus:border-brand-black transition-colors'

  const buttonClass =
    variant === 'dark'
      ? 'shrink-0 bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold-light transition-colors duration-200 disabled:opacity-60'
      : 'shrink-0 bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200 disabled:opacity-60'

  const disclaimerClass =
    variant === 'dark'
      ? 'font-jost text-xs text-white/40 mt-3'
      : 'font-jost text-xs text-muted mt-3'

  return (
    <div className={`max-w-md ${className}`}>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === 'loading'}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={buttonClass}
        >
          {status === 'loading' ? '...' : buttonLabel}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-jost text-xs text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
      <p className={disclaimerClass}>No spam. Unsubscribe anytime.</p>
    </div>
  )
}
