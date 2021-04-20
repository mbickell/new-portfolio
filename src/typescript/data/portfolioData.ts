import IPortfolio from "../interfaces/portfolio.interface";

const portfolioData: IPortfolio[] = [
  {
    title: "mkrc",
    description:
      "An NPM package made to generate components in React. Fueled by jealousy that there was no simple option to quickly create components containing boilerplate like in Angular, I made this save time while creating a new React project. The footprint is small, having only one dependency, and the operation isn't very fancy as it only generates components in a way that I prefer. It has been added to over time and now also supports Functional, Class based and TypeScript React.",
    image: "./assets/projects/mkrc.jpg",
    liveLink: "https://www.npmjs.com/package/mkrc",
    githubLink: "https://github.com/mbickell/mkrc",
    stack: [
      ["fab", "node"],
      ["fab", "npm"]
    ]
  },
  {
    title: "Knitting App",
    description:
      "Built with TypeScript React. My partner likes to knit and hadn't found a satisfying way of creating patterns apart from drawing them out, and I wanted a project to work on that would allow me to explore more interesting NoSQL database interactions, TypeScript React and email/password authentication. This is a WIP although all major features are present and the application is in just in need of some polish following user testing.",
    image: "./assets/projects/knitting-app.jpg",
    liveLink: "https://knitting.matthewbickell.co.uk/",
    githubLink: "https://github.com/mbickell/knitting-app",
    stack: [
      ["fab", "react"],
      ["fab", "sass"],
      ["fas", "database"]
    ]
  },
  {
    title: "Random Group Generator",
    description:
      "Built in vanilla JS. My first personal project which I have continued adding to as I have thought of better ways of presenting the information. Initially used as a way of avoiding the awkward small talk involved in finding people to work with while training on the bootcamp. It morphed over time as a tool to generate groups for my own intakes while I was a coach at a nology and now exists in its final state as way to randomise a list of custom names.",
    image: "./assets/projects/random-group-generator.jpg",
    liveLink: "https://groups.matthewbickell.co.uk/",
    githubLink: "https://github.com/mbickell/random-group-generator",
    stack: [
      ["fab", "html5"],
      ["fab", "css3"],
      ["fab", "js"]
    ]
  },
  {
    title: "Hostile Aliens",
    description: "A tech test built using vanilla JS. My first real attempt at object oriented programming, following the MVC model. The challenge of this tech test was to build a simple space invaders style game in <150 lines of code using OOP in a limited amouint of time (3-4 hours). My first pass involved just making the ships classes which I later refactored into a full MVC model.",
    image: "./assets/projects/hostile-aliens.jpg",
    liveLink: "https://mbickell.github.io/hostile-aliens/",
    githubLink: "https://github.com/mbickell/hostile-aliens",
    stack: [
        ["fab", "html5"],
        ["fab", "css3"],
        ["fab", "js"]
    ]
},
  {
    title: "Minesweeper Grid Generator",
    description:
      "Built in vanilla JS. This was a limited time tech test (3-4 hours) to dynamically generate a 15x15 minsweeper grid with 30 mines. Having time left at the end I opted to add a simple front end to make the size and amount of mines variable. Following a functional style of programming made this simple enough as the functions were pure and easy to interact with.",
    image: "./assets/projects/minesweeper.jpg",
    liveLink: "https://minesweeper.matthewbickell.co.uk/",
    githubLink: "https://github.com/mbickell/minesweeper",
    stack: [
      ["fab", "html5"],
      ["fab", "css3"],
      ["fab", "js"]
    ]
  }
];

export default portfolioData;
