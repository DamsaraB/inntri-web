/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5fc',
          100: '#d9eafb',
          200: '#bcdcf8',
          300: '#8ec5f3',
          400: '#58a7eb',
          500: '#1281e0',
          600: '#0f6fc4',
          700: '#0c5a9e',
          800: '#0d4c83',
          900: '#10406c',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Remapped to brand blue #1281E0 so existing cyan-* classes stay consistent
        cyan: {
          50: '#eef5fc',
          100: '#d9eafb',
          200: '#bcdcf8',
          300: '#8ec5f3',
          400: '#58a7eb',
          500: '#1281e0',
          600: '#0f6fc4',
          700: '#0c5a9e',
          800: '#0d4c83',
          900: '#10406c',
        },
        neon: {
          blue: '#1281e0',
          cyan: '#3b9aeb',
          glow: '#58a7eb',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0a0a0a',
        },
        accent: {
          50: '#eef5fc',
          100: '#d9eafb',
          200: '#bcdcf8',
          300: '#8ec5f3',
          400: '#58a7eb',
          500: '#1281e0',
          600: '#0f6fc4',
          700: '#0c5a9e',
          800: '#0d4c83',
          900: '#10406c',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f7f9fc',
          soft: '#eef5fc',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#667085',
        },
        line: {
          DEFAULT: '#e5e7eb',
        },
        brand: {
          DEFAULT: '#1281e0',
          hover: '#0f6fc4',
          soft: '#eef5fc',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        gradient: 'gradient 8s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        grid: 'grid 20s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 4px 16px rgba(8, 145, 178, 0.1)' },
          '100%': { boxShadow: '0 8px 24px rgba(8, 145, 178, 0.18)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(48px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 4px 16px rgba(18, 129, 224, 0.14)',
        'glow-lg': '0 8px 28px rgba(18, 129, 224, 0.18)',
        neon: '0 2px 12px rgba(18, 129, 224, 0.12)',
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 8px 30px rgba(15, 23, 42, 0.08)',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
