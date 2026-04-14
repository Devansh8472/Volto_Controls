import { motion } from 'framer-motion'

const clientsList = [
  { name: 'Patanjali', domain: 'patanjaliayurved.net' },
  { name: 'Coca-Cola', domain: 'coca-cola.com' },
  { name: 'Mother Dairy', domain: 'motherdairy.com' },
  { name: 'Parle Agro', domain: 'parleagro.com' },
  { name: 'Cadbury', domain: 'cadbury.com' },
  { name: 'Pearl Dairy', domain: 'pearldairy.com' },
  { name: 'Food & Biotech Engineers', domain: 'fbeindia.com' },
  { name: 'Britannia', domain: 'britannia.co.in' },
  { name: 'Tang', domain: 'mondelezinternational.com' },
  { name: 'Unilever', domain: 'unilever.com' },
  { name: 'Amul', domain: 'amul.com' },
  { name: 'Trigonal Mobering', domain: 'trigonal.in' },
  { name: 'Horlicks', domain: 'horlicks.in' },
  { name: 'Kissan', domain: 'kissan.in' },
  { name: 'Alchem', domain: 'alchem.com' },
  { name: 'Parico India', domain: 'parico.in' },
  { name: 'Parsons', domain: 'parsons.com' },
  { name: 'Bajaj Hindusthan Ltd', domain: 'bajajhindusthan.com' },
]

const productPartnersList = [
  { name: 'Siemens', domain: 'siemens.com' },
  { name: 'Schneider Electric', domain: 'se.com' },
  { name: 'Danfoss', domain: 'danfoss.com' },
  { name: 'Delta', domain: 'deltaww.com' },
  { name: 'Fuji Electric', domain: 'fujielectric.com' },
  { name: 'Mitsubishi Electric', domain: 'mitsubishielectric.com' },
  { name: 'Yaskawa', domain: 'yaskawa.com' },
  { name: 'ABB', domain: 'abb.com' },
  { name: 'Allen-Bradley', domain: 'rockwellautomation.com' },
]

const processPartnersList = [
  { name: 'Yokogawa', domain: 'yokogawa.com' },
  { name: 'Endress+Hauser', domain: 'endress.com' },
  { name: 'CHINO', domain: 'chino.co.jp' },
  { name: 'ABB', domain: 'abb.com' },
]

function ScrollingRow({ items, title, subtitle, duration, reverse = false }) {
  // Ensure we have a thick robust loop so that there is no empty space.
  const trackItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center mb-8 px-4 text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#334155] tracking-tight">{title}</h3>
        {subtitle && (
          <p className="mt-3 text-xs md:text-sm font-bold tracking-[0.15em] text-[#1e88e5] uppercase bg-[#1e88e5]/10 px-5 py-1.5 rounded-full border border-[#1e88e5]/20 shadow-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative w-full overflow-hidden flex items-center h-[120px] md:h-[140px]">
        {/* Soft edge gradients to mask the scroll entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max py-2"
        >
          {trackItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex items-center justify-start mx-3 md:mx-4 w-[280px] md:w-[340px] px-6 h-[80px] md:h-[100px] rounded-2xl bg-white shadow-[0_4px_16px_rgba(30,64,175,0.05)] border border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(30,136,229,0.15)] hover:border-[#1e88e5]/40 transition-all duration-300 group hover:scale-[1.04]"
            >
              <img
                src={`https://logo.clearbit.com/${item.domain}`}
                alt={item.name}
                loading="lazy"
                className="w-10 h-10 md:w-14 md:h-14 object-contain mr-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm flex-shrink-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="whitespace-normal break-words text-sm md:text-base font-bold text-[#475569] leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ClientsSection() {
  return (
    <section id="clients-partners" className="relative py-28 bg-[#E8EDE3] overflow-hidden">
      {/* Light subtle textured background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large mix-blend-multiply" />
      </div>

      <div className="site-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-[#1e88e5] rounded-full mb-6" />
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#1e88e5] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(30,136,229,0.3)]">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Empowering the world's finest brands with robust product integration and cutting-edge process automation.
          </p>
        </motion.div>

        {/* Marquee Grids */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12 md:space-y-16"
        >
          {/* Few Of Our Clients */}
          <ScrollingRow 
            items={clientsList} 
            title="Few of Our Clients" 
            duration={70} 
            reverse={false} 
          />

          {/* Elegant Divider */}
          <div className="w-full flex justify-center">
            <div className="w-2/3 max-w-xl border-t border-slate-200" />
          </div>

          {/* Product Integration */}
          <ScrollingRow 
            items={productPartnersList} 
            title="Product Integration" 
            subtitle="VFD, Soft Starter, PLC & SCADA" 
            duration={45} 
            reverse={true} 
          />

          {/* Elegant Divider */}
          <div className="w-full flex justify-center">
            <div className="w-1/3 max-w-md border-t border-slate-200" />
          </div>

          {/* Process Automation */}
          <ScrollingRow 
            items={processPartnersList} 
            title="Process Automation" 
            duration={35} 
            reverse={false} 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
