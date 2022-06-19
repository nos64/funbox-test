'use strict'
const cards = document.querySelectorAll('.card-border');

const addHoverBtn = function () {
  const obj = this.parentNode.parentNode.querySelector('.card-border');
  const border = obj;
  const oval = obj.querySelector('.card__oval');

  border.classList.add('background-hover');
  oval.classList.add('background-hover');
};

const removeHoverBtn = function () {
  const obj = this.parentNode.parentNode.querySelector('.card-border');
  const border =  obj;
  const oval = obj.querySelector('.card__oval');

  border.classList.remove('background-hover');
  oval.classList.remove('background-hover');
};

const addClickBtn = function () {
  const obj = this.parentNode.parentNode.querySelector('.card-border');
  const border =obj;
  const oval =  obj.querySelector('.card__oval');
  const cardtext = obj.parentNode.querySelector('.card-tagline');

  if (!obj.classList.contains('card-selected')) {
    obj.classList.add('card-selected');
    border.classList.add('background-selected');
    oval.classList.add('background-selected');
    if (obj.dataset.taste === 'duck') {
      cardtext.textContent = 'Печень утки разварная с артишоками.';
    } else if ( obj.dataset.taste === 'fish') {
      cardtext.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if ( obj.dataset.taste === 'chiken') {
      cardtext.textContent = 'Филе из цыплят с трюфелями в бульоне.';
    }
  }
};

const addHover = function () {
  const obj = this;
  const border = obj;
  const oval = obj.querySelector('.card__oval');
  const heroText = obj.querySelector('.card__hero-text');

  border.classList.add('background-hover');
  oval.classList.add('background-hover');

  if (obj.classList.contains('card-selected')) {
    heroText.textContent = 'Котэ не одобряет?';
    heroText.classList.add('text-selected-hover');
    border.classList.add('background-selected-hover');
    oval.classList.add('background-selected-hover');
  }
};

const removeHover = function () {
  const obj = this;
  const border = obj;
  const oval =obj.querySelector('.card__oval');
  const heroText = obj.querySelector('.card__hero-text');

  border.classList.remove('background-hover');
  oval.classList.remove('background-hover');

  if (obj.classList.contains('card-selected')) {
    heroText.textContent = 'Сказочное заморское яство';
    heroText.classList.remove('text-selected-hover');
    border.classList.remove('background-selected-hover');
    oval.classList.remove('background-selected-hover');
  }
};

const addClick = function () {
  const obj = this;
  const border = obj;
  const oval =obj.querySelector('.card__oval');
  const cardText = obj.parentNode.querySelector('.card-tagline');
  const heroText =  obj.querySelector('.card__hero-text');

  heroText.textContent = 'Сказочное заморское яство';
  heroText.classList.remove('text-selected-hover');

  if (!obj.classList.contains('card-selected')) {
    obj.classList.add('card-selected');
    border.classList.add('background-selected');
    oval.classList.add('background-selected');
    if (obj.dataset.taste === 'duck') {
      cardText.textContent = 'Печень утки разварная с артишоками.';
    } else if (obj.dataset.taste === 'fish') {
      cardText.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if (obj.dataset.taste === 'chiken') {
      cardText.textContent = 'Филе из цыплят с трюфелями в бульоне.';
    }
  } else {
    if ( heroText.textContent === 'Котэ не одобряет?') {
      heroText.textContent = 'Сказочное заморское яство';
      heroText.classList.remove('text-selected-hover');
    }
    obj.classList.remove('card-selected');
    border.classList.remove('background-selected');
    oval.classList.remove('background-selected');
    border.classList.remove('background-selected-hover');
    oval.classList.remove('background-selected-hover');
    cardText.innerHTML = `Чего сидишь? Порадуй котэ, `;

    const span = document.createElement('span');
    span.textContent = 'купи.';
    span.className = 'card-tagline__btn';
    cardText.append(span);

    addHoverBtn.bind(span);
    span.addEventListener('mouseover', addHoverBtn);
    removeHoverBtn.bind(span);
    span.addEventListener('mouseout', removeHoverBtn);
    addClickBtn.bind(span);
    span.addEventListener('click', addClickBtn); 
  }
};

const disabled = function () {
  const obj = this;
  const background = obj.querySelector('.card');
  const border =  obj;
  const oval = obj.querySelector('.card__oval');
  const cardHeroText = obj.querySelector('.card__hero-text');
  const cardDescription = obj.querySelector('.card__description');
  const cardText = obj.parentNode.querySelector('.card-tagline');

  if (!obj.classList.contains('card-disabled')) {
    background.classList.add('card-disabled');
    border.classList.add('background-disabled');
    cardHeroText.classList.add('text-disabled');
    cardDescription.classList.add('text-disabled');
    oval.classList.add('background-disabled');
    obj.removeEventListener('mouseover', addHover);
    obj.removeEventListener('mouseout', removeHover);
    obj.removeEventListener('click', addClick);

    if (obj.dataset.taste === 'duck') {
      cardText.textContent = 'Печалька, с фуа-гра закончился.';
    } else if (obj.dataset.taste === 'fish') {
      cardText.textContent = 'Печалька, с рыбой закончился.';
    } else if (obj.dataset.taste === 'chiken') {
      cardText.textContent = 'Печалька, с курой закончился.';
    }
    cardText.classList.add('text-disabled-yellow');
    }
  };

cards.forEach(card => {
  addHover.bind(card);
  card.addEventListener('mouseover', addHover);
  removeHover.bind(card);
  card.addEventListener('mouseout',removeHover);
  addClick.bind(card);
  card.addEventListener('click', addClick); 
  disabled.bind(card)
  card.addEventListener('dblclick', disabled); 

  const btn = card.parentNode.querySelector('.card-tagline__btn');
  addHoverBtn.bind(btn);
  btn.addEventListener('mouseover', addHoverBtn);
  removeHoverBtn.bind(btn);
  btn.addEventListener('mouseout', removeHoverBtn);
  addClickBtn.bind(btn);
  btn.addEventListener('click', addClickBtn); 
});



