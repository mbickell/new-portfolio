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
    title: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsum perspiciatis. Neque commodiimpedit nam alias. Quos facere nulla iste quisquam excepturi esse natus, quia fugiat, non similiqueminima.",
    image: "http://www.fillmurray.com/g/400/200",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    stack: [
      ["fab", "html5"],
      ["fab", "css3"],
      ["fab", "js"]
    ]
  },
  {
    title: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsum perspiciatis. Neque commodiimpedit nam alias. Quos facere nulla iste quisquam excepturi esse natus, quia fugiat, non similiqueminima.",
    image: "http://www.fillmurray.com/g/400/200",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    stack: [
      ["fab", "html5"],
      ["fab", "css3"],
      ["fab", "js"]
    ]
  },
  {
    title: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsum perspiciatis. Neque commodiimpedit nam alias. Quos facere nulla iste quisquam excepturi esse natus, quia fugiat, non similiqueminima.",
    image: "http://www.fillmurray.com/g/400/200",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    stack: [
      ["fab", "html5"],
      ["fab", "css3"],
      ["fab", "js"]
    ]
  }
];

export default portfolioData;
