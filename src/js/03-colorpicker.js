import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs';

const colors = [
  { hex: '#7f11e0', rgb: 'rgb(127, 17, 224)' },
  { hex: '#fff', rgb: 'rgb(255,255,255)' },
  { hex: '#cdcdcd', rgb: 'rgb(205,205,205)' },
  { hex: '#cdff', rgb: 'rgb(204, 221 , 255)' },
  { hex: '#bbdfff', rgb: 'rgb(187, 223, 255)' },
];

const paletteContainerEl = document.querySelector('.js-palette');
const cardsMarkup = createColorMarkup(colors);

paletteContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainerEl.addEventListener('click', onPaletteContainerClick);

function createColorMarkup(colors) {
  // return colors.map(color => colorCardTpl(color)).join('');
  // return colors.map(colorCardTpl).join('');
  return colorCardsTpl(colors);
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
