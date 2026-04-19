import { motion } from 'framer-motion'
import patanjaliLogo from '../assets/patanjali.webp'
import cocaColaLogo from '../assets/coca cola.webp'
import motherDairyLogo from '../assets/mother dairy.webp'
import parleAgroLogo from '../assets/parleagro.webp'
import cadburyLogo from '../assets/cadbury.webp'
import pearlDairyLogo from '../assets/pearl dairy.webp'
import fbeLogo from '../assets/FBE.webp'
import britanniaLogo from '../assets/britannia.webp'
import tangLogo from '../assets/tang.webp'
import unileverLogo from '../assets/unilever.webp'
import amulLogo from '../assets/Amul.webp'
import horlicksLogo from '../assets/horlicks.webp'
import kissanLogo from '../assets/kissan.webp'
import alchemLogo from '../assets/alchem.webp'
import parsonsLogo from '../assets/parsons.webp'
import bajajHindusthanLogo from '../assets/bajaj_hindustan.webp'
import siemensLogo from '../assets/siemens.webp'
import schneiderLogo from '../assets/schneider.webp'
import danfossLogo from '../assets/danfoss.webp'
import deltaLogo from '../assets/delta_logo.webp'
import fujiElectricLogo from '../assets/fuji electric.webp'
import mitsubishiElectricLogo from '../assets/mitsubishi electric.webp'
import yaskawaLogo from '../assets/yaskawa.webp'
import abbLogo from '../assets/ABB.webp'
import allenBradleyLogo from '../assets/allen-bradley.webp'
import yokogawaLogo from '../assets/yokogawa.webp'
import chinoLogo from '../assets/chino.webp'

const allClientsList = [
  { name: 'Patanjali', logo: patanjaliLogo },
  { name: 'Coca-Cola', logo: cocaColaLogo },
  { name: 'Mother Dairy', logo: motherDairyLogo },
  { name: 'Parle Agro', logo: parleAgroLogo },
  { name: 'Cadbury', logo: cadburyLogo },
  { name: 'Pearl Dairy', logo: pearlDairyLogo },
  { name: 'Food & Biotech Engineers', logo: fbeLogo },
  { name: 'Britannia', logo: britanniaLogo },
  { name: 'Tang', logo: tangLogo },
  { name: 'Unilever', logo: unileverLogo },
  { name: 'Amul', logo: amulLogo },
  { name: 'Horlicks', logo: horlicksLogo },
  { name: 'Kissan', logo: kissanLogo },
  { name: 'Alchem', logo: alchemLogo },
  { name: 'Parsons', logo: parsonsLogo },
  { name: 'Bajaj Hindusthan Ltd', logo: bajajHindusthanLogo },
  { name: 'Siemens', logo: siemensLogo },
  { name: 'Schneider Electric', logo: schneiderLogo },
  { name: 'Danfoss', logo: danfossLogo },
  { name: 'Delta', logo: deltaLogo },
  { name: 'Fuji Electric', logo: fujiElectricLogo },
  { name: 'Mitsubishi Electric', logo: mitsubishiElectricLogo },
  { name: 'Yaskawa', logo: yaskawaLogo },
  { name: 'ABB', logo: abbLogo },
  { name: 'Allen-Bradley', logo: allenBradleyLogo },
  { name: 'Yokogawa', logo: yokogawaLogo },
  { name: 'CHINO', logo: chinoLogo },
]

function ScrollingRow({ items, title, subtitle, duration, reverse = false }) {
  // Ensure we have a thick robust loop so that there is no empty space.
  const trackItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center mb-8 px-4 text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 tracking-tight">{title}</h3>
        {subtitle && (
          <p className="mt-3 text-xs md:text-sm font-bold tracking-[0.15em] text-[#1e88e5] uppercase bg-[#1e88e5]/10 px-5 py-1.5 rounded-full border border-[#1e88e5]/20 shadow-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative w-full overflow-hidden flex items-center h-[120px] md:h-[140px]">
        {/* Soft edge gradients to mask the scroll entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#fefce8] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#fefce8] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max py-2"
        >
          {trackItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex items-center justify-start mx-3 md:mx-4 w-[280px] md:w-[340px] px-6 h-[80px] md:h-[100px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-200/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-blue-300/60 transition-all duration-300 group hover:scale-[1.04]"
            >
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="w-10 h-10 md:w-14 md:h-14 object-contain mr-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm flex-shrink-0"
              />
              <span className="whitespace-normal break-words text-sm md:text-base font-bold text-gray-700 leading-tight">
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
    <section id="clients-partners" className="relative py-28 bg-gradient-to-br from-[#fefce8] via-[#fef9c3] to-[#fef08a] overflow-hidden">
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
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Empowering the world's finest brands with robust product integration and cutting-edge process automation.
          </p>
        </motion.div>

        {/* Marquee Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Few Of Our Clients */}
          <ScrollingRow 
            items={allClientsList} 
            title="Few of Our Clients" 
            duration={120} 
            reverse={false} 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
