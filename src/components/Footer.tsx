import { ExternalLink } from 'lucide-react'

const ecosystemLinks = [
  { href: 'https://parsis.org', label: 'PARSIS.org' },
  { href: 'https://parsis.id', label: 'Identity' },
  { href: 'https://parsis.network', label: 'Network' },
  { href: 'https://parsis.vote', label: 'Vote' },
]

const migaLinks = [
  { href: 'https://miga.us.org', label: 'Foundation' },
  { href: 'https://migaprotocol.xyz', label: 'Protocol' },
  { href: 'https://github.com/migaprotocol', label: 'GitHub' },
]

const socialLinks = [
  { href: 'https://twitter.com/parsisfund', label: 'Twitter' },
  { href: 'https://discord.gg/parsis', label: 'Discord' },
  { href: 'https://t.me/parsisfund', label: 'Telegram' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-pars-deep py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-pars-gold">PARSIS Ecosystem</h4>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pars-gold">MIGA Protocol</h4>
            <ul className="space-y-2">
              {migaLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pars-gold">Community</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pars-gold">Fund Programs</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Grants</li>
              <li>Scholarships</li>
              <li>Startup Funding</li>
              <li>Community Projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl gradient-text font-bold">PARSIS Fund</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60 text-sm">Community Investment</span>
          </div>
          <p className="text-white/40 text-sm">
            2026 PARSIS Fund. Part of the MIGA ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}
