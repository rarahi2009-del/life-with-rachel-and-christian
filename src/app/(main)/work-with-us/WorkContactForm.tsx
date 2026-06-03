'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

export default function WorkContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Brand inquiry from ${form.company || form.name}`,
          message: form.message,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gold-pale border-l-4 border-gold p-8 max-w-2xl">
        <p className="font-playfair font-bold text-xl text-brand-black mb-2">Message received.</p>
        <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
          We&apos;ll review your inquiry and get back to you within 3 business days.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-white/20 bg-white/10 px-4 py-3.5 font-jost text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-gold transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-white/50 mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="First and last name"
            required
            disabled={status === 'loading'}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-white/50 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="you@company.com"
            required
            disabled={status === 'loading'}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-white/50 mb-2">
          Brand / Company
        </label>
        <input
          type="text"
          value={form.company}
          onChange={set('company')}
          placeholder="Company name (optional)"
          disabled={status === 'loading'}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-white/50 mb-2">
          Tell Us About the Partnership
        </label>
        <textarea
          value={form.message}
          onChange={set('message')}
          placeholder="What are you looking for? What's the product, service, or destination? Any timeline or budget information is helpful."
          required
          rows={6}
          disabled={status === 'loading'}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-5">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-200 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
        </button>
        {status === 'error' && (
          <p className="font-jost text-xs text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  )
}
