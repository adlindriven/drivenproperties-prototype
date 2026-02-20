import { useState } from 'react';
import Tabs from '../components/primitives/Tabs';
import Icon from '../components/icons/Icon';

export default {
  title: 'Primitives/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Four tab styles: pill-row (search box), toggle (hero Manual/AI), sub-pill (status filter), underline (detail sections).',
      },
    },
  },
  tags: ['autodocs'],
};

const BUY_TABS = [
  { id: 'buy',        label: 'Buy'        },
  { id: 'rent',       label: 'Rent'       },
  { id: 'commercial', label: 'Commercial' },
  { id: 'projects',   label: 'Projects'   },
];

const MODE_TABS = [
  { id: 'manual', label: 'Manual Search' },
  { id: 'ai',     label: 'AI Agent', icon: <Icon name="star" className="w-3.5 h-3.5" /> },
];

const STATUS_TABS = [
  { id: 'all',      label: 'All'      },
  { id: 'ready',    label: 'Ready'    },
  { id: 'offplan',  label: 'Off Plan' },
  { id: 'luxury',   label: 'Luxury'   },
];

const DETAIL_TABS = [
  { id: 'overview',    label: 'Overview'    },
  { id: 'floorplans',  label: 'Floor Plans' },
  { id: 'amenities',   label: 'Amenities'   },
  { id: 'calculator',  label: 'Calculator'  },
];

// ─ Controlled wrappers ────────────────────────────────────────────────────

const ControlledTabs = ({ variant, tabs, defaultValue }) => {
  const [value, setValue] = useState(defaultValue ?? tabs[0].id);
  return <Tabs variant={variant} tabs={tabs} value={value} onChange={setValue} />;
};

export const PillRow = {
  name: 'Pill Row — Search box header',
  render: () => (
    <div className="bg-white p-4 rounded-3xl shadow">
      <ControlledTabs variant="pill-row" tabs={BUY_TABS} />
    </div>
  ),
};

export const Toggle = {
  name: 'Toggle — Hero Manual / AI',
  render: () => (
    <div className="bg-warm-800 p-6 rounded-2xl flex justify-center">
      <ControlledTabs variant="toggle" tabs={MODE_TABS} />
    </div>
  ),
};

export const SubPill = {
  name: 'Sub-Pill — Status filter',
  render: () => <ControlledTabs variant="sub-pill" tabs={STATUS_TABS} />,
};

export const Underline = {
  name: 'Underline — Detail page sections',
  render: () => <ControlledTabs variant="underline" tabs={DETAIL_TABS} />,
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs text-warm-400 mb-2 font-semibold uppercase tracking-wider">Pill Row</p>
        <div className="bg-white p-3 rounded-2xl shadow-sm">
          <ControlledTabs variant="pill-row" tabs={BUY_TABS} />
        </div>
      </div>
      <div>
        <p className="text-xs text-warm-400 mb-2 font-semibold uppercase tracking-wider">Toggle (dark bg)</p>
        <div className="bg-warm-800 p-4 rounded-2xl flex justify-center">
          <ControlledTabs variant="toggle" tabs={MODE_TABS} />
        </div>
      </div>
      <div>
        <p className="text-xs text-warm-400 mb-2 font-semibold uppercase tracking-wider">Sub-Pill</p>
        <ControlledTabs variant="sub-pill" tabs={STATUS_TABS} />
      </div>
      <div>
        <p className="text-xs text-warm-400 mb-2 font-semibold uppercase tracking-wider">Underline</p>
        <ControlledTabs variant="underline" tabs={DETAIL_TABS} />
      </div>
    </div>
  ),
};
