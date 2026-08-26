import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        bricolage: ['var(--font-bricolage)', ...fontFamily.sans],
        lora: ['var(--font-lora)', ...fontFamily.serif],
        playfair: ['var(--font-lora)', ...fontFamily.serif],
        courier_prime: ['var(--font-bricolage)', ...fontFamily.sans],
        dm_sans: ['var(--font-lora)', ...fontFamily.serif],
        dm_serif_display: ['var(--font-bricolage)', ...fontFamily.sans],
        roboto_condensed: ['var(--font-bricolage)', ...fontFamily.sans],
      },
      colors: {
        // Dusty Mulberry / Stormy Blue palette
        mulberry: '#A67CA4',
        mulberryHover: '#8F688D',
        stormy: '#6A8CA9',
        plum: '#857A9E',
        slateRose: '#C9A9B8',
        silver: '#CBD3D8',
        silverSoft: '#E4E9EC',
        // Semantic aliases (legacy names keep working)
        cream: '#CBD3D8',
        cream2: '#E4E9EC',
        terra: '#A67CA4',
        terraHover: '#8F688D',
        olive: '#6A8CA9',
        sand: '#C9A9B8',
        faint: '#B8C2C9',
        paper: '#CBD3D8',
        paperHover: '#E4E9EC',
        ink: '#1A1410',
        inkMuted: '#4A4550',
        rule: '#857A9E',
        academic: '#A67CA4',
        academicHover: '#8F688D',
        discordPurple: '#A67CA4',
        discordText: '#A67CA4',
        discordPurpleHover: '#8F688D',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config

export default config
