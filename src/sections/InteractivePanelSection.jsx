import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MotionDiv = motion.div

// Component SVG illustrations
const PanelDoor = ({ className = '' }) => (
  <svg viewBox="0 0 400 600" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="doorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect width="400" height="600" fill="url(#doorGradient)" stroke="#cbd5e1" strokeWidth="3" rx="8" />
    
    {/* Mounting holes */}
    {[40, 160, 280, 360].map((x) => (
      <g key={`mh-${x}`}>
        <circle cx={x} cy="40" r="8" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx={x} cy="560" r="8" fill="none" stroke="#cbd5e1" strokeWidth="2" />
      </g>
    ))}
    
    {/* Ventilation slots */}
    {[80, 150, 220, 290, 360].map((y, i) => (
      <rect key={`vent-${i}`} x="50" y={y} width="300" height="4" rx="2" fill="#94a3b8" opacity="0.6" />
    ))}
    
    {/* Door handle */}
    <g>
      <rect x="320" y="280" width="50" height="40" rx="6" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="340" cy="300" r="6" fill="#94a3b8" />
    </g>
  </svg>
)

const CircuitBreakerBank = ({ className = '' }) => (
  <svg viewBox="0 0 500 600" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="breakerBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
    <rect width="500" height="600" fill="url(#breakerBg)" stroke="#cbd5e1" strokeWidth="2" rx="4" />
    
    {/* Breaker rows */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <g key={`breaker-${row}-${col}`}>
          {/* Breaker body */}
          <rect x={40 + col * 110} y={60 + row * 130} width="90" height="100" rx="4" fill="white" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Breaker toggle */}
          <rect x={50 + col * 110} y={75 + row * 130} width="20" height="28" rx="2" fill="#94a3b8" />
          <circle cx={60 + col * 110} cy={89 + row * 130} r="3" fill="#0f172a" />
          
          {/* Trip indicator */}
          <circle cx={70 + col * 110} cy={125 + row * 130} r="5" fill="none" stroke="#ef4444" strokeWidth="1" />
          
          {/* Terminal connections */}
          <rect x={48 + col * 110} y={150 + row * 130} width="24" height="8" rx="2" fill="#94a3b8" />
          <rect x={60 + col * 110} y={150 + row * 130} width="24" height="8" rx="2" fill="#94a3b8" />
        </g>
      )),
    )}
  </svg>
)

const RelayMatrix = ({ className = '' }) => (
  <svg viewBox="0 0 600 400" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="relayBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#relayBg)" stroke="#cbd5e1" strokeWidth="2" rx="4" />
    
    {/* Relay modules */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <g key={`relay-${i}`}>
        {/* Coil */}
        <rect x={45 + i * 95} y="50" width="50" height="35" rx="2" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
        <text x={70 + i * 95} y="72" fontSize="8" fill="#0f172a" textAnchor="middle" fontWeight="bold">
          COIL
        </text>
        
        {/* Terminal pins */}
        {[0, 1, 2, 3].map((p) => (
          <g key={`pin-${i}-${p}`}>
            <rect x={40 + i * 95 + p * 13} y="100" width="8" height="24" fill="#cbd5e1" />
            <circle cx={44 + i * 95 + p * 13} cy="127" r="3" fill="#0f172a" />
          </g>
        ))}
        
        {/* Status LED */}
        <circle cx={50 + i * 95} cy="145" r="4" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      </g>
    ))}
  </svg>
)

