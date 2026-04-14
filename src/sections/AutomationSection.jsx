import { motion } from 'framer-motion'
import { Cpu, MonitorSmartphone, RadioTower, Workflow, Zap, Radio } from 'lucide-react'
import { automationCapabilities, protocols } from '../data/siteContent'

const MotionDiv = motion.div

const flowNodes = [
  {
    id: 'field',
    label: 'Field Devices',
    icon: RadioTower,
    x: 90,
    y: 170,
    desc: 'Sensors & actuators',
  },
  {
    id: 'plc',
    label: 'PLC Layer',
    icon: Cpu,
    x: 305,
    y: 112,
    desc: 'Logic & control',
  },
  {
    id: 'scada',
    label: 'SCADA Core',
    icon: Workflow,
    x: 500,
    y: 220,
    desc: 'System orchestration',
  },
  {
    id: 'remote',
    label: 'Remote Telemetry',
    icon: MonitorSmartphone,
    x: 700,
    y: 140,
    desc: 'Distributed monitoring',
  },
]

const connections = [
  { from: flowNodes[0], to: flowNodes[1], delay: 0.1, protocol: 'PROFIBUS' },
  { from: flowNodes[1], to: flowNodes[2], delay: 0.6, protocol: 'PROFINET' },
  { from: flowNodes[2], to: flowNodes[3], delay: 1.1, protocol: 'MODBUS' },
]

function curvedPath(from, to, curve = 52) {
  const cx = (from.x + to.x) / 2
  const cy = Math.min(from.y, to.y) - curve
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`
}

function AutomationSection() {
  return (
    <section id="automation" className="relative py-24 bg-[#F0EBE1] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large mix-blend-multiply" />
      </div>

      {/* Accent glow */}
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 pb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
              Intelligent Automation Architecture
            </span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto md:mx-0">
            Real-time data flow from field devices through PLC logic, SCADA orchestration, to remote telemetry—engineered for zero-downtime operations.
          </p>
        </MotionDiv>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left: Data Flow Visualization */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(30,64,175,0.08)] p-8 overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-sm">
                <Workflow size={24} className="text-brand-accent drop-shadow-sm" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text tracking-tight">
                Data Flow Architecture
              </h3>
            </div>

            <svg viewBox="0 0 790 320" className="w-full h-auto">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection paths */}
              {connections.map((link) => (
                <g key={`${link.from.id}-${link.to.id}`}>
                  {/* Glow effect */}
                  <path
                    d={curvedPath(link.from, link.to)}
                    stroke="#06b6d4"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.1"
                  />
                  {/* Main path */}
                  <path
                    d={curvedPath(link.from, link.to)}
                    stroke="url(#flowGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                  />
                  {/* Animated pulse */}
                  <motion.circle
                    r="3.5"
                    fill="#06b6d4"
                    opacity="0.8"
                  >
                    <animateMotion
                      dur="2.8s"
                      repeatCount="indefinite"
                      begin={`${link.delay}s`}
                      path={curvedPath(link.from, link.to)}
                    />
                  </motion.circle>

                  {/* Protocol label */}
                  <text
                    x={(link.from.x + link.to.x) / 2}
                    y={(link.from.y + link.to.y) / 2 - 20}
                    textAnchor="middle"
                    className="text-[10px] font-semibold fill-brand-accent"
                  >
                    {link.protocol}
                  </text>
                </g>
              ))}

              {/* Flow nodes */}
              {flowNodes.map((node) => {
                const Icon = node.icon
                return (
                  <g key={node.id}>
                    {/* Node glow */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="28"
                      fill="#06b6d4"
                      opacity="0.1"
                    />
                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="24"
                      fill="#0f1419"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      opacity="1"
                    />
                    {/* Icon placeholder background */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="20"
                      fill="#06b6d4"
                      opacity="0.15"
                    />
                    {/* Actual Node Icon Rendered via ForeignObject */}
                    <foreignObject x={node.x - 12} y={node.y - 12} width="24" height="24">
                      <div className="flex w-full h-full items-center justify-center text-[#38bdf8] drop-shadow-md animate-pulse duration-1000">
                        <Icon size={15} strokeWidth={2.5} />
                      </div>
                    </foreignObject>
                  </g>
                )
              })}
            </svg>

            {/* Node Labels Overlay */}
            <div className="relative -mt-48 pt-4">
              <div className="grid grid-cols-4 gap-4">
                {flowNodes.map((node) => (
                  <MotionDiv
                    key={node.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wide drop-shadow-sm">{node.label}</p>
                    <p className="text-xs text-brand-muted mt-1">{node.desc}</p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* Right: Capabilities & Protocols */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Capabilities */}
            <div className="rounded-[2rem] border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(30,64,175,0.08)] p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-sm">
                  <Zap size={24} className="text-brand-accent drop-shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-brand-text tracking-tight">
                  Core Capabilities
                </h3>
              </div>
              <ul className="space-y-3">
                {automationCapabilities.map((item, i) => (
                  <MotionDiv
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-brand-border/30 bg-white/50 hover:bg-white hover:border-brand-accent/40 shadow-sm transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-accent mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="text-sm text-brand-text font-medium">{item}</span>
                  </MotionDiv>
                ))}
              </ul>
            </div>

            {/* Protocol Stack */}
            <div className="rounded-[2rem] border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(30,64,175,0.08)] p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-sm">
                  <Radio size={24} className="text-brand-electric drop-shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-brand-text tracking-tight">
                  Protocol Standards
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {protocols.map((protocol) => (
                  <MotionDiv
                    key={protocol}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)', backgroundColor: 'rgba(255,255,255,1)' }}
                    className="px-5 py-2.5 rounded-xl border border-white/80 bg-white/60 hover:bg-white transition-all cursor-pointer shadow-sm backdrop-blur-md"
                  >
                    <span className="text-sm font-bold text-brand-accent uppercase tracking-wide drop-shadow-sm">{protocol}</span>
                  </MotionDiv>
                ))}
              </div>
              <p className="text-xs text-brand-muted mt-6 leading-relaxed">
                Multi-protocol support ensures seamless integration across legacy and modern industrial equipment ecosystems.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default AutomationSection
