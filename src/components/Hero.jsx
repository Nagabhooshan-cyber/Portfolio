import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail, Brain, Code2, Database } from 'lucide-react'
import { profile } from '../data/config'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 lg:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="section-shell relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-teal/20 bg-signal-teal/[0.06] px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-teal" />
              </span>
              <span className="font-mono text-xs text-signal-teal/90">{profile.availability}</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-mist-100 sm:text-5xl lg:text-6xl"
            >
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-3 font-display text-xl font-medium text-mist-200 sm:text-2xl"
            >
              {profile.role}
            </motion.h2>

            <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="rounded-md bg-signal-teal px-6 py-3 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-signal-teal"
              >
                View My Projects
              </button>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-signal-teal/40 hover:text-signal-teal"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-mist-300 transition-colors hover:text-signal-teal"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-mist-300 transition-colors hover:text-signal-teal"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-mist-300 transition-colors hover:text-signal-teal"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-signal-teal/20 via-indigo-500/10 to-transparent blur-2xl opacity-70 pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative h-64 w-64 overflow-hidden rounded-3xl border border-white/15 bg-ink-800/80 p-2 shadow-2xl backdrop-blur-md sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink-950">
                  {!imgError ? (
                    <img
                      src="/profile.jpg"
                      alt="Nagabhooshan Bhat - Computer Science and AI/ML Student"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950 p-6 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-signal-teal/30 bg-signal-teal/10 text-signal-teal shadow-glow">
                        <span className="font-display text-3xl font-bold tracking-wider">NB</span>
                      </div>
                      <p className="mt-4 font-mono text-xs text-mist-400">
                        Replace /profile.jpg with your photo
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs text-mist-200 shadow-lg backdrop-blur-md"
              >
                <Brain size={14} className="text-signal-teal" />
                <span className="font-mono">AI / ML</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs text-mist-200 shadow-lg backdrop-blur-md"
              >
                <Code2 size={14} className="text-signal-indigo" />
                <span className="font-mono">Development</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 -right-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs text-mist-200 shadow-lg backdrop-blur-md"
              >
                <Database size={14} className="text-signal-teal" />
                <span className="font-mono">Data Science</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-400 sm:flex"
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </button>
    </section>
  )
}
