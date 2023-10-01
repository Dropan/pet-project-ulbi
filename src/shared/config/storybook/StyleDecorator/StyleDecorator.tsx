import { Story } from '@storybook/react';
// eslint-disable-next-line ulbi-tv-plugin-test/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StyleComponent: Story) => (
  <div className="app light">
    <StyleComponent />
  </div>
);
