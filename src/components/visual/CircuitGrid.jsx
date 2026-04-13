function CircuitGrid({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="circuit-grid absolute inset-0 opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(24,215,255,0.17),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(92,246,167,0.12),transparent_35%),radial-gradient(circle_at_50%_95%,rgba(24,215,255,0.08),transparent_50%)]" />
      <div className="scan-sweep absolute inset-x-0 top-0 h-1/3" />
      <div className="absolute inset-0">
        <span className="absolute left-[12%] top-[28%] h-px w-44 bg-brand-accent/40 shadow-[0_0_14px_rgba(24,215,255,0.5)]" />
        <span className="absolute right-[16%] top-[40%] h-px w-52 bg-brand-cyan/30 shadow-[0_0_14px_rgba(79,242,255,0.35)]" />
        <span className="absolute bottom-[22%] left-[34%] h-px w-60 bg-brand-green/25 shadow-[0_0_14px_rgba(92,246,167,0.35)]" />
      </div>
    </div>
  )
}

export default CircuitGrid
