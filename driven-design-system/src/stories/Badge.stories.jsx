import Badge from '../components/primitives/Badge';
import Icon from '../components/icons/Icon';

export default {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Status labels, category chips and media overlays used throughout the Driven Properties UI.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Category = {
  args: {
    variant: 'category',
    icon: <Icon name="playFilled" className="w-3 h-3" />,
    children: 'Luxury',
  },
};

export const CategoryVariants = {
  name: 'Category — All types',
  render: () => (
    <div className="flex flex-wrap gap-3">
      {['Luxury', 'Waterfront', 'Off-Plan'].map((cat) => (
        <Badge key={cat} variant="category" icon={<Icon name="playFilled" className="w-3 h-3" />}>
          {cat}
        </Badge>
      ))}
    </div>
  ),
};

export const MediaBadges = {
  name: 'Media — 3D / Video',
  render: () => (
    <div className="flex gap-2 p-4 bg-gray-700 rounded-xl">
      <Badge variant="media">
        <Icon name="cube" className="w-3 h-3" /> 3D
      </Badge>
      <Badge variant="media">
        <Icon name="playFilled" className="w-3 h-3" /> Video
      </Badge>
    </div>
  ),
};

export const StatusBadges = {
  name: 'Status — Ready / Off Plan / Luxury',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="status" color="green">Ready</Badge>
      <Badge variant="status" color="amber">Off Plan</Badge>
      <Badge variant="status" color="blue">Luxury</Badge>
    </div>
  ),
};

export const VerifiedAndTrending = {
  name: 'Special — Verified & Trending',
  render: () => (
    <div className="flex gap-3">
      <Badge variant="verified">
        <Icon name="verified" className="w-3 h-3" /> Verified
      </Badge>
      <Badge variant="trending">
        🔥 Trending
      </Badge>
    </div>
  ),
};

export const PillVariants = {
  name: 'Pill — Active / Inactive',
  render: () => (
    <div className="flex gap-2">
      <Badge variant="pill-active">All</Badge>
      <Badge variant="pill">Ready</Badge>
      <Badge variant="pill">Off Plan</Badge>
      <Badge variant="pill">Luxury</Badge>
    </div>
  ),
};
