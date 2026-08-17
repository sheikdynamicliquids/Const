'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'

export function NewsletterForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDone(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        disabled={done}
        className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-footer-foreground outline-none transition-colors placeholder:text-footer-muted focus:border-white/30 focus:ring-2 focus:ring-white/10 disabled:opacity-60"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5"
      >
        {done ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
      </button>
    </form>
  )
}
