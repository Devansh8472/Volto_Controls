/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark Industrial Palette
        brand: {
          // Primary dark colors
          bg: '#0a0e14', // Deep black
          surface: '#0f1419', // Slightly lighter black
          panel: '#13171f', // Dark graphite
          border: '#1e262f', // Dark steel
          
          // Text
          text: '#e8eef7', // Light grayish white
          muted: '#8b92a5', // Medium gray
          secondary: '#6b7280', // Darker gray
          
          // Tech accents
          accent: '#06b6d4', // Bright cyan
          electric: '#0ea5e9', // Electric blue
          steel: '#64748b', // Steel gray
          
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
        glow: '0 0 32px rgba(6, 182, 212, 0.2)',
        'glow-electric': '0 0 48px rgba(14, 165, 233, 0.25)',
        'glow-subtle': '0 0 16px rgba(6, 182, 212, 0.1)',
        panel: '0 20px 60px rgba(0, 0, 0, 0.4)',
        'panel-lg': '0 40px 100px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 32px rgba(6, 182, 212, 0.05)',
      },
      backgroundImage: {
        'panel-grad': 'linear-gradient(135deg, #13171f 0%, #0f1419 100%)',
        'grid-pattern': 'linear-gradient(90deg, rgba(30, 38, 47, 0.2) 1px, transparent 1px), linear-gradient(rgba(30, 38, 47, 0.2) 1px, transparent 1px)',
        'pulse-grad': 'linear-gradient(90deg, #06b6d4 0%, #0ea5e9 50%, #06b6d4 100%)',
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
