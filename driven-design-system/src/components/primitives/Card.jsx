/**
 * Card — Driven Properties Design System
 *
 * Base card surface used for:
 *   property  – PropertyCard (full implementation in composed/)
 *   stat      – KPI / stats tile
 *   info      – inline information panel
 *   modal     – modal / sheet surface
 *
 * This primitive handles only the surface shape, elevation, hover state and
 * click behaviour. Content is always passed as children.
 *
 * Usage:
 *   <Card variant="property" onClick={handleClick} hovering={isHovered}>
 *     {children}
 *   </Card>
 *
 *   <Card variant="stat">
 *     <p className="text-2xl font-bold">8.2%</p>
 *     <p className="text-xs text-warm-400">Avg ROI</p>
 *   </Card>
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Style maps
// ─────────────────────────────────────────────────────────────────────────────

const VARIANT_CLASSES = {
  /** Full property listing card */
  property:
    'bg-white rounded-3xl overflow-hidden border border-warm-100 shadow-card ' +
    'hover:shadow-card-hover cursor-pointer',

  /** KPI / stats tile */
  stat:
    'bg-white rounded-2xl border border-warm-100 shadow-card p-5',

  /** Inline info panel */
  info:
    'bg-cream-100 rounded-2xl border border-cream-300 p-5',

  /** Modal / bottom-sheet surface */
  modal:
    'bg-white rounded-3xl shadow-modal',
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Card = React.forwardRef(function Card(
  {
    variant = 'stat',
    hovering = false,
    selected = false,
    onClick,
    className = '',
    children,
    ...rest
  },
  ref
) {
  const base = [
    'transition-all duration-300',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.stat,
    hovering || selected
      ? 'ring-2 ring-accent-gold shadow-card-hover transform scale-[1.02]'
      : '',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={base}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  variant:   PropTypes.oneOf(['property', 'stat', 'info', 'modal']),
  hovering:  PropTypes.bool,
  selected:  PropTypes.bool,
  onClick:   PropTypes.func,
  className: PropTypes.string,
  children:  PropTypes.node,
};

export default Card;
