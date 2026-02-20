// Import Tailwind + Driven global styles so all stories render correctly
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'Driven Warm',
      values: [
        { name: 'Driven Warm',  value: '#fafaf9' },
        { name: 'White',        value: '#ffffff' },
        { name: 'Driven Dark',  value: '#1c1917' },
        { name: 'Card surface', value: '#f5f2ed' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    docs: {
      canvas: { style: { background: '#fafaf9' } },
    },
  },
};

export default preview;
