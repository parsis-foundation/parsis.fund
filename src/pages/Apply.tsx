import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FileText, User, Building, Mail, Info } from 'lucide-react'

const grantTypes = [
  { value: 'scholarship', label: 'Student Scholarship' },
  { value: 'startup', label: 'Startup Funding' },
  { value: 'community', label: 'Community Project' },
  { value: 'infrastructure', label: 'Infrastructure Grant' },
  { value: 'humanitarian', label: 'Humanitarian Aid' },
  { value: 'diaspora', label: 'Diaspora Initiative' },
]

export function Apply() {
  const { isConnected } = useAccount()
  const [grantType, setGrantType] = useState('')
  const [step, setStep] = useState(1)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Apply for Funding</span>
          </h1>
          <p className="text-white/60 mb-8">
            Submit your application for grants, scholarships, or startup funding.
          </p>

          {!isConnected ? (
            <div className="glass-card p-12 text-center">
              <FileText className="w-12 h-12 text-pars-gold mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
              <p className="text-white/60 mb-6">
                Connect your wallet to start your application. Your wallet address will be used
                for identity verification and fund disbursement.
              </p>
              <ConnectButton />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= s
                          ? 'bg-pars-gold text-pars-deep'
                          : 'bg-white/10 text-white/40'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-full h-0.5 mx-2 ${
                          step > s ? 'bg-pars-gold' : 'bg-white/10'
                        }`}
                        style={{ width: '100px' }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="glass-card p-6">
                  <h2 className="font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-pars-gold" />
                    Select Grant Type
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {grantTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setGrantType(type.value)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          grantType === type.value
                            ? 'border-pars-gold bg-pars-gold/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <p className="font-semibold">{type.label}</p>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!grantType}
                    className="w-full mt-6 py-3 bg-gradient-to-r from-pars-gold to-pars-bronze text-pars-deep font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="glass-card p-6">
                  <h2 className="font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-pars-gold" />
                    Personal Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your full legal name"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Location</label>
                      <input
                        type="text"
                        placeholder="City, Country"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Organization (if applicable)</label>
                      <input
                        type="text"
                        placeholder="Your organization or institution"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-gradient-to-r from-pars-gold to-pars-bronze text-pars-deep font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="glass-card p-6">
                  <h2 className="font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-pars-gold" />
                    Project Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Project Title</label>
                      <input
                        type="text"
                        placeholder="Brief title for your project"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Funding Amount Requested (USD)</label>
                      <input
                        type="number"
                        placeholder="10000"
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Project Description</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your project, its goals, and expected impact..."
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">How will you use the funds?</label>
                      <textarea
                        rows={3}
                        placeholder="Detailed breakdown of fund allocation..."
                        className="w-full bg-pars-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pars-gold resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-pars-gold/10 rounded-lg flex items-start gap-2">
                    <Info className="w-4 h-4 text-pars-gold mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-white/70">
                      Applications are reviewed by the community committee. Large grants (over $25,000)
                      require a community vote by PARS token holders.
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button className="flex-1 py-3 bg-gradient-to-r from-pars-gold to-pars-bronze text-pars-deep font-semibold rounded-lg hover:opacity-90 transition-opacity">
                      Submit Application
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-5 h-5 text-pars-gold" />
                  <h3 className="font-semibold">Need Help?</h3>
                </div>
                <p className="text-white/60 text-sm">
                  Questions about the application process? Contact us at{' '}
                  <a href="mailto:grants@parsis.fund" className="text-pars-gold hover:underline">
                    grants@parsis.fund
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
