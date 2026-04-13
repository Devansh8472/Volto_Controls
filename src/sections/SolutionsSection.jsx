import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Cpu, Gauge, Box, Wind, Power, Radio, Settings, Grid3x3 } from 'lucide-react'
import { manufacturingSolutions, supplySolutions } from '../data/siteContent'

const MotionDiv = motion.div

const iconMap = {
  'Power Control Centre (PCC)': Power,
  'Motor Control Centre (MCC)': Zap,
  'Smart MCC (IMCC)': Cpu,
  'Power Factor Panels (APFC)': TrendingUp,
  'Synchronizing Panels': Settings,
  'Distribution Panels': Grid3x3,
  'Switchgear, UPS, and AC Drives': Shield,
  'Diesel Generator Systems': Wind,
  'Pressure Transmitters': Gauge,
  'Level Sensors': Box,
  'Temperature Sensors': Gauge,
  'Flow Meters (Magnetic and Mass)': Radio,
}

const SolutionCard = ({ solution, delay, isSupply, index }) => {
  const Icon = iconMap[solution] || Zap
  const bgColor = isSupply ? 'from-brand-electric/10 to-brand-accent/5' : 'from-brand-accent/10 to-brand-electric/5'
  const borderColor = isSupply ? 'border-brand-electric/20' : 'border-brand-accent/20'
  
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className={`relative h-full rounded-2xl border ${borderColor} bg-gradient-to-br ${bgColor} p-6 overflow-hidden transition-all duration-300 hover:border-brand-accent/40 hover:shadow-glow`}>
        {/* Hover glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.1), transparent 80%)',
          }}
        />
        
        <div className="relative z-10">
          <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-electric/20">
            <Icon size={20} className="text-brand-accent" />
          </div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-base font-bold text-brand-text flex-1">{solution}</h3>
            <span className="text-xs font-mono text-brand-muted">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="text-xs text-brand-muted/70">Engineered component</div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </MotionDiv>
  )
}

function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 bg-brand-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
              Complete Solution Portfolio
            </span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl">
            Manufacturing-grade electrical systems and industrial automation components built for reliability, performance, and scale.
          </p>
        </MotionDiv>

        {/* Manufacturing Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-brand-accent to-transparent rounded-full" />
            Manufacturing Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingSolutions.map((solution, i) => (
              <SolutionCard key={solution} solution={solution} delay={i * 0.05} isSupply={false} index={i} />
            ))}
          </div>
        </div>

        {/* Supply Solutions */}
        <div>
          <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-brand-electric to-transparent rounded-full" />
            Supply Chain & Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplySolutions.map((solution, i) => (
              <SolutionCard key={solution} solution={solution} delay={i * 0.05 + 0.3} isSupply={true} index={manufacturingSolutions.length + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
