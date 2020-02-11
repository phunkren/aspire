import { Stage } from './styles';

export const contexts = [
  {
    icon: 'photo',
    title: 'Themes',
    components: [Stage],
    params: [
      {
        name: 'Light',
        props: { theme: 'light' },
        default: true,
      },
      { name: 'Dark', props: { theme: 'dark' } },
    ],
  },
];
