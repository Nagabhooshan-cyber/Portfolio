import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile } from '../data/config'

export default function ResumeCTA() {
  return (
    <section className="section-shell pb-24 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="card-surface relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-signal-teal/[0.06] via-transparent to-signal-indigo/[0.06]"
          aria-hidden="true"
        />
        <h2 className="relative font-display text-2xl font-semibold text-mist-100 sm:text-3xl">
          Want to know more about my experience?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm text-mist-300 sm:text-base">
          Download my resume to explore my skills, projects, education and experience.
        </p>
        <a
          href={profile.resumeUrl}
          download={profile.resumeFileName}
          className="relative mt-7 inline-flex items-center gap-2 rounded-md bg-signal-teal px-6 py-3 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 hover:shadow-glow"
        >
          <Download size={16} />
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}
