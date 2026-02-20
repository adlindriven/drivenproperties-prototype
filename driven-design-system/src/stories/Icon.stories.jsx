import Icon, { ICON_NAMES } from '../components/icons/Icon';

export default {
  title: 'Primitives/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Centralised SVG icon library. All icons render as inline SVG and inherit `currentColor`. ' +
          'Resize using Tailwind width/height classes (e.g. `w-4 h-4`, `w-6 h-6`).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
    },
    className: { control: 'text' },
  },
};

export const Single = {
  args: {
    name: 'search',
    className: 'w-8 h-8 text-warm-700',
  },
};

export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div className="grid grid-cols-6 gap-6 p-4">
      {ICON_NAMES.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 flex items-center justify-center text-warm-700">
            <Icon name={name} className="w-6 h-6" />
          </div>
          <span className="text-[10px] text-warm-500 leading-tight">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-end gap-6">
      {['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10'].map((cls) => (
        <div key={cls} className="flex flex-col items-center gap-2">
          <Icon name="mapPin" className={`${cls} text-warm-700`} />
          <span className="text-[10px] text-warm-400">{cls.split(' ')[0].replace('w-','')}</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors = {
  name: 'Colors',
  render: () => (
    <div className="flex gap-4">
      <Icon name="heart" className="w-6 h-6 text-accent-gold" />
      <Icon name="shield" className="w-6 h-6 text-accent-green" />
      <Icon name="trendingUp" className="w-6 h-6 text-warm-500" />
      <Icon name="mapPin" className="w-6 h-6 text-warm-800" />
      <Icon name="whatsapp" className="w-6 h-6 text-[#25D366]" />
    </div>
  ),
};
