/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b0f1a', ink2: '#111827', panel: '#131a2b', line: '#222c44', mute: '#9aa6c3', accent: '#6d8bff', violet: '#a78bfa' },
      fontFamily: { mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'] },
    },
  },
  plugins: [],
}
