import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface rounded-xl transition-colors hover:border-signal-teal/25"
    >
      <div className="p-6 sm:p-7">
        <p className="eyebrow mb-2">{project.tagline}</p>
        <h3 className="font-display text-xl font-semibold text-mist-100">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-mist-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-xs font-medium text-mist-100 transition-colors hover:border-signal-teal/40 hover:text-signal-teal"
          >
            <Github size={14} />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-signal-teal px-4 py-2 text-xs font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}

          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-signal-indigo transition-colors hover:text-signal-teal"
          >
            {expanded ? 'Hide details' : 'View details'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06]"
          >
            <div className="p-6 sm:p-7">
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-mist-400">
                Problem solved
              </h4>
              <p className="mb-5 text-sm leading-relaxed text-mist-300">{project.problem}</p>

              <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-mist-400">
                Key features
              </h4>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-mist-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
