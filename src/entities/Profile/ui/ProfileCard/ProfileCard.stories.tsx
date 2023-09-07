import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Алексей',
    lastname: 'Новиков',
    age: 27,
    currency: Currency.USD,
    country: Country.Belarus,
    city: 'Bor',
    username: 'admin',
    avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
