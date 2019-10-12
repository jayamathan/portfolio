simport {
  ANGULAR,
  CSS3,
  HTML5,
  REACT,
  REDUX,
  SASS,
  JAVASCRIPT,
  PIT_LOGO,
  MEDZIN_LOGO,
  MM_LOGO,
  DAUBLE_LOGO,
  TT_LOGO,
  INSTAGRAM,
  FACEBOOK,
  TWITTER,
  GITHUB
} from "../assets/imgs";

export const SOCIAL_LINKS = [
  {
    id: 1,
    link: "https://www.instagram.com/abhishar.jangir/",
    img: INSTAGRAM,
    name: "Instagram"
  },
  {
    id: 2,
    link: "https://www.facebook.com/imabhi.in",
    img: FACEBOOK,
    name: "Facebook"
  },
  {
    id: 3,
    link: "https://twitter.com/abhishar_jangir",
    img: TWITTER,
    name: "Twitter"
  },
  {
    id: 4,
    link: "https://github.com/abhisharkjangir",
    img: GITHUB,
    name: "Github"
  }
];

export const HEADER_LINKS = [
  {
    id: "home",
    name: "Home",
    to: "/"
  },
  {
    id: "about",
    name: "About",
    to: "/about"
  },
  // {
  //   id: 'mywork',
  //   name: 'My Work',
  //   to: '/mywork',
  // },
  {
    id: "contact",
    name: "Contact",
    to: "/contact"
  }
];

export const TOP_SKILLS = [
  {
    name: "Angular JS",
    imgSrc: ANGULAR,
    rating: "03"
  },
  {
    name: "React JS",
    imgSrc: REACT,
    rating: "03"
  },
  {
    name: "Redux",
    imgSrc: REDUX,
    rating: "03"
  },
  {
    name: "JavaScript",
    imgSrc: JAVASCRIPT,
    rating: "03"
  },
  {
    name: "CSS3",
    imgSrc: CSS3,
    rating: "03"
  },
  {
    name: "SASS",
    imgSrc: SASS,
    rating: "03"
  },
  {
    name: "HTML5",
    imgSrc: HTML5,
    rating: "03"
  }
];

export const LOGO_URL = "../assets/imgs/logo.png";

export const EXPERIENCE = [
  {
    id: 1,
    time: "Oct'18 - Present",
    title: "Bed Bath and Beyond",
    descriptiion: "",
    designation: "System Analyst"
  },
  {
    id: 2,
    time: "Aug'16 - Oct'18",
    title: "Chimes Group",
    descriptiion:
      "As UI engineer, I worked on dauble collector, dauble business website, dauble admin dashboard and pipetrak app.",
    designation: "UI Engineer"
  },
  {
    id: 3,
    time: "Nov'15 - Jul'16",
    title: "Medzin",
    descriptiion:
      "I have worked on medzin website and medzin dashboard as front end developer and also worked on app design.",
    designation: "Front End Developer"
  },
  {
    id: 3,
    time: "2011-2015",
    title: "BKBIET, Pilani",
    descriptiion: "Graduation",
    designation: "B.Tech"
  }
];

export const WORKED_WITH = [
  {
    id: 1,
    imgSrc: PIT_LOGO
  },
  {
    id: 2,
    imgSrc: MM_LOGO
  },
  {
    id: 3,
    imgSrc: DAUBLE_LOGO
  },
  {
    id: 4,
    imgSrc: MEDZIN_LOGO
  },
  {
    id: 5,
    imgSrc: TT_LOGO
  }
];

// eslint-disable-next-line
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  APP_NAME: "Reactor",
  ENV_TYPES: {
    PROD: "prod",
    STAG: "stag",
    LOCAL: "local"
  }
};
