/**
 * Icon — Driven Properties Design System
 *
 * Centralised SVG icon library. All icons are inline SVG so they inherit
 * `color` (currentColor) and can be sized via className (w-4 h-4, etc.).
 *
 * Every icon used anywhere in the Driven Properties UI lives here.
 *
 * Usage:
 *   import Icon from '@/components/icons/Icon'
 *   <Icon name="search" className="w-5 h-5 text-warm-400" />
 *   <Icon name="whatsapp" className="w-4 h-4" />
 *
 * Adding a new icon:
 *   1. Add an entry to the ICONS object below
 *   2. The key becomes the `name` prop value
 *   3. Return a single <svg> element
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Icon definitions
// ─────────────────────────────────────────────────────────────────────────────

const ICONS = {
  // ── Navigation / UI ──────────────────────────────────────────────────────
  search: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="11" cy="11" r="8" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
    </svg>
  ),
  menu: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  x: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  chevronRight: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  chevronDown: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  arrowLeft: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
    </svg>
  ),
  arrowRight: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  ),
  filter: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
    </svg>
  ),
  check: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),

  // ── Property / Real Estate ────────────────────────────────────────────────
  building: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="3" width="20" height="18" rx="1" strokeWidth={1.5} />
      <path strokeWidth={1.5} d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2" />
    </svg>
  ),
  mapPin: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  bed: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12v4m18-4v4M3 16h18M3 12h4a2 2 0 012 2H3m14-2h-4a2 2 0 00-2 2h6M3 8V6a1 1 0 011-1h16a1 1 0 011 1v2" />
    </svg>
  ),
  bath: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4M4 12V7a3 3 0 013-3h1m9 8V7a1 1 0 00-1-1H7" />
    </svg>
  ),
  area: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),

  // ── Watchlist / Social ────────────────────────────────────────────────────
  heart: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  heartFilled: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  share2: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),

  // ── Contact / Communication ───────────────────────────────────────────────
  phone: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  email: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  whatsapp: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.834L.044 23.956l6.26-1.458A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.793 9.793 0 01-4.988-1.362l-.357-.212-3.716.866.897-3.622-.232-.371A9.79 9.79 0 012.182 12c0-5.414 4.404-9.818 9.818-9.818 5.415 0 9.818 4.404 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z" />
    </svg>
  ),

  // ── Investment / Finance ──────────────────────────────────────────────────
  trendingUp: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="17 6 23 6 23 12" />
    </svg>
  ),
  trending: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  shield: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  verified: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),

  // ── Time / Calendar ───────────────────────────────────────────────────────
  calendar: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeWidth={1.5} />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeWidth={1.5} />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.5} />
    </svg>
  ),
  clock: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 7v5l3 3" />
    </svg>
  ),

  // ── View / Layout ─────────────────────────────────────────────────────────
  map: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polygon strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" strokeWidth={2} />
      <line x1="16" y1="6" x2="16" y2="22" strokeWidth={2} />
    </svg>
  ),
  list: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  layers: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // ── Media ─────────────────────────────────────────────────────────────────
  play: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polygon strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="5,3 19,12 5,21" />
    </svg>
  ),
  playFilled: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  ),
  cube: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),

  // ── User / Profile ────────────────────────────────────────────────────────
  user: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  star: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polygon strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  globe: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
      <path strokeWidth={2} d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  quote: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),

  // ── Transport ─────────────────────────────────────────────────────────────
  car: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17H3a2 2 0 01-2-2v-4a2 2 0 012-2h1l3-4h10l3 4h1a2 2 0 012 2v4a2 2 0 01-2 2h-2m-9 0h6" />
      <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  train: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="4" y="2" width="16" height="16" rx="3" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M4 9h16M12 2v7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18l-2 4M16 18l2 4M9 22h6" />
      <circle cx="9" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  navigation: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polygon strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="3,11 22,2 13,21 11,13 3,11" />
    </svg>
  ),

  // ── Finance / AED ─────────────────────────────────────────────────────────
  aed: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M8 12h8m-4-4v8" />
    </svg>
  ),
  code: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l-4-4 4-4m6 8l4-4-4-4" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Icon = ({ name, className = 'w-5 h-5', style, 'aria-hidden': ariaHidden = true }) => {
  const icon = ICONS[name];
  if (!icon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] Unknown icon name: "${name}". Available: ${Object.keys(ICONS).join(', ')}`);
    }
    return null;
  }

  return React.cloneElement(icon, {
    className: `inline-block flex-shrink-0 ${className}`,
    style,
    'aria-hidden': ariaHidden,
  });
};

Icon.propTypes = {
  name:        PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  className:   PropTypes.string,
  style:       PropTypes.object,
  'aria-hidden': PropTypes.bool,
};

export default Icon;

// Named export of all icon keys for documentation / prop types
export const ICON_NAMES = Object.keys(ICONS);
