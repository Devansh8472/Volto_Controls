import { motion } from 'framer-motion'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#automation', label: 'Automation' },
  { href: '#industries', label: 'Industries' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
]

const MotionHeader = motion.header

function TopNav() {
  return (
    <MotionHeader
      className="fixed inset-x-0 top-0 z-50 border-b border-brand-border/50 bg-brand-bg/80 backdrop-blur-2xl"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="site-container flex h-20 items-center justify-between gap-5 px-6 md:px-10">
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
              className="text-sm font-medium text-brand-muted transition-colors duration-300 hover:text-brand-accent relative group"
            >
              {item.label}
              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-accent to-brand-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-accent to-brand-electric text-brand-bg text-sm font-bold transition-all duration-300 hover:shadow-glow hover:opacity-90 flex-shrink-0"
        >
          Contact Us
        </a>
      </div>
    </MotionHeader>
  )
}

export default TopNav
