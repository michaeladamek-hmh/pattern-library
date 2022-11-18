import '../src/assets/css/source.css';
import '../src/assets/css/custom-ush.css';
import '../src/assets/css/custom_dbi.css';
import '../src/assets/css/custom-racism.css';
import '../src/assets/css/custom-lit68.css'

export const parameters = {
  backgrounds: {
    default: 'grade68',
    values: [
      {
        name: 'gradek',
        value: '#00aced',
      },
      {
        name: 'grade1',
        value: '#3b5998',
      },
      {
        name: 'grade23',
        value: '#00aced',
      },
      {
        name: 'grade45',
        value: '#3b5998',
      },
      {
        name: 'grade68',
        value: '#00aced',
      },
      {
        name: 'grade912',
        value: '#3b5998',
      },
    ],
  },
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
        color: '#A733FF'
      },
      {
        name: 'Confronting Racism',
        class: 'racism',
        color: '#FFF200'
      },
      {
        name: 'Into Lit 6-8',
        class: 'lit68',
        color: '#00326b'
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
