import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavClick('home')}
          className="font-mono text-sm text-mist-100 tracking-wide"
          aria-label="Go to home"
        >
          <span className="text-signal-teal">&gt;</span> nagabhooshan.dev
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  activeId === link.id ? 'text-mist-100' : 'text-mist-300 hover:text-mist-100'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-signal-teal"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-mist-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-white/[0.06] bg-ink-900/95 backdrop-blur-md md:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full rounded-md px-3 py-2.5 text-left text-sm ${
                      activeId === link.id
                        ? 'bg-white/[0.04] text-signal-teal'
                        : 'text-mist-300 hover:text-mist-100'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
