import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield } from 'lucide-react'
import { qualityChecks } from '../data/siteContent'

const MotionDiv = motion.div

const stepIcons = [
  { icon: CheckCircle2, color: 'text-blue-400' },
  { icon: Shield, color: 'text-purple-400' },
  { icon: Zap, color: 'text-amber-400' },
  { icon: Shield, color: 'text-cyan-400' },
  { icon: CheckCircle2, color: 'text-green-400' },
  { icon: Zap, color: 'text-pink-400'  },
]

function QualitySection() {
  return (
    <section id="quality" className="relative py-24 bg-brand-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Glow */}
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
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
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
              Rigorous Quality Pipeline
            </span>
          </h2>
          <p className="text-lg text-brand-muted">
            Every system passes through a comprehensive testing sequence—from raw materials to final validation—ensuring zero-compromise reliability.
          </p>
        </MotionDiv>

        {/* Timeline Visualization */}
        <div className="mb-20">
          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block">
            <div className="relative h-2 bg-gradient-to-r from-brand-accent/10 to-brand-electric/10 rounded-full mb-16 overflow-hidden">
              {/* Animated progress bar */}
              <motion.div
                className="absolute h-full bg-gradient-to-r from-brand-accent to-brand-electric rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
              />
            </div>

            {/* Step nodes */}
            <div className="grid grid-cols-6 gap-4 relative">
              {qualityChecks.map((check, index) => {
                const StepIcon = stepIcons[index].icon
                return (
                  <MotionDiv
                    key={check.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    {/* Step circle */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-brand-border bg-brand-panel/50 backdrop-blur-sm flex items-center justify-center hover:border-brand-accent/60 transition-colors duration-300">
                        <StepIcon size={24} className={`${stepIcons[index].color} transition-colors`} />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-bg text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-brand-text mb-2">
                        {check.title}
                      </h3>
                      <p className="text-xs text-brand-muted/70 leading-relaxed">
                        {check.detail}
                      </p>
                    </div>
                  </MotionDiv>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="lg:hidden space-y-6">
            {qualityChecks.map((check, index) => {
              const StepIcon = stepIcons[index].icon
              return (
                <MotionDiv
                  key={check.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < qualityChecks.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent/50 to-transparent" />
                  )}

                  {/* Step circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-accent bg-brand-accent/10 flex items-center justify-center">
                      <StepIcon size={24} className={stepIcons[index].color} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-bg text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-brand-text mb-1">{check.title}</h3>
                    <p className="text-sm text-brand-muted">{check.detail}</p>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-brand-border/30">
          {[
            { stat: '100%', label: 'Comprehensive Testing' },
            { stat: '6', label: 'Validation Stages' },
            { stat: '99.8%', label: 'Pass Rate' },
          ].map((item, i) => (
            <MotionDiv
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-brand-accent mb-2">{item.stat}</p>
              <p className="text-sm text-brand-muted">{item.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualitySection
