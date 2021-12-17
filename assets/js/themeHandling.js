const DARK_MODE_BG = 'bg-black-90';
const DARK_MODE_TEXT = 'white-90';
const WHITE_SUN_WITH_RAYS = "&#9788;";
const DARK_SUN_WITH_RAYS = '&#9728;';

const pageBody = document.body;
const themeTogglingButton = document.querySelector('#theme-toggle');
let currentThemePreference = localStorage.getItem('theme-preference');

const makeDark = () => {
  pageBody.classList.add(DARK_MODE_BG, DARK_MODE_TEXT);
  themeTogglingButton.classList.add(DARK_MODE_TEXT);
  themeTogglingButton.innerHTML = WHITE_SUN_WITH_RAYS; // white sun w/ rays
}

const makeLight = () => {
  pageBody.classList.remove(DARK_MODE_BG, DARK_MODE_TEXT);
  themeTogglingButton.classList.remove(DARK_MODE_TEXT);
  themeTogglingButton.innerHTML = DARK_SUN_WITH_RAYS; // dark sun w/ rays
}

// honor previously set preference
if (currentThemePreference === 'dark') {
  makeDark();
}

themeTogglingButton.addEventListener('click', () => {
  // not using classList.toggle bc of the other logic involved w that unicode char
  if (pageBody.classList.contains(DARK_MODE_BG) && pageBody.classList.contains(DARK_MODE_TEXT)) {
    currentThemePreference = 'light';
    makeLight();
  } else {
    currentThemePreference = 'dark';
    makeDark();
  }
  localStorage.setItem('theme-preference', currentThemePreference);
});