'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border-l-4 border-gold bg-gold-pale p-6">
        <p className="font-playfair font-bold text-lg text-brand-black mb-1">Message sent.</p>
        <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
          We'll get back to you within 48 hours. Please check your inbox for updates.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-divider bg-white px-4 py-3.5 font-jost text-sm text-brand-black placeholder:text-muted/50 focus:outline-none focus:border-brand-black transition-colors'

  const labelClass = 'block font-jost text-[11px] font-medium tracking-[0.12em] uppercase text-brand-black mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your first name"
            required
            disabled={status === 'loading'}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            disabled={status === 'loading'}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          disabled={status === 'loading'}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message..."
          required
          rows={6}
          disabled={status === 'loading'}
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === 'error' && (
        <p className="font-jost text-xs text-red-600">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-gold transition-colors duration-200 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
