import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Rocket, Users, Building, Heart, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Total Funded', value: '$0', change: 'Launch Q1 2026' },
  { label: 'Grants Awarded', value: '0', change: 'Applications Open' },
  { label: 'Active Projects', value: '0', change: 'Coming Soon' },
  { label: 'Community Members', value: '0', change: 'Join Us' },
]

const features = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    description: 'Educational grants for Persian students pursuing higher education worldwide.',
  },
  {
    icon: Rocket,
    title: 'Startup Funding',
    description: 'Seed capital and mentorship for Persian entrepreneurs building innovative ventures.',
  },
  {
    icon: Users,
    title: 'Community Projects',
    description: 'Support for local initiatives that strengthen Persian communities globally.',
  },
  {
    icon: Building,
    title: 'Infrastructure Grants',
    description: 'Funding for cultural centers, community spaces, and digital infrastructure.',
  },
  {
    icon: Heart,
    title: 'Humanitarian Aid',
    description: 'Emergency relief and ongoing support for Persians in crisis situations.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Funding',
    description: 'On-chain treasury with full visibility into fund allocation and disbursement.',
  },
]

const programs = [
  {
    title: 'Student Scholarships',
    amount: '$5,000 - $25,000',
    description: 'For undergraduate and graduate students',
    status: 'Open',
  },
  {
    title: 'Startup Accelerator',
    amount: '$10,000 - $100,000',
    description: 'Pre-seed and seed stage funding',
    status: 'Open',
  },
  {
    title: 'Community Grants',
    amount: '$1,000 - $10,000',
    description: 'For local community initiatives',
    status: 'Open',
  },
  {
    title: 'Cultural Preservation',
    amount: '$5,000 - $50,000',
    description: 'Arts, heritage, and language programs',
    status: 'Open',
  },
]

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pars-gold/10 border border-pars-gold/20 mb-8">
            <span className="text-pars-gold text-sm font-medium">MIGA Protocol Treasury</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Invest in Community</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Supporting Persian entrepreneurs, students, and community projects with transparent funding
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pars-gold to-pars-bronze text-pars-deep font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply for Funding
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/grants"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
                <p className="text-pars-gold text-xs mt-1">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Funding Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div key={program.title} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full">
                    {program.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-pars-gold font-bold mb-2">{program.amount}</p>
                <p className="text-white/60 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <div className="bg-pars-deep/50 rounded-lg p-6 text-center mb-6">
              <p className="text-xl md:text-2xl text-white/90">
                Empowering the Persian diaspora through transparent, community-driven investment in education, entrepreneurship, and cultural preservation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-pars-gold font-semibold mb-2">Transparent</p>
                <p className="text-white/70 text-sm">
                  All funding decisions and disbursements are visible on-chain.
                </p>
              </div>
              <div>
                <p className="text-pars-gold font-semibold mb-2">Community-Governed</p>
                <p className="text-white/70 text-sm">
                  PARS token holders vote on major funding allocations.
                </p>
              </div>
              <div>
                <p className="text-pars-gold font-semibold mb-2">Impact-Focused</p>
                <p className="text-white/70 text-sm">
                  Every grant is tracked for measurable community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">What We Fund</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6">
                <feature.icon className="w-10 h-10 text-pars-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to make an impact?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Whether you're a student seeking education funding, an entrepreneur with a vision,
            or a community leader with a project - we want to hear from you.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pars-gold to-pars-bronze text-pars-deep font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold"
          >
            Start Your Application
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
