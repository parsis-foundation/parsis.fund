import { Link } from 'react-router-dom'
import { GraduationCap, Rocket, Users, Building, Heart, Globe, ArrowRight } from 'lucide-react'

const grantCategories = [
  {
    icon: GraduationCap,
    title: 'Student Scholarships',
    description: 'Educational funding for Persian students pursuing undergraduate, graduate, and doctoral degrees.',
    amount: '$5,000 - $25,000',
    eligibility: [
      'Persian heritage or strong community ties',
      'Enrolled in accredited institution',
      'Demonstrated financial need',
      'Academic excellence or potential',
    ],
    deadline: 'Rolling applications',
  },
  {
    icon: Rocket,
    title: 'Startup Accelerator',
    description: 'Pre-seed and seed funding for Persian entrepreneurs building innovative companies.',
    amount: '$10,000 - $100,000',
    eligibility: [
      'Persian founder or co-founder',
      'Pre-seed or seed stage',
      'Scalable business model',
      'Commitment to community impact',
    ],
    deadline: 'Quarterly cohorts',
  },
  {
    icon: Users,
    title: 'Community Initiatives',
    description: 'Support for local projects that strengthen Persian communities worldwide.',
    amount: '$1,000 - $10,000',
    eligibility: [
      'Community-based organization',
      'Clear community benefit',
      'Local leadership involvement',
      'Measurable outcomes',
    ],
    deadline: 'Monthly review',
  },
  {
    icon: Building,
    title: 'Cultural Infrastructure',
    description: 'Funding for cultural centers, community spaces, and digital platforms.',
    amount: '$5,000 - $50,000',
    eligibility: [
      'Registered nonprofit or community org',
      'Clear sustainability plan',
      'Community governance structure',
      'Long-term impact focus',
    ],
    deadline: 'Bi-annual cycles',
  },
  {
    icon: Heart,
    title: 'Humanitarian Relief',
    description: 'Emergency and ongoing support for Persians in crisis situations.',
    amount: 'Variable',
    eligibility: [
      'Verified humanitarian need',
      'Established relief organization',
      'Transparent fund usage',
      'Rapid deployment capability',
    ],
    deadline: 'Emergency basis',
  },
  {
    icon: Globe,
    title: 'Diaspora Projects',
    description: 'Cross-border initiatives connecting Persian communities globally.',
    amount: '$5,000 - $25,000',
    eligibility: [
      'Multi-region collaboration',
      'Digital or physical infrastructure',
      'Sustainable operating model',
      'Community engagement plan',
    ],
    deadline: 'Quarterly review',
  },
]

export function Grants() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Grant Programs</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore our funding categories and find the right program for your project,
              education, or community initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {grantCategories.map((grant) => (
              <div key={grant.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pars-gold/20 to-pars-bronze/20 flex items-center justify-center flex-shrink-0">
                    <grant.icon className="w-6 h-6 text-pars-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
                    <p className="text-pars-gold font-bold mb-2">{grant.amount}</p>
                    <p className="text-white/60 text-sm mb-4">{grant.description}</p>

                    <div className="mb-4">
                      <p className="text-sm text-white/40 mb-2">Eligibility:</p>
                      <ul className="text-sm text-white/60 space-y-1">
                        {grant.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pars-gold rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">{grant.deadline}</span>
                      <Link
                        to="/apply"
                        className="text-pars-gold text-sm hover:underline flex items-center gap-1"
                      >
                        Apply <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pars-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pars-gold font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Apply</h4>
                <p className="text-white/60 text-sm">Submit your application with required documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pars-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pars-gold font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Review</h4>
                <p className="text-white/60 text-sm">Committee reviews and may request additional info</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pars-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pars-gold font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Decision</h4>
                <p className="text-white/60 text-sm">Community vote or committee approval</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pars-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pars-gold font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Funding</h4>
                <p className="text-white/60 text-sm">Receive funds and begin your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
