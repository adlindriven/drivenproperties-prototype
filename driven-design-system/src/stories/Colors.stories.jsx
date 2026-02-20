/**
 * Colors — Design Token Documentation
 * This story documents every color token in the Driven Properties design system.
 */

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The complete Driven Properties color palette. ' +
          'All colors are defined in `src/tokens/colors.js` and registered in `tailwind.config.js`. ' +
          'Use the Tailwind token names (e.g. `text-warm-800`, `bg-accent-gold`) in components.',
      },
    },
  },
};

const Swatch = ({ hex, name, light }) => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-warm-200 shadow-sm">
    <div
      style={{ backgroundColor: hex, minHeight: 64 }}
      className="w-full"
    />
    <div className="bg-white px-3 py-2">
      <p className="text-xs font-semibold text-warm-800">{name}</p>
      <p className="text-[10px] text-warm-400 font-mono uppercase">{hex}</p>
    </div>
  </div>
);

const Scale = ({ title, description, colors }) => (
  <div className="mb-10">
    <h2 className="text-base font-bold text-warm-900 mb-0.5">{title}</h2>
    {description && <p className="text-xs text-warm-500 mb-4">{description}</p>}
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-3">
      {Object.entries(colors).map(([key, hex]) => (
        <Swatch key={key} hex={hex} name={key} />
      ))}
    </div>
  </div>
);

export const AllColors = {
  name: 'All Color Tokens',
  render: () => (
    <div className="p-6 max-w-5xl">
      <Scale
        title="Warm Neutrals"
        description="Primary text, borders, backgrounds, dividers. Used for 90% of the UI."
        colors={{
          '50':  '#fafaf9',
          '100': '#f5f5f4',
          '150': '#eeede9',
          '200': '#e7e5e4',
          '300': '#d6d3d1',
          '400': '#a8a29e',
          '500': '#78716c',
          '600': '#57534e',
          '700': '#44403c',
          '800': '#292524',
          '900': '#1c1917',
        }}
      />

      <Scale
        title="Cream"
        description="Warm off-white surfaces — page backgrounds, section fills, card accents."
        colors={{
          '50':  '#fdfcfb',
          '100': '#faf8f5',
          '200': '#f5f2ed',
          '300': '#ede7dd',
          '400': '#e0d5c7',
          '500': '#d4c4b0',
        }}
      />

      <Scale
        title="Accent — Gold"
        description="Primary brand accent. Used for watchlist hearts, highlights, gold CTAs."
        colors={{
          'gold':      '#d4a574',
          'gold-dark': '#b8935f',
        }}
      />

      <Scale
        title="Accent — Green"
        description="Investment, success, growth indicators. ROI figures, WhatsApp CTA."
        colors={{
          'green':      '#2d5f3f',
          'green-dark': '#1f4229',
          'whatsapp':   '#25D366',
          'whatsapp-hover': '#20c05e',
        }}
      />

      <Scale
        title="Semantic Roles"
        description="Named aliases for common UI roles. Always prefer these over raw warm/* values."
        colors={{
          'dark':      '#1c1917',
          'text':      '#292524',
          'muted':     '#78716c',
          'border':    '#e7e5e4',
          'card':      '#ffffff',
          'highlight': '#faf8f5',
          'button':    '#292524',
          'green':     '#2d5f3f',
        }}
      />

      <Scale
        title="Special / Third-party"
        description="Specific use-cases only — do not repurpose."
        colors={{
          'category-badge': '#F5EFE6',
          'map-bg':         '#dce5e3',
        }}
      />
    </div>
  ),
};
