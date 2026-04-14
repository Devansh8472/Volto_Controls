/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium White + Cool Blue Palette
        brand: {
          // Backgrounds
          bg: '#ffffff', // Pure white
          surface: '#f5f9ff', // Light blue tint
          surfaceAlt: '#eef4ff', // Alternate light blue
          border: '#e2e8f0', // Very light blue-gray

          // Text
          text: '#0f172a', // Dark navy
          muted: '#475569', // Muted slate
          secondary: '#64748b', // Subtle slate

          // Accents
          accent: '#3b82f6', // Cool blue
          accentDeep: '#1e40af', // Deep blue
          cyanGlow: '#06b6d4', // Cyan glow

          // Utilities
          success: '#10b981',
          danger: '#ef4444',
          warning: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
        display: ['Inter', 'Satoshi', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['32px', '40px'],
        '4xl': ['44px', '52px'],
        '5xl': ['56px', '64px'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(59, 130, 246, 0.12)', // soft blue glow
        'glow-cyan': '0 0 32px 0 rgba(6, 182, 212, 0.18)',
        'glow-subtle': '0 0 16px rgba(59, 130, 246, 0.08)',
        card: '0 4px 32px 0 rgba(30, 64, 175, 0.08)',
        panel: '0 8px 32px 0 rgba(30, 64, 175, 0.10)',
        'inner-glow': 'inset 0 0 32px rgba(59, 130, 246, 0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #f5f9ff 0%, #eef4ff 100%)',
        'blueprint-grid': 'repeating-linear-gradient(0deg, #e2e8f0 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, #e2e8f0 0 1px, transparent 1px 32px)',
        'radial-blue': 'radial-gradient(circle at 60% 40%, #3b82f6 0%, #eef4ff 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(245,249,255,0.8) 100%)',
        'tech-texture': 'url(/src/assets/tech-texture.svg)',
      },
      backgroundSize: {
        'grid-small': '40px 40px',
        'grid-large': '80px 80px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 32px rgba(6, 182, 212, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 48px rgba(6, 182, 212, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'scan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
      },
    },
  },
  plugins: [],
}
