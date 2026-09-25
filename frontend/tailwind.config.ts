// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background & Surface
        background: '#FFFFFF',
        surface: '#F6F8F7',
        'surface-raised': '#EDF2F1',
        border: '#E1E7E5',

        // Primary (Teal - HoDee mark)
        primary: {
          DEFAULT: '#088386',
          hover: '#076F71',
          pressed: '#065C5E',
          ink: '#FFFFFF',
        },

        // Accent (Yellow - HoDee smile)
        accent: {
          DEFAULT: '#FEC938',
          hover: '#FFD65C',
          pressed: '#E8B32A',
          ink: '#1F2937',
        },

        // Text
        text: {
          primary: '#14231F',
          secondary: '#5B6866',
          disabled: '#A9B2B0',
        },

        // Surface Disabled
        'surface-disabled': '#EDEFEE',

        // Danger (Errors)
        danger: {
          DEFAULT: '#DC4C4C',
          surface: '#FBEAEA',
        },
      },

      fontFamily: {
        sans: ['"Prompt"', '"Noto Sans Thai"', 'system-ui', 'sans-serif'],
        body: ['"Sarabun"', '"Noto Sans Thai"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Display
        'display-lg': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-md': ['36px', { lineHeight: '1.15', fontWeight: '600' }],

        // Heading
        'heading-lg': ['26px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['20px', { lineHeight: '1.35', fontWeight: '600' }],

        // UI
        'ui-md': ['15px', { lineHeight: '1.4', fontWeight: '500' }],
        'ui-sm': ['13px', { lineHeight: '1.35', fontWeight: '500' }],

        // Body
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.55', fontWeight: '400' }],

        // Label
        'label-md': ['12px', { lineHeight: '1.2', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '1.2', fontWeight: '600' }],
      },

      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        10: '40px',
        20: '80px',
      },

      borderRadius: {
        sm: '6px',
        md: '8px',
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 3px rgba(20,35,31,0.08)',
        md: '0 12px 28px rgba(20,35,31,0.14)',
      },
    },
  },
  plugins: [],
} satisfies Config