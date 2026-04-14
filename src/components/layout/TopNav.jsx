import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#automation', label: 'Automation' },
  { href: '#industries', label: 'Industries' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
]

function TopNav() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Un-scrolled Top Fade (Fades towards above) */}
      <div 
        className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100/95 via-slate-100/50 to-transparent backdrop-blur-[2px] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      <div
        className={`pointer-events-auto relative z-10 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-5 h-[60px] w-[92%] max-w-4xl rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.06)] px-8'
            : 'mt-0 h-[80px] w-full max-w-[1240px] bg-transparent px-6 md:px-10'
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-xs tracking-[0.3em] text-brand-text transition-colors duration-300 hover:text-brand-accent flex-shrink-0"
        >
          <span className="text-brand-accent">◆</span> VOLTO CONTROL
        </a>

        {/* Navigation Links - Desktop */}
        <nav className="hidden items-center gap-8 lg:flex lg:flex-1 lg:justify-center xl:gap-10">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-brand-accent relative group text-brand-text`}
            >
              {item.label}
              {/* Hover underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
            isScrolled
              ? 'bg-brand-accent text-white shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
              : 'bg-white/80 backdrop-blur-md text-brand-text shadow-sm border border-white/50 hover:bg-white hover:shadow-md'
          }`}
        >
          Contact Us
        </a>
      </div>
    </motion.header>
  )
}

export default TopNav
