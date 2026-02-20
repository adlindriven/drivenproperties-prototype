/**
 * Badge — Driven Properties Design System
 *
 * Small informational labels used to communicate status, category or metadata.
 *
 * Variants:
 *   category  – warm cream pill with play icon (Luxury / Waterfront / Off-Plan)
 *   status    – colored dot + text (Ready / Off Plan / Luxury)
 *   media     – dark frosted pill for 3D / Video overlays on images
 *   verified  – gold checkmark badge
 *   trending  – amber flame badge
 *   pill      – generic neutral pill
 *
 * Usage:
 *   <Badge variant="category" icon={<PlayIcon />}>Luxury</Badge>
 *   <Badge variant="media">3D Tour</Badge>
 *   <Badge variant="status" color="green">Ready</Badge>
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Variant style maps
// ─────────────────────────────────────────────────────────────────────────────

const VARIANT_CLASSES = {
  /** Card category overlay — top-left of image */
  category:
    'bg-[#F5EFE6]/95 backdrop-blur-sm text-warm-800 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm',

  /** Dark frosted — media badges (3D / Video) */
  media:
    'bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium',

  /** Status with dot */
  status:
    'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',

  /** Gold verified */
  verified:
    'bg-accent-gold/10 text-accent-gold px-2 py-0.5 rounded-full text-xs font-semibold',

  /** Trending amber */
  trending:
    'bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-semibold',

  /** Generic neutral pill */
  pill:
    'bg-warm-100 text-warm-700 px-3 py-1 rounded-full text-xs font-medium',

  /** Active filter pill — black fill */
  'pill-active':
    'bg-warm-800 text-white px-3 py-1 rounded-full text-xs font-medium',
};

// Status dot colors
const STATUS_COLORS = {
  green:  'bg-green-500',
  amber:  'bg-amber-400',
  blue:   'bg-blue-400',
  red:    'bg-red-500',
  gray:   'bg-warm-400',
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Badge = ({
  variant = 'pill',
  color = 'gray',   // only used with variant="status"
  icon,             // optional leading icon node
  className = '',
  children,
  ...rest
}) => {
  const base = [
    'inline-flex items-center gap-1.5',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.pill,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={base} {...rest}>
      {variant === 'status' && (
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${STATUS_COLORS[color] ?? STATUS_COLORS.gray}`}
          aria-hidden="true"
        />
      )}
      {icon && variant !== 'status' && (
        <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
      )}
      {children}
    </span>
  );
};

Badge.propTypes = {
  variant:   PropTypes.oneOf([
    'category', 'media', 'status', 'verified', 'trending', 'pill', 'pill-active',
  ]),
  color:     PropTypes.oneOf(['green', 'amber', 'blue', 'red', 'gray']),
  icon:      PropTypes.node,
  className: PropTypes.string,
  children:  PropTypes.node,
};

export default Badge;
