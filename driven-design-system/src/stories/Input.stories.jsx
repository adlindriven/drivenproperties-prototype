import Input from '../components/primitives/Input';
import Icon from '../components/icons/Icon';
import Button from '../components/primitives/Button';

export default {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Text input field with leading icon, trailing action, label, error and hint support.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const SearchVariant = {
  name: 'Search input (hero)',
  args: {
    variant: 'search',
    placeholder: 'Search your preferred location',
    leadingIcon: <Icon name="mapPin" className="w-4 h-4" />,
  },
};

export const OutlineVariant = {
  name: 'Outline (form)',
  args: {
    variant: 'outline',
    label: 'Full Name',
    placeholder: 'John Smith',
  },
};

export const WithError = {
  name: 'With validation error',
  args: {
    variant: 'outline',
    label: 'Email Address',
    placeholder: 'you@example.com',
    defaultValue: 'not-an-email',
    error: 'Please enter a valid email address',
  },
};

export const WithHint = {
  name: 'With hint text',
  args: {
    variant: 'outline',
    label: 'Phone Number',
    placeholder: '+971 50 000 0000',
    hint: 'Used to arrange viewings only',
  },
};

export const WithTrailingAction = {
  name: 'With trailing clear button',
  args: {
    variant: 'search',
    placeholder: 'Search location…',
    leadingIcon: <Icon name="search" className="w-4 h-4" />,
    trailingAction: (
      <Button variant="ghost" size="sm" className="px-2 py-1 text-warm-400 hover:text-warm-700">
        <Icon name="x" className="w-4 h-4" />
      </Button>
    ),
  },
};

export const DisabledState = {
  name: 'Disabled',
  args: {
    variant: 'outline',
    label: 'Location',
    placeholder: 'Dubai',
    disabled: true,
  },
};
