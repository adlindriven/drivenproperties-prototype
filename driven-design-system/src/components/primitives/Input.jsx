/**
 * Input — Driven Properties Design System
 *
 * A versatile text input component covering all form input use-cases in the
 * Driven Properties UI: search, filters, contact forms, calculators.
 *
 * Variants:
 *   search   – light warm fill, no strong border (hero / results search bar)
 *   outline  – white fill, visible warm border (forms, modals)
 *   ghost    – fully transparent with a bottom border only (inline editing)
 *
 * Features:
 *   - Optional leading icon slot
 *   - Optional trailing action slot (clear button, unit label, etc.)
 *   - Error state with message
 *   - Disabled state
 *
 * Usage:
 *   <Input variant="search" placeholder="Search location…" leadingIcon={<SearchIcon />} />
 *   <Input variant="outline" label="Email" error="Invalid email" />
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Style maps
// ─────────────────────────────────────────────────────────────────────────────

const VARIANT_CLASSES = {
  search:
    'bg-warm-50 border border-warm-150 text-warm-900 placeholder-warm-400 ' +
    'focus:border-warm-400 focus:bg-white',
  outline:
    'bg-white border border-warm-200 text-warm-900 placeholder-warm-400 ' +
    'focus:border-warm-400',
  ghost:
    'bg-transparent border-0 border-b border-warm-200 rounded-none text-warm-900 ' +
    'placeholder-warm-400 focus:border-warm-600',
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Input = React.forwardRef(function Input(
  {
    variant = 'outline',
    label,
    error,
    hint,
    leadingIcon,
    trailingAction,
    fullWidth = false,
    className = '',
    id,
    ...rest
  },
  ref
) {
  const inputId = id || React.useId();

  const base = [
    'w-full py-3 text-sm rounded-2xl',
    'outline-none ring-0 transition-colors duration-150',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    leadingIcon    ? 'pl-11' : 'pl-4',
    trailingAction ? 'pr-12' : 'pr-4',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.outline,
    error ? 'border-red-400 focus:border-red-500' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-warm-700 mb-1.5"
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        {/* Leading icon */}
        {leadingIcon && (
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400 pointer-events-none"
            aria-hidden="true"
          >
            {leadingIcon}
          </span>
        )}

        <input ref={ref} id={inputId} className={base} {...rest} />

        {/* Trailing action */}
        {trailingAction && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {trailingAction}
          </span>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}

      {/* Hint */}
      {!error && hint && (
        <p className="mt-1 text-xs text-warm-400">{hint}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  variant:       PropTypes.oneOf(['search', 'outline', 'ghost']),
  label:         PropTypes.string,
  error:         PropTypes.string,
  hint:          PropTypes.string,
  leadingIcon:   PropTypes.node,
  trailingAction:PropTypes.node,
  fullWidth:     PropTypes.bool,
  className:     PropTypes.string,
  id:            PropTypes.string,
};

export default Input;
