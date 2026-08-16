import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="EDUCATION" title="Education" />

      <div className="relative">
        <div className="dotted-rule absolute left-[7px] top-2 bottom-2 w-px sm:left-[9px]" aria-hidden="true" />

        <ol className="space-y-8">
          {education.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-signal-indigo bg-ink-900 text-signal-indigo sm:h-[18px] sm:w-[18px]">
                <GraduationCap size={10} />
              </span>

              <div className="card-surface rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-mist-100">
                    {item.institution}
                  </h3>
                  <span className="font-mono text-xs text-signal-indigo">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-mist-300">{item.degree}</p>
                <p className="mt-1 text-sm text-mist-400">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
