// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Debasree Ghosh",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "An aspiring Full Stack Web Developer, capable of coding in languages like JavaScript, HTML and CSS. A rational person, capable of producing innovative ideas spontaneously. A keen observer and always have a craving for knowledge,looking forward to work as a softwear developer engineer in a reputed company. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
  // {
  //   name:"Type-script",
  //   //svg
  //   faClass:"fab fa-Type-script",
  // },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Credobeauty.com Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Debasree-3031999/CREADO_BEAUTY.git",
    net:""
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Meanbuy.com Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Debasree-3031999/Meanbuy.git",
    net:"https://meanbuy-debasree-u3proj.netlify.app/"
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Orbitz.com Colne",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Debasree-3031999/Orbitz.git",
    net:"https://orbitz-debasree-u3proj.netlify.app/"
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Kindmeal.com Clone",
    skills: ["HTML, CSS, JS,React"],
    url: "https://github.com/Debasree-3031999/Kindmeal.git",
    net:""
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    " You can contact me by dropping a mail on debasreeghosh1999@gmail.com or through either of the two medias.",
  copyright: "Debasree Ghosh",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Debasree-3031999",
  // facebook: "https://facebook.com",
  // // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/debasree-ghosh-673a16212/",
  resume: "/DebasreeResume.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
