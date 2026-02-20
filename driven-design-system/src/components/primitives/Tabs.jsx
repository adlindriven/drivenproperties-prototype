/**
 * Tabs — Driven Properties Design System
 *
 * Two visual styles used throughout the UI:
 *
 *   pill-row  – pill-shaped tabs on white/colored background (search box header)
 *               Active tab: bg-black text-white; Inactive: text-warm-500 hover:bg-warm-50
 *
 *   toggle    – frosted glass toggle used above the hero search box (Manual / AI Agent)
 *               Active: bg-white text-driven-text shadow; Inactive: text-white/90
 *
 *   underline – classic underline tab (property detail sections)
 *
 * Usage (controlled):
 *   const [tab, setTab] = useState('buy');
 *   <Tabs variant="pill-row" value={tab} onChange={setTab} tabs={[
 *     { id: 'buy', label: 'Buy' },
 *     { id: 'rent', label: 'Rent' },
 *   ]} />
 *
 * Usage (with icons):
 *   <Tabs variant="toggle" value={mode} onChange={setMode} tabs={[
 *     { id: 'manual', label: 'Manual Search' },
 *     { id: 'ai',     label: 'AI Agent', icon: <StarIcon /> },
 *   ]} />
 */

import React from 'react';
import PropTypes from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// Style maps
// ─────────────────────────────────────────────────────────────────────────────

const CONTAINER_CLASSES = {
  'pill-row': 'flex gap-1 p-0',
  toggle:     'flex bg-white/15 backdrop-blur-md p-1.5 rounded-full border border-white/25 shadow-lg',
  underline:  'flex border-b border-warm-200 gap-0',
  'sub-pill': 'flex gap-1.5 bg-warm-50 p-1 rounded-xl border border-warm-150',
};

const TAB_ACTIVE = {
  'pill-row': 'bg-black text-white shadow-md',
  toggle:     'bg-white text-driven-text shadow-md',
  underline:  'border-b-2 border-warm-800 text-warm-900 font-semibold',
  'sub-pill': 'bg-black text-white shadow-sm',
};

const TAB_INACTIVE = {
  'pill-row': 'text-warm-500 hover:text-warm-800 hover:bg-warm-50',
  toggle:     'text-white/90 hover:text-white',
  underline:  'text-warm-400 hover:text-warm-600 border-b-2 border-transparent',
  'sub-pill': 'text-warm-600 hover:text-warm-900',
};

const TAB_BASE = {
  'pill-row': 'px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap',
  toggle:     'px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2',
  underline:  'px-4 py-2.5 text-sm transition-all',
  'sub-pill': 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap',
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Tabs = ({
  variant = 'pill-row',
  value,
  onChange,
  tabs = [],
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`${CONTAINER_CLASSES[variant] ?? CONTAINER_CLASSES['pill-row']} ${className}`}
      role="tablist"
      {...rest}
    >
      {tabs.map((tab) => {
        const isActive = value === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={[
              TAB_BASE[variant],
              isActive
                ? TAB_ACTIVE[variant]
                : TAB_INACTIVE[variant],
            ].join(' ')}
          >
            {tab.icon && (
              <span className="flex-shrink-0" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  variant:   PropTypes.oneOf(['pill-row', 'toggle', 'underline', 'sub-pill']),
  value:     PropTypes.string.isRequired,
  onChange:  PropTypes.func.isRequired,
  tabs:      PropTypes.arrayOf(
    PropTypes.shape({
      id:    PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon:  PropTypes.node,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Tabs;
