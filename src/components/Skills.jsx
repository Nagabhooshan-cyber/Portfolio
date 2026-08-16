import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="SKILLS & TOOLS"
        title="Skills & Tools"
        description="A working toolkit across languages, machine learning, data science and full-stack development."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: groupIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface rounded-xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold text-mist-100">{group.title}</h3>
              <span className="font-mono text-[10px] text-mist-400">{group.tag}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-xs text-mist-300 transition-colors hover:border-signal-teal/40 hover:text-signal-teal"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
