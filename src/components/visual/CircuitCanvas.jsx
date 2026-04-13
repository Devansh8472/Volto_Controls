import { useEffect, useRef } from 'react'

const LINE_COUNT = 34
const NODE_COUNT = 22

function createScene(width, height) {
  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
  }))

  const lines = Array.from({ length: LINE_COUNT }, () => {
    const from = Math.floor(Math.random() * nodes.length)
    let to = Math.floor(Math.random() * nodes.length)
    if (to === from) to = (to + 1) % nodes.length

    return {
      from,
      to,
      phase: Math.random(),
      speed: 0.08 + Math.random() * 0.18,
    }
  })

  return { nodes, lines }
}

function CircuitCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const dpr = Math.min(window.devicePixelRatio || 1, 1.8)
    let width = 0
    let height = 0
    let rafId = 0
    let lastTime = 0
    let scene = null

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scene = createScene(width, height)
    }

    const drawFrame = (time) => {
      if (!scene) return
      const t = time * 0.001
      const delta = Math.min(0.04, (time - lastTime) * 0.001 || 0.016)
      lastTime = time

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.88)'
      ctx.fillRect(0, 0, width, height)

      scene.nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < -50 || node.x > width + 50) node.vx *= -1
        if (node.y < -50 || node.y > height + 50) node.vy *= -1
      })

      scene.lines.forEach((line, index) => {
        line.phase = (line.phase + delta * line.speed) % 1
        const from = scene.nodes[line.from]
        const to = scene.nodes[line.to]

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = 'rgba(79, 242, 255, 0.12)'
        ctx.lineWidth = 1
        ctx.stroke()

        const pulse = line.phase
        const px = from.x + (to.x - from.x) * pulse
        const py = from.y + (to.y - from.y) * pulse
        const pulseGlow = 0.35 + 0.65 * Math.sin(t * 1.8 + index)

        ctx.beginPath()
        ctx.arc(px, py, 1.5 + pulseGlow, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79, 242, 255, ${0.16 + pulseGlow * 0.3})`
        ctx.fill()
      })

      scene.nodes.forEach((node, index) => {
        const glow = 0.35 + 0.65 * Math.sin(t * 1.5 + index * 0.37)
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.2 + glow * 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(92, 246, 167, ${0.06 + glow * 0.16})`
        ctx.fill()
      })
    }

    const loop = (time) => {
      if (!mediaQuery.matches) {
        drawFrame(time)
        rafId = window.requestAnimationFrame(loop)
      }
    }

    resize()
    if (!mediaQuery.matches) {
      rafId = window.requestAnimationFrame(loop)
    }

    const onReducedMotionChange = () => {
      if (mediaQuery.matches) {
        window.cancelAnimationFrame(rafId)
        drawFrame(performance.now())
      } else {
        lastTime = performance.now()
        rafId = window.requestAnimationFrame(loop)
      }
    }

    window.addEventListener('resize', resize)
    mediaQuery.addEventListener('change', onReducedMotionChange)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      mediaQuery.removeEventListener('change', onReducedMotionChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}

export default CircuitCanvas
