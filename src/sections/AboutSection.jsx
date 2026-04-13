import { motion } from 'framer-motion'
import { Zap, GitBranch, Settings, Award } from 'lucide-react'

const lifecycle = [
  { phase: 'Design', description: 'Engineering & Architecture', icon: GitBranch },
  { phase: 'Build', description: 'Manufacturing & Testing', icon: Settings },
  { phase: 'Install', description: 'Deployment & Integration', icon: Zap },
  { phase: 'Support', description: 'Maintenance & Evolution', icon: Award },
]

const MotionDiv = motion.div

function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-brand-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* Left Column - About Text & Stats */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
                Built for Industrial Excellence
              </span>
            </h2>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              Volto Control LLP combines 20+ years of engineering expertise with a strong multidisciplinary team to deliver dependable electrical and automation ecosystems for mission-critical plants. We design with precision, build to last, and support until success.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-6 hover:border-brand-accent/40 transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-brand-accent mb-2">20+</p>
                <p className="text-sm text-brand-muted">Years of</p>
                <p className="text-sm font-semibold text-brand-text">Engineering Excellence</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-6 hover:border-brand-electric/40 transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-brand-electric mb-2">E2E</p>
                <p className="text-sm text-brand-muted">Complete</p>
                <p className="text-sm font-semibold text-brand-text">Lifecycle Delivery</p>
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Right Column - Premium Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-10"
          >
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              Core Strengths
            </h3>
            <p className="text-brand-muted mb-8">
              What sets us apart: engineering depth, quality obsession, and customer-first delivery.
            </p>

            <div className="space-y-4">
              {[
                'Multidisciplinary expertise spanning electrical, control, and automation systems',
                'ISO 9001 certified manufacturing with rigorous quality protocols',
                'Global deployment capability with localized support infrastructure',
                'Proven track record across diverse industrial verticals',
              ].map((item, i) => (
                <MotionDiv
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  </div>
                  <p className="text-sm text-brand-muted">{item}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Lifecycle Process */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-10"
        >
          <h3 className="text-2xl font-bold text-brand-text mb-2">
            End-to-End Lifecycle
          </h3>
          <p className="text-brand-muted mb-12">
            Seamless execution from concept through long-term operational excellence.
          </p>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block">
            {/* Connection line */}
            <div className="relative h-1 bg-gradient-to-r from-brand-accent/20 via-brand-accent/50 to-brand-electric/20 rounded-full mb-16 overflow-hidden">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-brand-accent to-brand-electric rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            {/* Phases */}
            <div className="grid grid-cols-4 gap-6">
              {lifecycle.map((item, index) => {
                const Icon = item.icon
                return (
                  <MotionDiv
                    key={item.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Phase marker */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-brand-border bg-brand-bg flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-brand-accent" />
                    </div>

                    {/* Phase card */}
                    <div className="rounded-xl border border-brand-border bg-brand-surface/50 p-6 text-center hover:border-brand-accent/40 transition-colors duration-300">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-brand-accent/10 border border-brand-accent/30">
                          <Icon size={24} className="text-brand-accent" />
                        </div>
                      </div>
                      <h4 className="font-bold text-brand-text mb-1">{item.phase}</h4>
                      <p className="text-xs text-brand-muted">{item.description}</p>
                    </div>
                  </MotionDiv>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="lg:hidden space-y-6">
            {lifecycle.map((item, index) => {
              const Icon = item.icon
              return (
                <MotionDiv
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < lifecycle.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent/50 to-transparent" />
                  )}

                  {/* Phase circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-accent bg-brand-accent/10 flex items-center justify-center">
                      <Icon size={20} className="text-brand-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-bg text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h4 className="font-bold text-brand-text mb-1">{item.phase}</h4>
                    <p className="text-sm text-brand-muted">{item.description}</p>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default AboutSection
