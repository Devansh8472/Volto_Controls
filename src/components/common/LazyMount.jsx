import { useRef } from 'react'
import { useInView } from 'framer-motion'

function LazyMount({
  children,
  placeholderHeight = 480,
  rootMargin = '320px 0px',
  eager = false,
}) {
  const mountRef = useRef(null)
  const inView = useInView(mountRef, {
    once: true,
    margin: rootMargin,
    amount: 0.1,
  })
  const isMounted = eager || inView

  return (
    <div ref={mountRef}>
      {isMounted ? (
        children
      ) : (
        <div
          className="site-container rounded-3xl border border-white/5 bg-white/[0.02]"
          style={{ height: placeholderHeight }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export default LazyMount
