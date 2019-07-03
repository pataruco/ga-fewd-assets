const selectElement = document.getElementById('years') as HTMLSelectElement;
const formElement = document.getElementById('js-form') as HTMLFormElement;
const paragraphElement = document.getElementById(
  'js-random-year',
) as HTMLParagraphElement;
const currentYear = new Date().getFullYear();
const edgeTopYear = currentYear - 15;
const edgeBottomYear = edgeTopYear - 75;

const renderOptionElement = (year: number) => {
  const optionElement = document.createElement('option') as HTMLOptionElement;
  optionElement.value = String(year);
  const optionText = document.createTextNode(String(year));
  optionElement.appendChild(optionText);
  selectElement.appendChild(optionElement);
};

const renderYears = () => {
  for (let i = edgeTopYear; i > edgeBottomYear; i--) {
    renderOptionElement(i);
  }
};

const getRandomYear = (yearOfBirth: number): number =>
  Math.floor(Math.random() * (currentYear - yearOfBirth + 1)) + yearOfBirth;

const renderRandomYear = (event: Event) => {
  event.preventDefault();
  paragraphElement.innerText = '';
  const yearOfBirth = Number(
    selectElement.options[selectElement.selectedIndex].value,
  );
  const randomYear = getRandomYear(yearOfBirth);
  const randomYearText = document.createTextNode(String(randomYear));
  paragraphElement.appendChild(randomYearText);
};

formElement.addEventListener('submit', renderRandomYear);
window.addEventListener('load', renderYears);
