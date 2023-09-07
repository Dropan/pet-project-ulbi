import { Story } from '@storybook/react';
import '@/app/styles/index.scss';

export const StyleDecorator = (StyleComponent: Story) => (
  <div className="app light">
    <StyleComponent />
  </div>
);
