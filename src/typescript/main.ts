import portfolioData from "./data/portfolioData.js";
import IPortfolio from "./interfaces/portfolio.interface";

const portfolioSection = document.querySelector(".portfolio");

const createPortfolioItem = ({ title, description, image, stack }: IPortfolio): string => {
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
      </div>

      <div class="portfolio-wrapper__stack">
        ${skills.join()}
      </div>
    </article>
  `;
};

const insertPortfolioSection = (portfolioData: IPortfolio[]): void => {
  portfolioData.forEach((portfolio) => {
    if (portfolioSection) {
      portfolioSection.innerHTML += createPortfolioItem(portfolio);
    }
  });
};

insertPortfolioSection(portfolioData);
