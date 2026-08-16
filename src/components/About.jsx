import { motion } from 'framer-motion'
import { Brain, Code2, Database, Sparkles, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'

const focusAreas = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Sparkles, label: 'Machine Learning' },
  { icon: Database, label: 'Data Science' },
  { icon: Code2, label: 'Software Development' },
  { icon: Wrench, label: 'Problem Solving' },
]

export default function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="ABOUT ME" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 text-mist-300"
        >
          <p className="text-lg leading-relaxed text-mist-200">
            I'm a Computer Science student specializing in{' '}
            <span className="text-mist-100">Artificial Intelligence & Data Science</span>,
            drawn to the space where solid software engineering meets applied machine learning.
          </p>
          <p className="leading-relaxed">
            My interests span AI, ML, data science, and software development —
            and I enjoy problem solving that connects those disciplines rather than treating them
            as separate tracks.
          </p>
          <p className="leading-relaxed">
            I like building practical projects that combine software engineering with AI/ML: the
            kind of work that starts as a dataset or an idea and ends as something a real user can
            open and use — with an API behind it, a model doing the reasoning, and a UI that
            doesn't get in the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-3"
        >
          {focusAreas.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="card-surface group rounded-lg p-4 transition-colors hover:border-signal-teal/30"
            >
              <Icon size={18} className="mb-3 text-signal-teal" />
              <p className="text-sm text-mist-200">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
