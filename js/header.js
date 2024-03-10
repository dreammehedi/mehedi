// primary menu
const primaryMenuContent = [
  {
    id: 1,
    name: "Home",
    link: "./index.html",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

const primaryMenu = document.querySelector("#primary-menu");

primaryMenu.innerHTML = primaryMenuContent
  .map(({ name, link }) => {
    return `<li>
    <a href="${link}" class="hover:text-secondary">${name}</a>
  </li>`;
  })
  .join("");

// mobile primary menu
const mobilePrimaryMenu = document.querySelector("#mobile-primary-menu");
mobilePrimaryMenu.innerHTML = primaryMenuContent
  .map(({ name, link }) => {
    return `<li>
    <a href="${link}" class="hover:text-secondary">${name}</a>
  </li>`;
  })
  .join("");

// social menu
const socialMenuContent = [
  { id: 1, icon: "ri-facebook-circle-fill", link: "" },
  { id: 1, icon: "ri-twitter-fill", link: "" },
];

const socialMenu = document.querySelector("#social-menu");
socialMenu.innerHTML = socialMenuContent
  .map(({ icon, link }) => {
    return `<a class="transition-all duration-300 ease-linear hover:text-secondary" href="${link}"
  ><i class=" ${icon}"></i
></a>`;
  })
  .join("");

//   toggle mobile menu
const toggleMobileMenu = document.querySelector("#toggle-mobile-menu");
toggleMobileMenu.addEventListener("click", () => {
  setTimeout(() => {
    mobilePrimaryMenu.classList.toggle("-left-full");
  }, 1000);
});
