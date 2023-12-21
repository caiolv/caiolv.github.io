import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Caio Oliveira | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'TEses', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm ",
  name: 'Caio Oliveira',
  subtitle: 'Front-end developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello! My name is Caio and I love developing intuitive and beautiful applications. My interest in web development started back when I was 14 and decided to try editing custom Tumblr themes and also creating my own.',
  paragraphTwo: `I believe technology has evolved to help humans product more in a simpler way.`, // `I\'ve worked on ShowCommerce and Mirante Tecnologia developing front-end applications.`,
  paragraphThree: "Technologies I'm passionate about: ",
  techs: [
    'react',
    'angular',
    'react-native',
    'swift',
    'swiftui',
    'styled-components',
    'redux',
    'node.js',
    'express.js',
  ],
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'invest-academy.png',
    title: 'Invest Academy',
    info: 'Learn platform for those who want to learn about the financial market.',
    info2: 'Techs used: React, Redux, Styled-Components',
    url: 'http://invest.academy/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'confianca.png',
    title: 'Confiança Delivery',
    info: 'Supermarket e-commerce app for Confiança Supermercados.',
    info2: 'Techs used: React, Redux',
    url: 'https://www.confianca.com.br/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'febtv.png',
    title: 'FEBTv',
    info: 'An iOS and Android app to keep track of news, content and donation campaigns of FEBTv, an online television platform.',
    info2: 'Techs used: ReactNative, Redux',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'fortune.png',
    title: 'Fortune',
    info: 'Budget app to keep track of your incomes and outcomes. To Do: charts and filter by month.',
    info2: 'Techs used: Swift, SwiftUI, SwiftData.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'ctg.png',
    title: 'CTG JCB',
    info: 'Android app for events, news, contents and plan management of CTG - a center of traditions.',
    info2: 'Techs used: ReactNative, Redux.',
    url: 'https://play.google.com/store/apps/details?id=br.com.showcommerce.ctg&hl=en_US',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact me? Awesome',
  btn: '',
  email: 'caiolv@me.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/caio-oliveira-b1365a124/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/caiolv',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
