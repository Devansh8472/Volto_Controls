import { motion } from 'framer-motion'
import { globalPresence } from '../data/siteContent'
import { worldMapPath } from '../data/worldMapPath'
import { Globe, MapPin, Zap } from 'lucide-react'

const indiaPoint = globalPresence.find((item) => item.country === 'India')
const connectedPoints = globalPresence.filter((item) => item.country !== 'India')
const MotionDiv = motion.div

function curvedLink(from, to, depth = 52) {
  const midX = (from.x + to.x) / 2
  const midY = Math.min(from.y, to.y) - depth
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`
}

function GlobalPresenceSection() {
  return (
    <section id="global" className="relative py-24 bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large mix-blend-multiply" />
      </div>

      {/* Glow elements */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl opacity-10"
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
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/30">
              <Globe size={20} className="text-brand-accent" />
            </div>
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Global Footprint</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
              Multi-Regional Delivery Network
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto md:mx-0">
            Engineering support and active deployment infrastructure across South Asia, Middle East, and Africa—enabling rapid response and localized expertise.
          </p>
        </MotionDiv>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Map (Spans 2 columns on large screens) */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8 overflow-hidden"
          >
            <div className="rounded-xl bg-gradient-to-br from-brand-surface to-brand-panel p-6 border border-brand-border/50">
              <svg viewBox="0 0 1000 460" className="w-full">
                <defs>
                  {/* Map background gradient */}
                  <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
                  </linearGradient>

                  {/* Connection gradient */}
                  <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Map background */}
                <rect width="1000" height="460" fill="url(#mapBg)" />

                {/* World map */}
                <path
                  d={worldMapPath}
                  fill="#0f1419"
                  stroke="#1e262f"
                  strokeWidth="0.8"
                />

                {/* Connection lines (animated) */}
                {connectedPoints.map((point, index) => (
                  <path
                    key={`link-${point.country}`}
                    d={curvedLink(indiaPoint, point, 42 + index * 6)}
                    stroke="url(#linkGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                ))}

                {/* Location points */}
                {globalPresence.map((point) => {
                  const isIndia = point.country === 'India'
                  return (
                    <g key={point.country}>
                      {/* Outer pulse ring */}
                      {isIndia && (
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="18"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="1.5"
                          opacity="0.3"
                        />
                      )}

                      {/* Center point */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isIndia ? 7 : 5}
                        fill={isIndia ? '#06b6d4' : '#0ea5e9'}
                        filter="url(#glow)"
                      />

                      {/* Outer ring */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isIndia ? 14 : 10}
                        fill="none"
                        stroke={isIndia ? 'rgba(6, 182, 212, 0.3)' : 'rgba(14, 165, 233, 0.2)'}
                        strokeWidth="1"
                      />
                    </g>
                  )
                })}
              </svg>
            </div>
          </MotionDiv>

          {/* Right Panel - Location Cards */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-brand-text mb-1">
                Operational Hubs
              </h3>
              <p className="text-sm text-brand-muted mb-6">
                6 active deployment and support centers
              </p>

              <div className="space-y-3">
                {globalPresence.map((location, index) => {
                  const isIndia = location.country === 'India'
                  return (
                    <MotionDiv
                      key={location.country}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`rounded-lg border p-4 transition-all duration-300 cursor-pointer group ${
                        isIndia
                          ? 'border-brand-accent/40 bg-brand-accent/10 hover:border-brand-accent/60 hover:bg-brand-accent/15'
                          : 'border-brand-border hover:border-brand-accent/30 hover:bg-brand-panel/80'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className={`flex-shrink-0 mt-0.5 ${isIndia ? 'text-brand-accent' : 'text-brand-electric'}`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-brand-text text-sm">
                            {location.country}
                          </p>
                          <p className="text-xs text-brand-muted mt-0.5">
                            {isIndia ? 'Primary Hub' : 'Deployment Center'}
                          </p>
                        </div>
                      </div>
                    </MotionDiv>
                  )
                })}
              </div>
            </div>

            {/* Impact metrics */}
            <div className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={18} className="text-brand-electric" />
                <h4 className="font-bold text-brand-text text-sm">Coverage Metrics</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-brand-muted mb-1">Regions</p>
                  <p className="text-2xl font-bold text-brand-accent">3</p>
                </div>
                <div>
                  <p className="text-xs text-brand-muted mb-1">Active Centers</p>
                  <p className="text-2xl font-bold text-brand-electric">6</p>
                </div>
                <div>
                  <p className="text-xs text-brand-muted mb-1">Support Coverage</p>
                  <p className="text-2xl font-bold text-brand-accent">24/7</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresenceSection
