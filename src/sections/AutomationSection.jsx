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
    <section id="automation" className="relative py-24 bg-brand-surface overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Accent glow */}
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
              Intelligent Automation Architecture
            </span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl">
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
            className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8 overflow-hidden"
          >
            <h3 className="text-xl font-bold text-brand-text mb-8 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-brand-accent to-transparent" />
              Data Flow Architecture
            </h3>

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
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wide">{node.label}</p>
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
            <div className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center gap-2">
                <Zap size={20} className="text-brand-accent" />
                Core Capabilities
              </h3>
              <ul className="space-y-3">
                {automationCapabilities.map((item, i) => (
                  <MotionDiv
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg border border-brand-border/30 hover:border-brand-accent/40 transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-brand-text">{item}</span>
                  </MotionDiv>
                ))}
              </ul>
            </div>

            {/* Protocol Stack */}
            <div className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center gap-2">
                <Radio size={20} className="text-brand-electric" />
                Protocol Standards
              </h3>
              <div className="flex flex-wrap gap-3">
                {protocols.map((protocol) => (
                  <MotionDiv
                    key={protocol}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.8)' }}
                    className="px-4 py-2.5 rounded-lg border border-brand-accent/30 bg-brand-accent/10 hover:bg-brand-accent/20 transition-all cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-brand-accent uppercase tracking-wide">{protocol}</span>
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
