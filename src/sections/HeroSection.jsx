import { motion } from 'framer-motion'
import { ChevronRight, Zap, Users, Award } from 'lucide-react'

const MotionDiv = motion.div

function HeroSection() {
  const stats = [
    { label: 'Years Active', value: '25+', icon: Award },
    { label: 'Systems Deployed', value: '5000+', icon: Zap },
    { label: 'Expert Team', value: '150+', icon: Users },
  ]

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-brand-surface">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Semi-transparent overlay to ensure text readability & cool-blue theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f9ff]/40 to-[#eef4ff]/60 backdrop-blur-[1px]" />
      </div>

      {/* Premium Blueprint Grid + Soft Tech Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 animate-fade-in mix-blend-multiply" />
        <div className="absolute inset-0 bg-tech-texture opacity-10" />
      </div>

      {/* Soft Blue Radial Gradients */}
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      {/* Animated Light Rays (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[120vw] h-[60vh] -translate-x-1/2 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        {/* Hero Content */}
        <div className="site-container min-h-screen flex flex-col justify-center items-start py-20 lg:py-0">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Main Headline / Hero Logo */}
            <div className="mb-6 block">
              <div className="inline-block rounded-[2.25rem] bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] p-5 transition-all duration-500 hover:bg-white/30 hover:backdrop-blur-2xl">
                <img 
                  src="/volto-logo-hero.png" 
                  alt="Volto Control" 
                  className="rounded-2xl h-20 sm:h-28 lg:h-36 w-auto object-contain opacity-95 drop-shadow-md"
                />
              </div>
            </div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-white/70 backdrop-blur-md mb-8 shadow-card"
            >
              <Zap size={16} className="text-brand-accent" />
              <span className="text-sm font-medium text-brand-text">Industrial Intelligence Platform</span>
            </motion.div>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-brand-muted mb-8 leading-relaxed max-w-2xl">
              Turn-key electrical systems, automation platforms, and industrial control solutions trusted by leading manufacturers worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px #3b82f6aa' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
              >
                Explore Solutions
                <ChevronRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.04,
                  borderColor: '#3b82f6',
                  backgroundColor: 'rgba(59, 130, 246, 0.07)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-brand-border rounded-xl text-brand-accent font-semibold hover:border-brand-accent transition-all duration-300 bg-white/80 backdrop-blur-md"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-brand-border bg-white/70 backdrop-blur-md shadow-card hover:shadow-glow-cyan hover:border-brand-accent transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
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
