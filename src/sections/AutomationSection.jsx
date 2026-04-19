import { motion } from 'framer-motion'
import abbLogo from '../assets/ABB.webp'
import exideLogo from '../assets/Exide.webp'

const MotionDiv = motion.div

function AutomationSection() {
  return (
    <section id="products" className="relative py-24 bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large mix-blend-multiply" />
      </div>

      <div
        className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />

      <div className="site-container relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
              Wide Range of Pannels
            </span>
          </h2>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(30,64,175,0.08)] p-6 sm:p-8"
        >
          <ul className="space-y-4">
            <li className="flex items-center gap-3 p-4 rounded-xl border border-brand-border/40 bg-white/70">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0" />
              <span className="text-brand-text text-base sm:text-lg font-semibold">DG</span>
            </li>

            <li className="flex items-center gap-3 p-4 rounded-xl border border-brand-border/40 bg-white/70">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0" />
              <span className="text-brand-text text-base sm:text-lg font-semibold">
                ABB UPS - Authorised Channel Partner
              </span>
              <img src={abbLogo} alt="ABB" className="h-10 sm:h-12 w-auto object-contain ml-auto shrink-0" />
            </li>

            <li className="flex items-center gap-3 p-4 rounded-xl border border-brand-border/40 bg-white/70">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0" />
              <span className="text-brand-text text-base sm:text-lg font-semibold">
                Battery - Authorised Partner with
              </span>
              <img src={exideLogo} alt="Exide" className="h-10 sm:h-12 w-auto object-contain ml-auto shrink-0" />
            </li>
          </ul>
        </MotionDiv>
      </div>
    </section>
  )
}

export default AutomationSection
