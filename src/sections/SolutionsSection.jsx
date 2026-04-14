import { motion } from 'framer-motion'
import { Zap, Shield, Cpu, Gauge, Box, Wind, Power, Radio, Settings, Grid3x3, Activity, Server, Lightbulb, MonitorCheck, Layers, Route } from 'lucide-react'
import { manufacturingSolutions, supplySolutions } from '../data/siteContent'

const MotionDiv = motion.div

const iconMap = {
  'Power Control Centre (PCC)': Power,
  'Motor Control Centre (MCC)': Zap,
  'Smart MCC (IMCC)': Cpu,
  'Power Factor Panels (APFC)': Activity,
  'Bus Duct Systems': Route,
  'Synchronizing Panels': Settings,
  'Distribution Panels': Grid3x3,
  'PLC Control Panels': Server,
  'Relay and Control Panels': Layers,
  'Lighting Panels': Lightbulb,
  'Testing and Control Desks': MonitorCheck,
  // Supply solutions
  'Switchgear, UPS, and AC Drives': Shield,
  'Diesel Generator Systems': Wind,
  'Pressure Transmitters': Gauge,
  'Level Sensors': Box,
  'Temperature Sensors': Gauge,
  'Flow Meters (Magnetic and Mass)': Radio,
}

const SolutionCard = ({ solution, delay, isSupply, index }) => {
  const Icon = iconMap[solution] || Zap
  const iconBg = isSupply ? 'bg-gradient-to-br from-brand-electric/10 to-brand-accent/10 border-brand-electric/20' : 'bg-gradient-to-br from-brand-accent/10 to-brand-electric/10 border-brand-accent/20'
  
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      className="group hover-lift h-full"
    >
      <div className="relative h-full rounded-[1.5rem] glass-card p-7 overflow-hidden flex flex-col items-start shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.2)]">
        {/* Subtle hover gradient inside */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col h-full w-full">
          <div className={`mb-6 inline-flex p-3.5 rounded-2xl border ${iconBg} shadow-sm group-hover:scale-[1.15] origin-left transition-transform duration-[400ms] ease-apple`}>
            <Icon size={26} className="text-brand-accent drop-shadow-sm" />
          </div>
          <div className="flex items-start justify-between mb-3 w-full gap-2">
            <h3 className="text-[1.1rem] leading-snug font-bold text-brand-text flex-1 tracking-tight">{solution}</h3>
            <span className="text-[11px] font-mono text-brand-muted/60 font-bold bg-brand-surface px-2 py-1 rounded-full border border-brand-border shadow-inner mt-1">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="mt-auto pt-4 relative">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6]/70 group-hover:text-brand-accent transition-colors duration-300 relative z-10 bg-white/50 px-3 py-1.5 rounded-md">
              {isSupply ? 'Supply' : 'Engineered'}
            </span>
          </div>
        </div>

        {/* Bottom animated accent line */}
        <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-brand-accent to-brand-electric group-hover:w-full transition-all duration-[600ms] ease-apple" />
      </div>
    </MotionDiv>
  )
}

function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 bg-brand-surface overflow-hidden">
      {/* Premium Blueprint Grid */}
      <div className="absolute inset-0 z-0 bg-blueprint-grid opacity-[0.15] mix-blend-multiply" />

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
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
              Complete Solution Portfolio
            </span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto md:mx-0">
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
