# Driven Properties — Design System

A fully componentised, token-driven UI library built on **React + Vite + Tailwind CSS v3 + Storybook**.

---

## Quick Start

```bash
npm install
npm run storybook        # launch Storybook on http://localhost:6006
npm run dev              # launch Vite dev server on http://localhost:5173
npm run build-storybook  # build static Storybook for publishing
```

---

## Project Structure

```
driven-design-system/
├── src/
│   ├── tokens/                  # Design tokens (single source of truth)
│   │   ├── colors.js            #   All color values + semantic aliases
│   │   ├── typography.js        #   Font families, scale, weights
│   │   ├── spacing.js           #   Shadows, radii, spacing reference
│   │   └── index.js             #   Barrel export
│   │
│   ├── components/
│   │   ├── icons/
│   │   │   └── Icon.jsx         # Centralised SVG icon library (35+ icons)
│   │   │
│   │   ├── primitives/          # Lowest-level, zero-business-logic components
│   │   │   ├── Button.jsx       #   8 variants × 7 sizes
│   │   │   ├── Badge.jsx        #   7 variants (category, media, status, pill…)
│   │   │   ├── Input.jsx        #   search / outline / ghost + label/error/hint
│   │   │   ├── Tabs.jsx         #   pill-row / toggle / sub-pill / underline
│   │   │   ├── Card.jsx         #   property / stat / info / modal surfaces
│   │   │   └── index.js         #   Barrel export
│   │   │
│   │   └── composed/            # Higher-level components built from primitives
│   │       └── PropertyCard.jsx #   Full listing card (off-plan + ready modes)
│   │
│   ├── stories/                 # Storybook stories + documentation
│   │   ├── Colors.stories.jsx   #   Design token: color palette
│   │   ├── Button.stories.jsx
│   │   ├── Badge.stories.jsx
│   │   ├── Input.stories.jsx
│   │   ├── Tabs.stories.jsx
│   │   ├── Icon.stories.jsx
│   │   └── PropertyCard.stories.jsx
│   │
│   └── index.css                # Global Tailwind base + Lato font import
│
├── .storybook/
│   ├── main.js                  # Storybook config (addons, framework)
│   └── preview.js               # Global CSS import + background themes
│
├── tailwind.config.js           # Tailwind config using token values
├── postcss.config.js
└── vite.config.js               # Vite config with @/ path alias
```

---

## Design Tokens

All tokens live in `src/tokens/`. Import them in JS for logic, or use the Tailwind class names in JSX.

### Colors

| Token class | Hex | Usage |
|---|---|---|
| `text-warm-900` | `#1c1917` | Primary text |
| `text-warm-500` | `#78716c` | Secondary/muted text |
| `border-warm-200` | `#e7e5e4` | Default borders |
| `bg-warm-50` | `#fafaf9` | Page background |
| `bg-accent-gold` | `#d4a574` | Gold CTA, watchlist |
| `text-accent-green` | `#2d5f3f` | ROI, success |
| `bg-[#25D366]` | `#25D366` | WhatsApp button |

### Typography

The system uses **Lato** exclusively (Google Fonts, loaded via CSS).

```
Hero title       : text-4xl md:text-5xl font-bold
Section heading  : text-2xl md:text-3xl font-bold
Card title       : text-[15px] font-bold
Body             : text-sm font-normal
Caption/badge    : text-xs font-semibold
Micro label      : text-[10px] font-medium
```

---

## Components

### Primitives

#### Button
```jsx
import { Button } from '@/components/primitives'

// Variants: primary | gold | secondary | ghost | danger | whatsapp | icon | icon-dark
// Sizes:    sm | md | lg | xl | icon-sm | icon-md | icon-lg

<Button variant="primary" size="md">Browse Properties</Button>
<Button variant="whatsapp" size="icon-md" aria-label="WhatsApp">
  <Icon name="whatsapp" className="w-4 h-4 text-white" />
</Button>
<Button variant="primary" size="md" loading>Searching…</Button>
```

#### Badge
```jsx
import { Badge } from '@/components/primitives'

// Variants: category | media | status | verified | trending | pill | pill-active

<Badge variant="category" icon={<Icon name="playFilled" className="w-3 h-3" />}>
  Luxury
</Badge>
<Badge variant="media">3D</Badge>
<Badge variant="status" color="green">Ready</Badge>
```

#### Input
```jsx
import { Input } from '@/components/primitives'

// Variants: search | outline | ghost

<Input
  variant="search"
  placeholder="Search your preferred location"
  leadingIcon={<Icon name="mapPin" className="w-4 h-4" />}
/>
<Input variant="outline" label="Email" error="Invalid email" />
```

#### Tabs
```jsx
import { Tabs } from '@/components/primitives'

// Variants: pill-row | toggle | sub-pill | underline

const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
]
<Tabs variant="pill-row" value={activeTab} onChange={setActiveTab} tabs={tabs} />
```

#### Icon
```jsx
import Icon from '@/components/icons/Icon'

// 35+ icons — see Icon.stories.jsx for the full list
<Icon name="search" className="w-5 h-5 text-warm-400" />
<Icon name="heartFilled" className="w-4 h-4 text-accent-gold" />
```

### Composed

#### PropertyCard
```jsx
import PropertyCard from '@/components/composed/PropertyCard'

// Automatically renders Off-Plan layout when project.handover is present,
// Ready layout (beds/baths/sqft) otherwise.

<PropertyCard
  project={project}
  onSelect={(p) => navigate(p)}
  inWatchlist={watchlist.includes(project.id)}
  onToggleWatchlist={(p) => toggleWatchlist(p)}
  isInvestorMode={true}   // shows ROI
  onAddToCompare={(p) => addToCompare(p)}
  inCompareList={false}
/>
```

---

## Storybook

Run `npm run storybook` to launch the full component library browser at [http://localhost:6006](http://localhost:6006).

Story groups:
- **Design Tokens** → Colors (full palette with swatches)
- **Primitives** → Button, Badge, Input, Tabs, Icon
- **Composed** → PropertyCard

Each story has:
- `autodocs` — auto-generated prop table
- Controls panel — live prop editing
- A11y panel — accessibility audit
- Multiple variants showing every visual state

---

## Extending

### Adding a new icon
1. Open `src/components/icons/Icon.jsx`
2. Add a new entry to the `ICONS` object with the SVG path(s)
3. It immediately becomes available as `<Icon name="yourIcon" />`
4. Add a story to `src/stories/Icon.stories.jsx` if needed

### Adding a new component
1. Create `src/components/primitives/YourComponent.jsx`
2. Export from `src/components/primitives/index.js`
3. Create `src/stories/YourComponent.stories.jsx`

### Adding a new color token
1. Add to `src/tokens/colors.js`
2. Add to the matching section in `tailwind.config.js`
3. Document in `src/stories/Colors.stories.jsx`
