import { motion } from 'framer-motion'
import {
  Bolt,
  Building2,
  Candy,
  CircleDot,
  Milk,
  Package,
  Pill,
  Shirt,
} from 'lucide-react'
import { industries } from '../data/siteContent'

const MotionArticle = motion.article

const iconMap = {
  Milk,
  Pill,
  Bolt,
  Shirt,
  Candy,
  CircleDot,
  Package,
  Building2,
}

// Industry-specific styling
const industryStyles = {
  'Dairy': {
    accentColor: '#a78bfa',
    bgGradient: 'from-purple-500/10 to-purple-600/5',
    borderColor: 'border-purple-500/30',
    hoverBg: 'hover:bg-purple-500/5',
  },
  'Pharmaceuticals': {
    accentColor: '#34d399',
    bgGradient: 'from-emerald-500/10 to-emerald-600/5',
    borderColor: 'border-emerald-500/30',
    hoverBg: 'hover:bg-emerald-500/5',
  },
  'Power Plants': {
    accentColor: '#f59e0b',
    bgGradient: 'from-amber-500/10 to-amber-600/5',
    borderColor: 'border-amber-500/30',
    hoverBg: 'hover:bg-amber-500/5',
  },
  'Textile': {
    accentColor: '#fb7185',
    bgGradient: 'from-rose-500/10 to-rose-600/5',
    borderColor: 'border-rose-500/30',
    hoverBg: 'hover:bg-rose-500/5',
  },
  'Sugar': {
    accentColor: '#fcd34d',
    bgGradient: 'from-yellow-500/10 to-yellow-600/5',
    borderColor: 'border-yellow-500/30',
    hoverBg: 'hover:bg-yellow-500/5',
  },
  'Rubber and Tire': {
    accentColor: '#64748b',
    bgGradient: 'from-slate-500/10 to-slate-600/5',
    borderColor: 'border-slate-500/30',
    hoverBg: 'hover:bg-slate-500/5',
  },
  'Packaging and Paper': {
    accentColor: '#06b6d4',
    bgGradient: 'from-cyan-500/10 to-cyan-600/5',
    borderColor: 'border-cyan-500/30',
    hoverBg: 'hover:bg-cyan-500/5',
  },
  'Commercial Buildings': {
    accentColor: '#0ea5e9',
    bgGradient: 'from-sky-500/10 to-sky-600/5',
    borderColor: 'border-sky-500/30',
    hoverBg: 'hover:bg-sky-500/5',
  },
}

function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 bg-[#F2E8E5] overflow-hidden">
      {/* Blueprint grid + soft radial */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 mix-blend-multiply" />
        <div className="absolute top-1/2 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
      </div>

      <div className="site-container relative z-10">
        {/* Header */}
        <MotionArticle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
              Industry-Specific Expertise
            </span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto md:mx-0">
            Process-critical automation solutions engineered for the unique demands of manufacturing, energy, and facility control across diverse industrial sectors.
          </p>
        </MotionArticle>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon]
            const styles = industryStyles[industry.name] || industryStyles['Packaging and Paper']
            return (
              <MotionArticle
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6, boxShadow: '0 0 32px #3b82f633' }}
                className={`group relative rounded-2xl border border-brand-border bg-card-glass backdrop-blur-md p-8 overflow-hidden transition-all duration-300 hover:shadow-glow-cyan hover:border-brand-accent/70`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Index */}
                <span className="text-xs uppercase tracking-widest text-brand-muted/60 font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon Container */}
                <div className="mt-6 mb-6 inline-flex p-4 rounded-xl bg-brand-accent/10 group-hover:bg-brand-accent/20 transition-colors duration-300">
                  <Icon size={28} className="text-brand-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-text mb-3">
                  {industry.name}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {industry.detail}
                </p>

                {/* Hover detail arrow */}
                <div className="mt-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">Explore</span>
                  <svg className="w-4 h-4 ml-2 text-brand-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </MotionArticle>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
