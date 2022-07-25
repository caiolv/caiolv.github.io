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
    'Hello! My name is Caio and I love developing intuitive applications. My interest in web development started back when I was 14 and decided to try editing custom Tumblr themes and also creating my own.',
  paragraphTwo: ``, // `I\'ve worked on ShowCommerce and Mirante Tecnologia developing front-end applications.`,
  paragraphThree: "Technologies I'm passionate about: ",
  techs: ['react', 'react-native', 'styled-components', 'redux', 'node.js', 'express.js'],
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fastfeet.png',
    title: 'FastFeet',
    info: 'Fast Feet is a full Stack JS application for managing a deliveries.',
    info2: 'Techs used: react, redux, styled-components',
    url: '',
    repo: 'https://github.com/caiolv/fastfeet-web',
  },
  {
    id: nanoid(),
    img: 'color-game.png',
    title: 'Color Game',
    info: 'A fun game where you win by guessing the right color from a RGB color code.',
    info2: 'Techs used: react, reduxjs-toolkit, styled-components',
    url: 'https://color-game-v2.netlify.app',
    repo: 'https://github.com/caiolv/color-game-v2',
  },
  {
    id: nanoid(),
    img: 'natours.png',
    title: 'natours',
    info: 'Booking experience website for adventurous people.',
    info2: 'Techs used: react and sass',
    url: 'https://caiolv-natours.netlify.app/',
    repo: 'https://github.com/caiolv/natours',
  },
  {
    id: nanoid(),
    img: 'trillo.png',
    title: 'trillo',
    info: 'Your all-in-one booking app.',
    info2: 'Techs used: react and sass',
    url: 'https://caiolv-trillo.netlify.app/',
    repo: 'https://github.com/caiolv/trillo',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
