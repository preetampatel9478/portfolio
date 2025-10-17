import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          400: '#94a3b8',
          300: '#cbd5e1',
          100: '#f1f5f9',
        },
      },
      boxShadow: {
        'teal-glow': '0 0 20px rgba(20, 184, 166, 0.25)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
