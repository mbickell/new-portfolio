import portfolioData from "./data/portfolioData.js";
const portfolioSection = document.querySelector(".portfolio");
const createPortfolioItem = ({ title, description, image, liveLink, githubLink, stack }) => {
    const skills = stack.map((skill) => {
        return `<span class="portfolio-wrapper__technology fab fa-${skill}"></span>`;
    });
    return `
    <article class="portfolio-wrapper">
      <img src="${image}" alt="${title}" class="portfolio-wrapper__img" />

      <div class="portfolio-wrapper__text">
        <h3 class="portfolio-wrapper__title">${title}</h3>
        <p class="portfolio-wrapper__description">
          ${description}
        </p>
        <div class="portfolio-wrapper__links">
          <a class="portfolio-wrapper__link" href="${liveLink}" target="blank" ><span class="fab fa-github-square" ></span></a>
          <a class="portfolio-wrapper__link" href="${githubLink}" target="blank" ><span class="fas fa-external-link-square-alt" ></span></a>
        </div>
      </div>

      <div class="portfolio-wrapper__stack">
        ${skills.join("")}
      </div>
    </article>
  `;
};
const insertPortfolioSection = (portfolioData) => {
    portfolioData.forEach((portfolio) => {
        if (portfolioSection) {
            portfolioSection.innerHTML += createPortfolioItem(portfolio);
        }
    });
};
insertPortfolioSection(portfolioData);
