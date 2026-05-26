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
        // Newspaper / textbook stack
        playfair: ['var(--font-playfair)', ...fontFamily.serif],
        courier_prime: ['var(--font-courier-prime)', 'ui-monospace', 'monospace'],
        dm_sans: ['var(--font-dm-sans)', ...fontFamily.sans],
        // Aliases the existing codebase already references, repointed at the
        // new newspaper stack so existing class names inherit the new look.
        dm_serif_display: ['var(--font-playfair)', ...fontFamily.serif],
        roboto_condensed: ['var(--font-dm-sans)', ...fontFamily.sans],
        // Legacy
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        // Newspaper / textbook palette
        cream: '#F6F1E9',
        cream2: '#EDE7DB',
        terra: '#B85C2A',
        terraHover: '#8E471E',
        olive: '#5E6B38',
        sand: '#C49A52',
        faint: '#D8D0C2',
        // Semantic tokens already used across the codebase repointed to the
        // newspaper palette so existing components pick up the new look.
        paper: '#F6F1E9',
        paperHover: '#EDE7DB',
        ink: '#1A1410',
        inkMuted: '#4A3F35',
        rule: '#C8BFB0',
        academic: '#B85C2A',
        academicHover: '#8E471E',
        // Legacy brand tokens kept for backwards compatibility.
        discordPurple: '#B85C2A',
        discordText: '#B85C2A',
        discordPurpleHover: '#8E471E',

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
