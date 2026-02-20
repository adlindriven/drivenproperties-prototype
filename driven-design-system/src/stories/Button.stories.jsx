import Button from '../components/primitives/Button';
import Icon from '../components/icons/Icon';

export default {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Core button primitive. Supports 8 variants and 7 sizes. Always renders as a `<button>` element.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'gold', 'secondary', 'ghost', 'danger', 'whatsapp', 'icon', 'icon-dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'icon-sm', 'icon-md', 'icon-lg'],
    },
    disabled:  { control: 'boolean' },
    loading:   { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

// ── Single story template ──────────────────────────────────────────────────

export const Primary = {
  args: { variant: 'primary', size: 'md', children: 'Browse Properties' },
};

export const Gold = {
  args: { variant: 'gold', size: 'md', children: 'View Investment' },
};

export const Secondary = {
  args: { variant: 'secondary', size: 'md', children: 'Learn More' },
};

export const Ghost = {
  args: { variant: 'ghost', size: 'md', children: 'Reset Filters' },
};

export const Whatsapp = {
  args: {
    variant: 'whatsapp',
    size: 'md',
    children: 'WhatsApp Agent',
  },
};

export const Loading = {
  args: { variant: 'primary', size: 'md', loading: true, children: 'Searching…' },
};

export const Disabled = {
  args: { variant: 'primary', size: 'md', disabled: true, children: 'Unavailable' },
};

export const FullWidth = {
  args: { variant: 'primary', size: 'lg', fullWidth: true, children: 'Search Properties' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

// ── Icon buttons ──────────────────────────────────────────────────────────

export const IconSearch = {
  name: 'Icon — Search (dark)',
  args: {
    variant: 'icon-dark',
    size: 'icon-lg',
    'aria-label': 'Search',
    children: <Icon name="search" className="w-5 h-5" />,
  },
};

export const IconHeart = {
  name: 'Icon — Watchlist heart',
  args: {
    variant: 'icon',
    size: 'icon-md',
    'aria-label': 'Add to watchlist',
    children: <Icon name="heart" className="w-4 h-4" />,
  },
};

export const IconWhatsApp = {
  name: 'Icon — WhatsApp circle',
  args: {
    variant: 'whatsapp',
    size: 'icon-md',
    'aria-label': 'WhatsApp agent',
    className: 'border-0',
    children: <Icon name="whatsapp" className="w-4 h-4 text-white" />,
  },
};

// ── All sizes ─────────────────────────────────────────────────────────────

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" size="xl">Extra Large</Button>
    </div>
  ),
};

// ── All variants ──────────────────────────────────────────────────────────

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="gold">Gold</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="whatsapp">WhatsApp</Button>
    </div>
  ),
};
