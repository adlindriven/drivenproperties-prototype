/**
 * Driven Properties — Design Token: Typography
 *
 * Defines every typographic decision: font families, scale, weights,
 * line-heights and letter-spacings. Consumed by tailwind.config.js
 * (theme.extend) and available for direct JS import.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Font Families
// ─────────────────────────────────────────────────────────────────────────────

export const fontFamily = {
  /** Primary UI font — used for all body copy, labels, UI text */
  sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  /** Display font — used for hero headlines */
  display: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
};

// ─────────────────────────────────────────────────────────────────────────────
// Type Scale
// (Tailwind names → rem values for documentation purposes)
// ─────────────────────────────────────────────────────────────────────────────

export const fontSize = {
  '2xs': ['0.625rem',  { lineHeight: '0.875rem' }], // 10px — micro labels
  'xs':  ['0.75rem',   { lineHeight: '1rem'     }], // 12px — captions, badges
  'sm':  ['0.875rem',  { lineHeight: '1.25rem'  }], // 14px — body small
  'base':['1rem',      { lineHeight: '1.5rem'   }], // 16px — body
  'lg':  ['1.125rem',  { lineHeight: '1.75rem'  }], // 18px — sub-heading
  'xl':  ['1.25rem',   { lineHeight: '1.75rem'  }], // 20px — heading 4
  '2xl': ['1.5rem',    { lineHeight: '2rem'     }], // 24px — heading 3
  '3xl': ['1.875rem',  { lineHeight: '2.25rem'  }], // 30px — heading 2
  '4xl': ['2.25rem',   { lineHeight: '2.5rem'   }], // 36px — heading 1
  '5xl': ['3rem',      { lineHeight: '1'        }], // 48px — hero sub
  '6xl': ['3.75rem',   { lineHeight: '1'        }], // 60px — hero title (approx)
};

// ─────────────────────────────────────────────────────────────────────────────
// Font Weights
// ─────────────────────────────────────────────────────────────────────────────

export const fontWeight = {
  light:    '300',
  normal:   '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
  black:    '900',
};

// ─────────────────────────────────────────────────────────────────────────────
// Letter Spacings
// ─────────────────────────────────────────────────────────────────────────────

export const letterSpacing = {
  tight:    '-0.025em',
  normal:   '0em',
  wide:     '0.025em',
  wider:    '0.05em',
  widest:   '0.25em', // hero eyebrow labels
};

// ─────────────────────────────────────────────────────────────────────────────
// Semantic Usage Reference
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Hero eyebrow    : text-xs tracking-[0.25em] font-light text-white/75 uppercase
 * Hero title      : text-4xl md:text-5xl font-light / font-bold
 * Section heading : text-2xl md:text-3xl font-bold
 * Card title      : text-[15px] font-bold leading-snug
 * Card meta       : text-xs text-warm-500
 * Price main      : text-lg font-bold
 * Price sub       : text-[11px] text-warm-400
 * Badge / pill    : text-xs font-semibold
 * Label micro     : text-[10px] text-warm-400
 * Button          : text-sm font-semibold
 */

const typography = { fontFamily, fontSize, fontWeight, letterSpacing };
export default typography;
