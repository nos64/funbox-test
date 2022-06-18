
const cards = document.querySelectorAll('.card-border');
const addHover = function () {
  const card = this;
  const border =  card;
  const oval = card.querySelector('.card__oval');
  const cardBtn = card.parentNode.querySelector('.card-tagline__btn');

  border.classList.add('background-hover');
  oval.classList.add('card__oval-hover');
  cardBtn.classList.add('text-hover');

};

const removeHover = function () {
  const card = this;
  const border = card;
  const oval = card.querySelector('.card__oval');
  const cardBtn = card.parentNode.querySelector('.card-tagline__btn');

  border.classList.remove('background-hover');
  oval.classList.remove('card__oval-hover');
  cardBtn.classList.remove('text-hover');

};

cards.forEach(card => {
  addHover.bind(card);
  card.addEventListener('mouseover', addHover);
});

cards.forEach(card => {
  removeHover.bind(card);
  card.addEventListener('mouseout',removeHover);
});











