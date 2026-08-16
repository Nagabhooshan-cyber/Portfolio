import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { achievements } from '../data/achievements'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell pb-24 sm:pb-28">
      <SectionHeading eyebrow="// 06_achievements" title="Achievements" />

      <div className="grid gap-5">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border border-signal-amber/20 bg-gradient-to-br from-signal-amber/[0.07] via-ink-800/60 to-ink-800/60 p-6 sm:p-7"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal-amber/15 text-signal-amber">
                  <Trophy size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-mist-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-mist-300">{item.result}</p>
                  <p className="mt-1 text-sm text-mist-400">Project: {item.project}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:justify-end">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-mist-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
