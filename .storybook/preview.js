import '../src/assets/css/source.css';
import '../src/assets/css/custom-ush.css';

export const parameters = {
  themes: {
    default: 'Source',
    list: [
      {
        name: 'Source',
        class: 'source',
        color: '#dcdcdc'
      },
      {
        name: 'US History',
        class: 'ush',
        color: '#3644DA'
      },
      {
        name: 'DBI',
        class: 'dbi',
        color: 'green'
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
