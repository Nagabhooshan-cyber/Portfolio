import { profile } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-shell flex items-center justify-center">
        <p className="font-mono text-xs text-mist-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
