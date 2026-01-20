import { ExternalLink, Book, Code, Shield, Coins } from 'lucide-react'

const docs = [
  {
    icon: Book,
    title: 'Fund Guidelines',
    description: 'Complete guide to PARSIS Fund programs, eligibility, and application process.',
    href: 'https://parsis.fund/docs/guidelines',
  },
  {
    icon: Coins,
    title: 'Treasury Info',
    description: 'Fund allocation strategy, disbursement mechanisms, and governance.',
    href: 'https://parsis.fund/docs/treasury',
  },
  {
    icon: Shield,
    title: 'Due Diligence',
    description: 'Our vetting process, compliance requirements, and reporting standards.',
    href: 'https://parsis.fund/docs/due-diligence',
  },
  {
    icon: Code,
    title: 'Smart Contracts',
    description: 'On-chain fund management, disbursement contracts, and audit reports.',
    href: 'https://parsis.fund/docs/contracts',
  },
]

export function Docs() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-white/60 mb-8">
            Learn about PARSIS Fund programs, application requirements, and fund governance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover:border-pars-gold/30 transition-all group"
              >
                <doc.icon className="w-10 h-10 text-pars-gold mb-4 group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{doc.title}</h3>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-pars-gold transition-colors" />
                </div>
                <p className="text-white/60">{doc.description}</p>
              </a>
            ))}
          </div>

          {/* Quick Reference */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-pars-gold mb-2">Grant Amounts</h3>
                <div className="bg-pars-deep p-4 rounded-lg text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/60">Student Scholarships</span>
                    <span>$5,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Startup Funding</span>
                    <span>$10,000 - $100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Community Projects</span>
                    <span>$1,000 - $10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Infrastructure Grants</span>
                    <span>$5,000 - $50,000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-pars-gold mb-2">Eligibility Basics</h3>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>- Persian heritage, ancestry, or strong community ties</li>
                  <li>- Clear project plan with measurable outcomes</li>
                  <li>- Commitment to transparent fund usage</li>
                  <li>- Willingness to provide progress reports</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-pars-gold mb-2">Review Timeline</h3>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>- Small grants (under $10K): 2-4 weeks</li>
                  <li>- Medium grants ($10K-$25K): 4-6 weeks</li>
                  <li>- Large grants (over $25K): 6-8 weeks + community vote</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-pars-gold mb-2">Contact</h3>
                <p className="text-white/60 text-sm">
                  For questions about applications: <a href="mailto:grants@parsis.fund" className="text-pars-gold hover:underline">grants@parsis.fund</a>
                  <br />
                  For partnership inquiries: <a href="mailto:partners@parsis.fund" className="text-pars-gold hover:underline">partners@parsis.fund</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
