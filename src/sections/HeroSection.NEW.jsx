import { motion } from 'framer-motion'
import { ChevronRight, Zap, Users, Award } from 'lucide-react'

const MotionDiv = motion.div

function HeroSection() {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6 },
    }),
  }

  const stats = [
    { label: 'Years Active', value: '25+', icon: Award },
    { label: 'Systems Deployed', value: '5000+', icon: Zap },
    { label: 'Expert Team', value: '150+', icon: Users },
  ]

  return (
    <section id="hero" className="relative w-full min-h-screen bg-brand-bg overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-small" />
      </div>

      {/* Radial Glow Effect (top-right) */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
        }}
      />

      {/* Radial Glow Effect (bottom-left) */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* Hero Content */}
        <div className="site-container min-h-screen flex flex-col justify-center items-start py-20 lg:py-0">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-panel/40 backdrop-blur-md mb-6"
            >
              <Zap size={16} className="text-brand-accent" />
              <span className="text-sm font-medium text-brand-text">Industrial Intelligence Platform</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-brand-text mb-6">
              Engineered for
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
                  Precision at Scale
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-brand-muted mb-8 leading-relaxed max-w-2xl">
              Turn-key electrical systems, automation platforms, and industrial control solutions trusted by leading manufacturers worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 48px rgba(6, 182, 212, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-electric text-brand-bg font-semibold rounded-lg flex items-center justify-center gap-2 shadow-glow-electric transition-all duration-300"
              >
                Explore Solutions
                <ChevronRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(6, 182, 212, 0.8)',
                  backgroundColor: 'rgba(6, 182, 212, 0.05)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-brand-border rounded-lg text-brand-text font-semibold hover:border-brand-accent transition-all duration-300"
              >
                Book Consultation
              </motion.button>
            </div>
          </MotionDiv>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <MotionDiv
                  key={stat.label}
                  custom={i}
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-4 p-4 rounded-lg border border-brand-border/30 bg-brand-panel/20 backdrop-blur-sm hover:bg-brand-panel/40 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-muted uppercase tracking-wide font-semibold">{stat.label}</p>
                    <p className="text-2xl font-bold text-brand-accent mt-1">{stat.value}</p>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </div>

        {/* Visual Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      </div>
    </section>
  )
}

export default HeroSection
