/**
 * Driven Properties — Design Token: Colors
 *
 * Single source of truth for every color used across the Driven Properties
 * design system. Consumed by tailwind.config.js (as the `theme.extend.colors`
 * object) and exported individually for use in JS/TS logic.
 *
 * Naming convention:
 *   warm.*   – neutral warm grays (primary text, borders, backgrounds)
 *   cream.*  – warm off-white surfaces
 *   accent.* – brand accent colors (gold, green)
 *   driven.* – semantic aliases for common UI roles
 *   special  – third-party / one-off hex values (WhatsApp, etc.)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Palette scales
// ─────────────────────────────────────────────────────────────────────────────

export const warm = {
  50:  '#fafaf9',
  100: '#f5f5f4',
  150: '#eeede9', // between 100–200, used on card borders
  200: '#e7e5e4',
  300: '#d6d3d1',
  400: '#a8a29e',
  500: '#78716c',
  600: '#57534e',
  700: '#44403c',
  800: '#292524',
  900: '#1c1917',
};

export const cream = {
  50:  '#fdfcfb',
  100: '#faf8f5',
  200: '#f5f2ed',
  300: '#ede7dd',
  400: '#e0d5c7',
  500: '#d4c4b0',
};

export const accent = {
  gold:        '#d4a574',
  'gold-dark': '#b8935f',
  green:       '#2d5f3f',
  'green-dark':'#1f4229',
};

// ─────────────────────────────────────────────────────────────────────────────
// Semantic / role-based aliases
// ─────────────────────────────────────────────────────────────────────────────

export const driven = {
  dark:      '#1c1917', // deepest text / overlays
  text:      '#292524', // default body text
  muted:     '#78716c', // secondary / placeholder text
  border:    '#e7e5e4', // default border
  card:      '#ffffff', // card surface
  highlight: '#faf8f5', // subtle highlight background
  button:    '#292524', // primary button fill
  green:     '#2d5f3f', // primary green (CTA)
};

// ─────────────────────────────────────────────────────────────────────────────
// Special / third-party colors
// ─────────────────────────────────────────────────────────────────────────────

export const special = {
  whatsapp:      '#25D366',
  whatsappHover: '#20c05e',
  categoryBadge: '#F5EFE6', // warm badge background (Luxury / Waterfront)
  mapBackground: '#dce5e3',
};

// ─────────────────────────────────────────────────────────────────────────────
// Tailwind-ready colors object (spread into tailwind.config theme.extend.colors)
// ─────────────────────────────────────────────────────────────────────────────

const colors = { warm, cream, accent, driven };
export default colors;