const PLCController = ({ className = '' }) => (
  <svg viewBox="0 0 500 350" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="plcBg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
    </defs>
    <rect width="500" height="350" fill="url(#plcBg)" stroke="#cbd5e1" strokeWidth="2" rx="4" />
    
    {/* Main CPU module */}
    <rect x="30" y="30" width="180" height="140" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
    <text x="120" y="55" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">
      CPU
    </text>
    
    {/* I/O modules */}
    {[0, 1, 2].map((i) => (
      <g key={`io-${i}`}>
        <rect x={240 + i * 85} y="30" width="75" height="140" rx="3" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x={277.5 + i * 85} y="55" fontSize="11" fontWeight="bold" fill="#0f172a" textAnchor="middle">
          I/O {i + 1}
        </text>
        
        {/* Terminal blocks */}
        {[0, 1, 2, 3].map((t) => (
          <g key={`term-${i}-${t}`}>
            <rect x={250 + i * 85} y={75 + t * 16} width="55" height="12" rx="2" fill="#f0f4f8" stroke="#cbd5e1" strokeWidth="0.5" />
            <circle cx={255 + i * 85} cy={81 + t * 16} r="1.5" fill="#0f172a" />
            <circle cx={295 + i * 85} cy={81 + t * 16} r="1.5" fill="#0f172a" />
          </g>
        ))}
      </g>
    ))}
    
    {/* Status indicators */}
    <g>
      <circle cx="60" cy="200" r="6" fill="none" stroke="#ef4444" strokeWidth="1.5" />
      <text x="75" y="205" fontSize="10" fill="#0f172a">
        PWR
      </text>
      
      <circle cx="160" cy="200" r="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="175" y="205" fontSize="10" fill="#0f172a">
        RUN
      </text>
      
      <circle cx="260" cy="200" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
      <text x="275" y="205" fontSize="10" fill="#0f172a">
        COM
      </text>
    </g>
    
    {/* Connector port */}
    <rect x="350" y="180" width="120" height="60" rx="4" fill="white" stroke="#cbd5e1" strokeWidth="2" />
    <text x="410" y="215" fontSize="11" fontWeight="bold" fill="#0f172a" textAnchor="middle">
      ETHERNET
    </text>
  </svg>
)

const BusbarAssembly = ({ className = '' }) => (
  <svg viewBox="0 0 800 150" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="busbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    
    {/* Main busbars */}
    <g>
      {/* Busbar A */}
      <rect x="20" y="20" width="760" height="18" rx="4" fill="url(#busbarGrad)" stroke="#b45309" strokeWidth="1.5" />
      <text x="410" y="35" fontSize="10" fontWeight="bold" fill="#78350f" textAnchor="middle">
        BUSBAR A - 100A
      </text>
      
      {/* Busbar B */}
      <rect x="20" y="55" width="760" height="18" rx="4" fill="url(#busbarGrad)" stroke="#b45309" strokeWidth="1.5" />
      <text x="410" y="70" fontSize="10" fontWeight="bold" fill="#78350f" textAnchor="middle">
        BUSBAR B - 80A
      </text>
      
      {/* Busbar GND */}
      <rect x="20" y="90" width="760" height="18" rx="4" fill="#d1d5db" stroke="#6b7280" strokeWidth="1.5" />
      <text x="410" y="105" fontSize="10" fontWeight="bold" fill="#374151" textAnchor="middle">
        GROUND BUSBAR
      </text>
    </g>
    
    {/* Connection points */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <g key={`conn-${i}`}>
        <circle cx={80 + i * 95} cy="38" r="4" fill="white" stroke="#b45309" strokeWidth="1" />
        <circle cx={80 + i * 95} cy="64" r="4" fill="white" stroke="#b45309" strokeWidth="1" />
        <circle cx={80 + i * 95} cy="99" r="3" fill="white" stroke="#6b7280" strokeWidth="1" />
      </g>
    ))}
  </svg>
)

const TerminalBlocks = ({ className = '' }) => (
  <svg viewBox="0 0 400 300" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="termBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#termBg)" stroke="#cbd5e1" strokeWidth="2" rx="4" />
    
    {/* Terminal blocks */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <g key={`term-${row}-${col}`}>
          {/* Block */}
          <rect x={30 + col * 70} y={30 + row * 62} width="55" height="50" rx="2" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Terminal slots */}
          {[0, 1].map((slot) => (
            <g key={`slot-${slot}`}>
              <rect x={38 + col * 70} y={38 + row * 62 + slot * 18} width="16" height="14" rx="1" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5" />
              <circle cx={46 + col * 70} cy={45 + row * 62 + slot * 18} r="1.5" fill="#0f172a" />
            </g>
          ))}
          
          {/* Wire ports */}
          <circle cx={73 + col * 70} cy={48 + row * 62} r="2.5" fill="none" stroke="#06b6d4" strokeWidth="1" />
        </g>
      )),
    )}
  </svg>
)


