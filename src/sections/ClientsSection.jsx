import { motion } from 'framer-motion'
import { Award, Check, Shield, TrendingUp } from 'lucide-react'
import { clientSectors } from '../data/siteContent'

const MotionDiv = motion.div

const credibilityMetrics = [
  { value: '5000+', label: 'Systems Deployed', icon: TrendingUp },
  { value: '99.8%', label: 'Uptime Record', icon: Shield },
  { value: '25 Years', label: 'Industry Leadership', icon: Award },
  { value: '600+', label: 'Major Projects', icon: Check },
]

function LogoMark({ name }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <span className="inline-flex size-14 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10 text-sm font-bold tracking-wider text-brand-accent group-hover:border-brand-accent/60 group-hover:bg-brand-accent/20 transition-all duration-300">
      {initials}
    </span>
  )
}

function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 bg-brand-surface overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
              Trusted by Leaders
            </span>
          </h2>
          <p className="text-lg text-brand-muted">
            Partnering with industry leaders across manufacturing, supply, and critical infrastructure sectors where reliability is non-negotiable.
          </p>
        </MotionDiv>

        {/* Credibility Metrics */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {credibilityMetrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <MotionDiv
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-7 hover:bg-brand-panel/70 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-brand-accent/10">
                    <Icon size={20} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-mono text-brand-muted/60">0{i + 1}</span>
                </div>
                <p className="text-3xl font-bold text-brand-accent mb-2">{metric.value}</p>
                <p className="text-sm text-brand-muted">{metric.label}</p>
              </MotionDiv>
            )
          })}
        </div>

        {/* Client Sectors Carousel */}
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-brand-accent to-transparent rounded-full" />
            Served Sectors
          </h3>

          <div className="relative rounded-2xl border border-brand-border bg-brand-panel/30 backdrop-blur-sm overflow-hidden">
            <div className="flex overflow-x-auto gap-4 p-8 sm:p-10 scrollbar-hide">
              {clientSectors.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.05 }}
                  className="group flex-shrink-0 flex items-center gap-4 rounded-xl border border-brand-border/50 bg-brand-panel/60 hover:bg-brand-panel hover:border-brand-accent/40 transition-all duration-300 px-6 py-4"
                >
                  <LogoMark name={client.name} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand-text truncate">
                      {client.name}
                    </p>
                    <p className="text-xs text-brand-muted mt-1">
                      {client.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-surface via-brand-surface/50 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mt-16 pt-16 border-t border-brand-border/30">
          <h3 className="text-xl font-bold text-brand-text mb-8">Industry Certifications & Standards</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['ISO 9001', 'CE Certified', 'IEC 61010', 'NEMA Rated', 'UL Listed', 'RoHS'].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-brand-border/50 bg-brand-accent/5 p-4 text-center hover:bg-brand-accent/10 transition-colors duration-300"
              >
                <Shield size={20} className="mx-auto text-brand-accent mb-2" />
                <p className="text-xs font-semibold text-brand-text">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
