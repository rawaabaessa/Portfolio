import projImg1 from "./assets/img/Frame 1.svg";
import projImg2 from "./assets/img/Frame 2.svg";
import projImg3 from "./assets/img/Frame 4.svg";
import projImg4 from "./assets/img/Frame 5.svg";
import projImg5 from "./assets/img/Frame 6.svg";
import projImg6 from "./assets/img/Frame 7.svg";
import projImg7 from "./assets/img/Frame 3.svg";
import qaah from "./assets/img/qaah.png";
import vegan from "./assets/img/veganlife.png";
import foodi from "./assets/img/foodi.png";
import sonrisa from "./assets/img/sonrisa.png";
import porfolio from "./assets/img/porfolio.png";

export const projects = [
  {
    title: "Nafas App",
    category: "ui/ux",
    imgUrl: projImg7,
    urls: [
      {
        id: 1,
        weburl: "#",
        githuburl: "#",
      },
    ],
    skills: [{ id: 9, name: "fa-brands fa-figma", title: "Figma" }],
  },
  {
    title: "Qaah Platform",
    category: "web",
    imgUrl: projImg2,
    urls: [
      {
        id: 1,
        weburl: "#",
        githuburl:
          "https://github.com/rawaabaessa/bootcamp-final-project-qaah-platform",
        fullImage: qaah,
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
      { id: 3, name: "fa-brands fa-square-js", title: "js" },
      { id: 4, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
      { id: 5, name: "fa-brands fa-laravel", title: "Laravel" },
      { id: 6, name: "fa-solid fa-database", title: "MySql" },
    ],
  },
  {
    title: "My Portfolio",
    category: "web",
    imgUrl: projImg6,
    urls: [
      {
        id: 1,
        weburl: "http://veganlife.42web.io/index.php",
        githuburl: "https://github.com/rawaabaessa/Portfolio",
        fullImage: porfolio,
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
      { id: 3, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
      { id: 4, name: "fa-brands fa-react", title: "React js" },
    ],
  },
  {
    title: "Vegan Life Blog",
    category: "web",
    imgUrl: projImg1,
    urls: [
      {
        id: 1,
        weburl: "http://veganlife.42web.io/index.php",
        githuburl:
          "https://github.com/rawaabaessa/mini-project-vegetarian-blog",
        fullImage: vegan,
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
      { id: 3, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
      { id: 4, name: "fa-brands fa-php", title: "PHP" },
      { id: 5, name: "fa-solid fa-database", title: "MySql" },
    ],
  },
  {
    title: "Foodi Website",
    category: "web",
    imgUrl: projImg3,
    urls: [
      {
        id: 1,
        weburl: "https://rawaabaessa.github.io/foodi/",
        githuburl: "https://github.com/rawaabaessa/foodi",
        fullImage: foodi,
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
      { id: 3, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
    ],
  },
  {
    title: "Sonrisa Website",
    category: "web",
    imgUrl: projImg4,
    urls: [
      {
        id: 1,
        weburl: "https://rawaabaessa.github.io/sonrisa/",
        githuburl: "https://github.com/rawaabaessa/sonrisa",
        fullImage: sonrisa,
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
      { id: 3, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
    ],
  },
  {
    title: "To Do List",
    category: "web",
    imgUrl: projImg5,
    urls: [
      {
        id: 1,
        weburl: "https://rawaabaessa.github.io/ToDo/",
        githuburl: "https://github.com/rawaabaessa/ToDo",
      },
    ],
    skills: [
      { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
      { id: 2, name: "fa-brands fa-square-js", title: "js" },
      { id: 3, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
    ],
  },
];