function InteractivePanelSection() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(stageRef)

      // Initial states
      gsap.set(q('.layer-door'), { y: 0, opacity: 1, z: 100 })
      gsap.set(q('.layer-breakers'), { y: 0, opacity: 0, z: 80 })
      gsap.set(q('.layer-relays'), { y: 0, opacity: 0, z: 60 })
      gsap.set(q('.layer-plc'), { y: 0, opacity: 0, z: 40 })
      gsap.set(q('.layer-busbars'), { y: 0, opacity: 0, z: 20 })
      gsap.set(q('.layer-terminals'), { y: 0, opacity: 0, z: 10 })

      // Main explode animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1.2,
            markers: false,
          },
          defaults: { ease: 'power2.inOut' },
        })
        // Door recedes
        .to(q('.layer-door'), { y: -120, opacity: 0.4, duration: 1.2 }, 0)
        
        // Breaker bank explodes outward & down
        .to(q('.layer-breakers'), { y: 80, opacity: 1, scale: 1.05, duration: 1.4 }, 0.1)
        
        // Relay matrix spreads
        .to(q('.layer-relays'), { y: 160, opacity: 1, scale: 1.04, duration: 1.4 }, 0.2)
        
        // PLC moves up
        .to(q('.layer-plc'), { y: -140, opacity: 1, scale: 1.03, duration: 1.4 }, 0.15)
        
        // Busbars expand down
        .to(q('.layer-busbars'), { y: 240, opacity: 1, scale: 1.06, duration: 1.5 }, 0.25)
        
        // Terminal blocks spread
        .to(q('.layer-terminals'), { y: 300, opacity: 1, scale: 1.02, duration: 1.4 }, 0.3)

      // Pulsing LED effects
      gsap.to(q('.component-led'), {
        opacity: 0.3,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        stagger: 0.12,
        ease: 'power1.inOut',
      })
    }, stageRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="interactive-panel"
      ref={sectionRef}
      className="section-shell relative bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-1/4 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-[5%] h-96 w-96 rounded-full bg-cyan-200/15 blur-3xl" />
      </div>

      <div className="site-container relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Exploded View / Internal Architecture</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-brand-text md:text-5xl">
            Scroll to Explode the Control Panel Architecture
          </h2>
          <p className="mt-5 text-base text-brand-muted md:text-lg">
            Watch as the enclosure disassembles layer by layer, revealing the intricate placement of PLCs, circuit breakers, relay modules, and power distribution networks.
          </p>
        </div>

        <div className="relative mt-16 h-[300vh]">
          <div className="sticky top-20 flex items-center justify-center">
            <div
              ref={stageRef}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl border border-brand-line/30 bg-gradient-to-br from-slate-50 to-blue-50/30 shadow-2xl overflow-hidden"
            >
              {/* Front Door - Initial visible layer */}
              <div className="layer-door absolute inset-0">
                <PanelDoor className="h-full w-full" />
              </div>

              {/* Circuit Breaker Bank */}
              <div className="layer-breakers absolute inset-0 flex items-center justify-center">
                <div className="w-5/6 h-5/6">
                  <CircuitBreakerBank className="h-full w-full" />
                </div>
              </div>

              {/* Relay Matrix */}
              <div className="layer-relays absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-2/3">
                  <RelayMatrix className="h-full w-full" />
                </div>
              </div>

              {/* PLC Controller */}
              <div className="layer-plc absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-1/2">
                  <PLCController className="h-full w-full" />
                </div>
              </div>

              {/* Busbar Assembly */}
              <div className="layer-busbars absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-1/4">
                  <BusbarAssembly className="h-full w-full" />
                </div>
              </div>

              {/* Terminal Blocks */}
              <div className="layer-terminals absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-1/2">
                  <TerminalBlocks className="h-full w-full" />
                </div>
              </div>

              {/* Component LED indicators - animate separately */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="component-led absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg" style={{ top: '25%', left: '30%' }} />
                <div className="component-led absolute w-2 h-2 rounded-full bg-green-400 shadow-lg" style={{ top: '35%', left: '45%' }} />
                <div className="component-led absolute w-2 h-2 rounded-full bg-red-400 shadow-lg" style={{ top: '45%', left: '20%' }} />
                <div className="component-led absolute w-2 h-2 rounded-full bg-amber-400 shadow-lg" style={{ top: '55%', left: '70%' }} />
                <div className="component-led absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg" style={{ top: '65%', left: '40%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            { title: 'Circuit Breakers', desc: '16x DIN-mount breakers for selective load protection and fault isolation' },
            { title: 'PLC Controller', desc: 'Advanced CPU with I/O modules for real-time automation and logic control' },
            { title: 'Distribution Network', desc: 'High-current busbars and terminal blocks for efficient power routing' },
          ].map((item, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-bold text-brand-text">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{item.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractivePanelSection
