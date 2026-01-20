import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  location: string
  fundedAmount: number
  status: 'active' | 'completed' | 'funded'
  description: string
  grantee: string
  date: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Persian Language School - Los Angeles',
    category: 'Education',
    location: 'Los Angeles, CA',
    fundedAmount: 15000,
    status: 'active',
    description: 'Weekend Persian language and culture classes for children ages 5-15.',
    grantee: 'Iranian American Cultural Society',
    date: 'Q1 2026',
  },
  {
    id: 2,
    title: 'Tech Startup: MedPars Health Platform',
    category: 'Startup',
    location: 'San Francisco, CA',
    fundedAmount: 50000,
    status: 'funded',
    description: 'Telemedicine platform connecting Persian-speaking patients with Persian-speaking doctors.',
    grantee: 'MedPars Inc.',
    date: 'Q1 2026',
  },
  {
    id: 3,
    title: 'Student Scholarship - MIT Engineering',
    category: 'Scholarship',
    location: 'Cambridge, MA',
    fundedAmount: 20000,
    status: 'active',
    description: 'Graduate scholarship for computational biology research.',
    grantee: 'Amir M.',
    date: 'Q1 2026',
  },
  {
    id: 4,
    title: 'Community Center Renovation',
    category: 'Infrastructure',
    location: 'Toronto, Canada',
    fundedAmount: 35000,
    status: 'active',
    description: 'Upgrading facilities for the Persian Cultural Center of Toronto.',
    grantee: 'PCC Toronto',
    date: 'Q1 2026',
  },
]

const statusConfig = {
  active: { color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'In Progress' },
  completed: { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Completed' },
  funded: { color: 'text-pars-gold', bg: 'bg-pars-gold/10', label: 'Just Funded' },
}

export function Projects() {
  const totalFunded = projects.reduce((sum, p) => sum + p.fundedAmount, 0)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-text">Funded Projects</span>
              </h1>
              <p className="text-white/60">
                See the impact of community investment across the diaspora.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-4 text-center">
              <p className="text-2xl font-bold gradient-text">{projects.length}</p>
              <p className="text-sm text-white/60">Projects Funded</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-pars-gold">
                ${(totalFunded / 1000).toFixed(0)}K
              </p>
              <p className="text-sm text-white/60">Total Distributed</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">
                {projects.filter(p => p.status === 'active').length}
              </p>
              <p className="text-sm text-white/60">Active Projects</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-green-400">4</p>
              <p className="text-sm text-white/60">Countries Reached</p>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project) => {
              const config = statusConfig[project.status]

              return (
                <div key={project.id} className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${config.bg} ${config.color}`}>
                          {config.label}
                        </span>
                        <span className="text-xs text-white/40">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.grantee}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold gradient-text">
                        ${project.fundedAmount.toLocaleString()}
                      </p>
                      <p className="text-xs text-white/40">Funded</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty State Note */}
          <div className="mt-8 p-6 border border-white/10 rounded-lg text-center">
            <p className="text-white/60">
              These are example projects. Real funded projects will appear here as the fund launches.
            </p>
            <a
              href="https://parsis.fund/apply"
              className="inline-flex items-center gap-1 text-pars-gold hover:underline mt-2"
            >
              Apply for funding <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
