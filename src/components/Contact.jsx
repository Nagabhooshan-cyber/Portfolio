import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Loader2, Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data/config'

const initialForm = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = (values) => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) nextErrors.message = 'Please add a short message.'
    else if (values.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/bhatnagabhooshan@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 max-w-2xl"
      >
        <p className="eyebrow mb-3">CONTACT</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-mist-100 sm:text-4xl">
          Let's Build Something Together
        </h2>
        <p className="mt-4 text-mist-300">
          Have an opportunity, a project, or just want to talk about AI/ML? I'd love to hear from
          you.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <a
            href={`tel:${profile.phone}`}
            className="card-surface flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-signal-teal/30"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-teal/10 text-signal-teal">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-mist-100">Phone</p>
              <p className="text-sm text-mist-400">{profile.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="card-surface flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-signal-teal/30"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-teal/10 text-signal-teal">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-mist-100">Email</p>
              <p className="text-sm text-mist-400">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-surface flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-signal-teal/30"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-indigo/10 text-signal-indigo">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-mist-100">LinkedIn</p>
              <p className="text-sm text-mist-400">Connect with me</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="card-surface flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-signal-teal/30"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-mist-100">
              <Github size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-mist-100">GitHub</p>
              <p className="text-sm text-mist-400">See my code</p>
            </div>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="card-surface space-y-5 rounded-xl p-6 sm:p-7"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mist-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-md border border-white/10 bg-ink-900/60 px-3.5 py-2.5 text-sm text-mist-100 outline-none transition-colors focus:border-signal-teal/50"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-mist-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-md border border-white/10 bg-ink-900/60 px-3.5 py-2.5 text-sm text-mist-100 outline-none transition-colors focus:border-signal-teal/50"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-mist-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full resize-none rounded-md border border-white/10 bg-ink-900/60 px-3.5 py-2.5 text-sm text-mist-100 outline-none transition-colors focus:border-signal-teal/50"
              placeholder="Tell me a bit about the opportunity or project..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-signal-teal px-6 py-3 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="text-sm text-signal-teal" role="status">
              Thanks — your message has been noted. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400" role="status">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
