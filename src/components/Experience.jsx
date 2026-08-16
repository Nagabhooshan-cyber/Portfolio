import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="// 04_experience" title="Experience" />

      <div className="relative">
        <div className="dotted-rule absolute left-[7px] top-2 bottom-2 w-px sm:left-[9px]" aria-hidden="true" />

        <ol className="space-y-10">
          {experience.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-signal-teal bg-ink-900 sm:h-[18px] sm:w-[18px]" />

              <div className="card-surface rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-mist-100">{role.role}</h3>
                  <span className="font-mono text-xs text-signal-teal">{role.period}</span>
                </div>
                <p className="mt-1 text-sm text-mist-300">{role.org}</p>

                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-mist-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-indigo" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
