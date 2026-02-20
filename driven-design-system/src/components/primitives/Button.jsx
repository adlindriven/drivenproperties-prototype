/**
 * Button — Driven Properties Design System
 *
 * Variants: primary | secondary | ghost | danger | whatsapp | icon
 * Sizes: sm | md | lg | icon-sm | icon-md | icon-lg
 *
 * Usage:
 *   <Button variant="primary" size="md">Browse Properties</Button>
 *   <Button variant="icon" size="icon-md" aria-label="Search"><SearchIcon /></Button>
 *   <Button variant="whatsapp" size="md">WhatsApp Agent</Button>
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Style maps
// ─────────────────────────────────────────────────────────────────────────────

const VARIANT_CLASSES = {
  /** Black fill — primary CTA */
  primary:
    'bg-warm-800 text-white hover:bg-warm-900 active:scale-95 shadow-sm',

  /** Gold fill — investment / highlight CTA */
  gold:
    'bg-accent-gold text-white hover:bg-accent-gold-dark active:scale-95 shadow-sm',

  /** White fill + border — secondary action */
  secondary:
    'bg-white text-warm-800 border border-warm-200 hover:border-warm-400 hover:bg-warm-50 active:scale-95',

  /** No fill — low-priority action */
  ghost:
    'bg-transparent text-warm-600 hover:text-warm-900 hover:bg-warm-50 active:scale-95',

  /** Destructive — confirmations, remove */
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-sm',

  /** WhatsApp branded button */
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20c05e] active:scale-95 shadow-sm',

  /** Icon-only — renders as a circle */
  icon:
    'bg-white text-warm-500 border border-warm-200 hover:border-warm-400 hover:text-warm-800 active:scale-95',

  /** Dark icon-only circle — search/confirm CTA */
  'icon-dark':
    'bg-warm-800 text-white hover:bg-warm-900 hover:scale-105 active:scale-95 shadow-lg',
};

const SIZE_CLASSES = {
  sm:       'px-4 py-2 text-xs rounded-full',
  md:       'px-6 py-2.5 text-sm rounded-full',
  lg:       'px-8 py-3.5 text-base rounded-full',
  xl:       'px-10 py-4 text-lg rounded-full',

  // Icon buttons — equal width/height circles
  'icon-sm': 'w-8 h-8 rounded-full',
  'icon-md': 'w-9 h-9 rounded-full',
  'icon-lg': 'w-12 h-12 rounded-full',
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Button = React.forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    className = '',
    children,
    ...rest
  },
  ref
) {
  const isIcon = size.startsWith('icon');

  const base = [
    'inline-flex items-center justify-center',
    'font-semibold',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
    isIcon ? '' : 'gap-2 whitespace-nowrap',
    fullWidth ? 'w-full' : '',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
    SIZE_CLASSES[size]     ?? SIZE_CLASSES.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button ref={ref} className={base} disabled={disabled || loading} {...rest}>
      {loading ? (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {!isIcon && <span>Loading…</span>}
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  variant:   PropTypes.oneOf([
    'primary', 'gold', 'secondary', 'ghost', 'danger', 'whatsapp', 'icon', 'icon-dark',
  ]),
  size:      PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'icon-sm', 'icon-md', 'icon-lg']),
  disabled:  PropTypes.bool,
  loading:   PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children:  PropTypes.node,
};

export default Button;
