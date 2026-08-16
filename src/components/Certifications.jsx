import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { certifications } from '../data/certifications'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="CERTIFICATIONS" title="Certifications" />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface flex items-start gap-4 rounded-xl p-6 transition-colors hover:border-signal-teal/25"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-teal/10 text-signal-teal">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold text-mist-100">{cert.name}</h3>
              <p className="mt-1 text-sm text-mist-300">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-mist-400">{cert.date}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-signal-indigo hover:text-signal-teal"
                >
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
