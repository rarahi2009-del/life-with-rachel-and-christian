'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// ─── Contact form with client state ────────────────────────────────────────

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const SUBJECTS = [
  'Brand Collaboration',
  'Group Trip Question',
  'General',
]

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: 'General',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Please enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please write a message.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const e_ = validate()
    if (Object.keys(e_).length > 0) { setErrors(e_); return }
    setErrors({})
    setSubmitted(true)
  }

  const field = (key: keyof FormState, val: string) => {
    setForm((f) => ({ ...f, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  if (submitted) {
    return (
      <div className="bg-gold-pale border-l-4 border-gold p-8">
        <p className="font-playfair font-bold text-xl text-brand-black mb-2">
          Message sent.
        </p>
        <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
          We&apos;ll get back to you within 3 business days. Thanks for reaching out.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="cf-name"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          value={form.name}
          onChange={(e) => field('name', e.target.value)}
          placeholder="Your name"
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black placeholder:text-muted/40 focus:outline-none focus:border-brand-black transition-colors"
        />
        {errors.name && (
          <p className="font-jost text-xs text-red-600 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={(e) => field('email', e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black placeholder:text-muted/40 focus:outline-none focus:border-brand-black transition-colors"
        />
        {errors.email && (
          <p className="font-jost text-xs text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="cf-subject"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          Subject
        </label>
        <select
          id="cf-subject"
          value={form.subject}
          onChange={(e) => field('subject', e.target.value)}
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={(e) => field('message', e.target.value)}
          rows={6}
          placeholder="What's on your mind?"
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black placeholder:text-muted/40 focus:outline-none focus:border-brand-black transition-colors resize-none"
        />
        {errors.message && (
          <p className="font-jost text-xs text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase py-4 hover:bg-gold transition-colors duration-200"
      >
        Send It
      </button>
    </form>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="font-jost font-light text-base text-white/60 max-w-md leading-relaxed">
            We reply to everything within 3 business days. Brand inquiries may take a bit longer depending on where we are in the world.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Form */}
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-6">
              Send a Message
            </p>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-6">
              Find Us Here
            </p>
            <div className="space-y-4">

              <a
                href="https://www.youtube.com/@LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
              >
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
                  YouTube
                </div>
                <div className="font-playfair font-bold text-base text-brand-black">
                  Life With Rachel and Christian
                </div>
              </a>

              <a
                href="https://www.instagram.com/rachelthomaslife"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
              >
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
                  Instagram
                </div>
                <div className="font-playfair font-bold text-base text-brand-black">
                  @RachelThomasLife
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@rachelthomaslife"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
              >
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
                  TikTok
                </div>
                <div className="font-playfair font-bold text-base text-brand-black">
                  @RachelThomasLife
                </div>
              </a>

              <a
                href="https://www.patreon.com/c/LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
              >
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
                  Patreon
                </div>
                <div className="font-playfair font-bold text-base text-brand-black">
                  Life With Rachel and Christian
                </div>
              </a>

              {/* Response time note */}
              <div className="bg-beige border border-divider p-5 mt-6">
                <p className="font-jost text-sm font-light text-muted leading-relaxed">
                  We reply to everything within 3 business days. Brand inquiries may take a bit longer depending on where we are in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
