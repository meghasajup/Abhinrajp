/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        line: 'var(--line)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        panel: 'var(--panel)',
        field: 'var(--field)',
        accent: {
          DEFAULT: '#c9a96e',
          from: '#dfcda4',
          to: '#c9a96e'
        },
        door: {
          1: '#22304a',
          '1-dk': '#1c2840',
          2: '#4a3540',
          '2-dk': '#3f2d37',
          3: '#7a8670',
          '3-dk': '#66705d',
          4: '#a4552c',
          '4-dk': '#8c4826',
        }
      },
      fontFamily: {
        sans: ['"Onest"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'ui-sans-serif', 'system-ui', '"Segoe UI"', 'sans-serif'],
        cursive: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      borderRadius: {
        'card': '2rem',
        'card-sm': '1.25rem',
        'control': '0.875rem',
      },
      maxWidth: {
        'shell': '88rem',
      },
      boxShadow: {
        'lux': '0 20px 60px #00000014',
      }
    },
  },
  plugins: [],
}
