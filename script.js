
const cards = document.querySelectorAll('.card-border');

const addHoverBtn = function () {
  const btn = this.parentNode.parentNode.querySelector('.card-border');
  const border = btn;
  const oval =btn.querySelector('.card__oval');

  border.classList.add('background-hover');
  oval.classList.add('background-hover');
};

const removeHoverBtn = function () {
  const btn = this.parentNode.parentNode.querySelector('.card-border');
  const border =  btn;
  const oval = btn.querySelector('.card__oval');

  border.classList.remove('background-hover');
  oval.classList.remove('background-hover');
};

const addClickBtn = function () {
  const btn = this.parentNode.parentNode.querySelector('.card-border');
  const border = btn;
  const oval =  btn.querySelector('.card__oval');
  const cardtext =  btn.parentNode.querySelector('.card-tagline');

  if (!btn.classList.contains('card-selected')) {
    btn.classList.add('card-selected');
    border.classList.add('background-selected');
    oval.classList.add('background-selected');
    if (btn.dataset = 'duck') {
      cardtext.textContent = 'Печень утки разварная с артишоками.';
    } else if ( btn.dataset = 'fish') {
      cardtext.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if ( btn.dataset = 'chiken') {
      cardtext.textContent = 'Филе из цыплят с трюфелями в бульоне.';
    }
  }
};

const addHover = function () {
  const card = this;
  const border =  card;
  const oval = card.querySelector('.card__oval');
  const heroText =  card.querySelector('.card__hero-text');

  border.classList.add('background-hover');
  oval.classList.add('background-hover');

  if (card.classList.contains('card-selected')) {
    heroText.textContent = 'Котэ не одобряет?';
    heroText.style.color = 'var(--selected-hover)';
    
    border.classList.add('background-selected-hover');
    oval.classList.add('background-selected-hover');
  }

};

const removeHover = function () {
  const card = this;
  const border = card;
  const oval = card.querySelector('.card__oval');
  const heroText =  card.querySelector('.card__hero-text');

  heroText.textContent = 'Сказочное заморское яство';
  heroText.style.color = 'var(--font-grey)';

  border.classList.remove('background-hover');
  oval.classList.remove('background-hover');

  if (card.classList.contains('card-selected')) {
    heroText.textContent = 'Сказочное заморское яство';
    heroText.style.color = 'var(--font-grey)';

    border.classList.remove('background-selected-hover');
    oval.classList.remove('background-selected-hover');
  }
};

const addClick = function () {
  const card = this;
  const border =  card;
  const oval = card.querySelector('.card__oval');
  const cardText = card.parentNode.querySelector('.card-tagline');

  if (!card.classList.contains('card-selected')) {
    card.classList.add('card-selected');
    border.classList.add('background-selected');
    oval.classList.add('background-selected');
    if (card.dataset = 'duck') {
      cardText.textContent = 'Печень утки разварная с артишоками.';
    } else if (card.dataset = 'fish') {
      cardText.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if (card.dataset = 'chiken') {
      cardText.textContent = 'Филе из цыплят с трюфелями в бульоне.';
    }
  } else {
    card.classList.remove('card-selected');
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

cards.forEach(card => {
  addHover.bind(card);
  card.addEventListener('mouseover', addHover);
  removeHover.bind(card);
  card.addEventListener('mouseout',removeHover);
  addClick.bind(card);
  card.addEventListener('click', addClick); 

  const btn = card.parentNode.querySelector('.card-tagline__btn');
  addHoverBtn.bind(btn);
  btn.addEventListener('mouseover', addHoverBtn);
  removeHoverBtn.bind(btn);
  btn.addEventListener('mouseout', removeHoverBtn);
  addClickBtn.bind(btn);
  btn.addEventListener('click', addClickBtn); 
});



const disabled = function () {
    const card = this;
    back = card.querySelector('.card')
    console.log(' back: ', back);
    const border =  card;
    const oval = card.querySelector('.card__oval');
    const cardText = card.parentNode.querySelector('.card-tagline');
  
    if (!card.classList.contains('card-disabled')) {
      back.classList.add('card-disabled');
      border.classList.add('background-disabled');
      oval.classList.add('background-disabled');
      if (card.dataset = 'duck') {
        cardText.textContent = '111.';
      } else if (card.dataset = 'fish') {
        cardText.textContent = '222.';
      } else if (card.dataset = 'chiken') {
        cardText.textContent = '3.';
      }
    } else {
      card.classList.remove('card-disabled');
      border.classList.remove('background-disabled');
      oval.classList.remove('background-disabled');
      // border.classList.remove('background-selected-hover');
      // oval.classList.remove('background-selected-hover');
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

cards.forEach(card => {
  disabled.bind(card)
  card.addEventListener('dblclick', disabled); 
})



