import { useState } from 'react';
import PropertyCard from '../components/composed/PropertyCard';

export default {
  title: 'Composed/PropertyCard',
  component: PropertyCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Full property listing card. Automatically switches between Off-Plan layout ' +
          '(Handover / Payment Plan / Completion %) and Ready layout (Beds / Baths / Sqft) ' +
          'based on whether the project data includes a `handover` field.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

// ─────────────────────────────────────────────────────────────────────────────
// Mock data
// ─────────────────────────────────────────────────────────────────────────────

const offPlanProject = {
  id: 1,
  name: 'Emaar Beachfront Residences',
  developer: 'Emaar Properties',
  location: 'Dubai Harbour',
  area: 'Dubai Harbour',
  price: 'AED 2,850,000',
  pricePerSqft: '2,890',
  roi: '9.2%',
  // Off-plan fields
  handover: 'Q4 2026',
  paymentPlan: '70/30',
  progress: 45,
  category: 'Waterfront',
  image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600',
  has3DTour: true,
  hasVideo: true,
  agent: {
    name: 'Sarah Al Maktoum',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
};

const readyProject = {
  id: 2,
  name: 'Palm Jumeirah Villa — Type A',
  developer: 'Nakheel',
  location: 'Palm Jumeirah',
  area: 'Palm Jumeirah',
  price: 'AED 8,500,000',
  pricePerSqft: '3,200',
  roi: '6.5%',
  // Ready fields (no handover)
  beds: 4,
  baths: 5,
  sqft: '4,200',
  category: 'Luxury',
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
  has3DTour: true,
  hasVideo: false,
  agent: {
    name: 'Ahmed Hassan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
};

const luxuryProject = {
  id: 3,
  name: 'DIFC Heights — Penthouse Collection',
  developer: 'DIFC Living',
  location: 'DIFC',
  area: 'Downtown Dubai',
  price: 'AED 12,000,000',
  pricePerSqft: '4,500',
  roi: '7.8%',
  handover: 'Q2 2027',
  paymentPlan: '80/20',
  progress: 20,
  category: 'Luxury',
  image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
  has3DTour: false,
  hasVideo: true,
  agent: {
    name: 'Fatima Al Zaabi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

const WatchlistWrapper = (project) => {
  const [inWatchlist, setInWatchlist] = useState(false);
  return (
    <PropertyCard
      project={project}
      onSelect={() => {}}
      inWatchlist={inWatchlist}
      onToggleWatchlist={() => setInWatchlist((v) => !v)}
    />
  );
};

export const OffPlan = {
  name: 'Off-Plan card (Handover / Payment Plan / %)',
  render: () => <WatchlistWrapper {...offPlanProject} />,
};

export const Ready = {
  name: 'Ready card (Beds / Baths / Sqft)',
  render: () => <WatchlistWrapper {...readyProject} />,
};

export const LuxuryOffPlan = {
  name: 'Luxury Off-Plan card',
  render: () => <WatchlistWrapper {...luxuryProject} />,
};

export const InvestorMode = {
  name: 'Off-Plan — Investor Mode (shows ROI)',
  render: () => (
    <PropertyCard
      project={offPlanProject}
      onSelect={() => {}}
      inWatchlist={false}
      isInvestorMode={true}
    />
  ),
};

export const HighlightedFromMap = {
  name: 'Highlighted (gold ring — map hover sync)',
  render: () => (
    <PropertyCard
      project={offPlanProject}
      onSelect={() => {}}
      inWatchlist={false}
      isHovered={true}
    />
  ),
};

export const InWatchlist = {
  name: 'In watchlist (heart filled)',
  render: () => (
    <PropertyCard
      project={readyProject}
      onSelect={() => {}}
      inWatchlist={true}
    />
  ),
};

export const WithCompare = {
  name: 'With compare button (hover to see)',
  render: () => {
    const [inCompare, setInCompare] = useState(false);
    return (
      <PropertyCard
        project={offPlanProject}
        onSelect={() => {}}
        inWatchlist={false}
        onAddToCompare={() => setInCompare((v) => !v)}
        inCompareList={inCompare}
      />
    );
  },
};

export const CardGrid = {
  name: 'Card Grid (3 cards)',
  parameters: { layout: 'padded' },
  decorators: [],
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-6 bg-warm-50 min-h-screen">
      {[offPlanProject, readyProject, luxuryProject].map((p) => {
        const [inWatchlist, setInWatchlist] = useState(false);
        return (
          <PropertyCard
            key={p.id}
            project={p}
            onSelect={() => {}}
            inWatchlist={inWatchlist}
            onToggleWatchlist={() => setInWatchlist((v) => !v)}
          />
        );
      })}
    </div>
  ),
};
