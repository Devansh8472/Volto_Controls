import { motion } from 'framer-motion'
import { Zap, GitFork, Link2, Mail } from 'lucide-react'

const MotionDiv = motion.div

function FooterSection() {
  const year = new Date().getFullYear()

  const footerLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Automation', href: '#automation' },
    { label: 'Industries', href: '#industries' },
    { label: 'Quality', href: '#quality' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-brand-border/50 bg-brand-bg/50 backdrop-blur-md">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="site-container relative z-10 py-16 px-6 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-brand-accent" />
              <span className="font-bold text-brand-text">VOLTO CONTROL</span>
            </div>
            <p className="text-sm text-brand-muted">
              Engineering excellence for industrial automation and electrical control systems.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-brand-text mb-4">Product</h4>
                <ul className="space-y-2">
                  {footerLinks.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-text mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.slice(3).map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold text-brand-text mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg border border-brand-border bg-brand-panel/50 text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-brand-border bg-brand-panel/50 text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Link2 size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-brand-border bg-brand-panel/50 text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitFork size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
              © {year} Volto Control LLP — Engineered for Precision
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-brand-muted/60 hover:text-brand-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-brand-muted/60 hover:text-brand-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </MotionDiv>
    </footer>
  )
}

export default FooterSection
