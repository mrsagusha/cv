const navigationContainer = document.querySelector('.navigation-container');

export default function createNavigationTab(text) {
  const navigationTab = document.createElement('li');

  navigationTab.textContent = text;
  navigationTab.className = `navigation-tab ${text.replace(/ /g, '')}`;
  navigationContainer.appendChild(navigationTab);
}
