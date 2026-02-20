/**
 * Driven Properties — Design Token: Spacing + Shadows + Radii
 *
 * Extends Tailwind's default spacing scale with Driven-specific additions.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Box Shadows
// ─────────────────────────────────────────────────────────────────────────────

export const boxShadow = {
  card:       '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
  'card-hover':'0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.1)',
  soft:       '0 2px 8px rgba(0,0,0,0.05)',
  hero:       '0 20px 60px rgba(0,0,0,0.3)',
  modal:      '0 24px 80px rgba(0,0,0,0.2)',
};

// ─────────────────────────────────────────────────────────────────────────────
// Border Radii
// ─────────────────────────────────────────────────────────────────────────────

export const borderRadius = {
  none:   '0',
  sm:     '0.25rem',   // 4px
  DEFAULT:'0.375rem',  // 6px
  md:     '0.5rem',    // 8px
  lg:     '0.75rem',   // 12px  — status pills, dropdowns
  xl:     '1rem',      // 16px  — filter row, location pill
  '2xl':  '1.25rem',   // 20px  — inputs, search box inner
  '3xl':  '1.5rem',    // 24px  — cards
  full:   '9999px',    // pill  — toggle, tabs, icon buttons
};

// ─────────────────────────────────────────────────────────────────────────────
// Spacing additions (extend Tailwind's 4px base scale)
// ─────────────────────────────────────────────────────────────────────────────

export const spacing = {
  // Semantic names for common UI measurements
  'px': '1px',
  '0':  '0',
  '0.5':'2px',
  '1':  '4px',
  '1.5':'6px',
  '2':  '8px',
  '2.5':'10px',
  '3':  '12px',
  '3.5':'14px',
  '4':  '16px',
  '5':  '20px',
  '6':  '24px',
  '7':  '28px',
  '8':  '32px',
  '9':  '36px',
  '10': '40px',
  '11': '44px',
  '12': '48px',
  '14': '56px',
  '16': '64px',
  '18': '72px',
  '20': '80px',
  '24': '96px',
  '28': '112px',
  '32': '128px',
  '36': '144px',
  '40': '160px',
  '48': '192px',
  '56': '224px',
  '64': '256px',
  '72': '288px',
  '80': '320px',
  '96': '384px',
};

// ─────────────────────────────────────────────────────────────────────────────
// Breakpoints (reference only — Tailwind's defaults are fine)
// ─────────────────────────────────────────────────────────────────────────────

export const screens = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1536px',
};

const spacing_tokens = { boxShadow, borderRadius, spacing, screens };
export default spacing_tokens;
