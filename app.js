
  const $card1 = document.getElementById('first');
  const $card2 = document.getElementById('second');
  const $card3 = document.getElementById('third');
  const $firstBuy = document.getElementById('first-buy');
  const $secondBuy = document.getElementById('second-buy');
  const $thirdBuy = document.getElementById('third-buy');

  const select = (id) => {
    if (document.querySelector(id + ' .delicacy').classList.contains('delicacy-disabled') === false) {
    document.querySelector(id + ' .delicacy').classList.toggle('delicacy-select');
    document.querySelector(id + ' .triangle').classList.toggle('triangle-select');
    document.querySelector(id + ' .oval').classList.toggle('oval-select');
  }
  };

  const changeText = (id, wrap) => {
    if (document.querySelector(id + ' .delicacy').classList.contains('delicacy-select') 
    && document.querySelector(id + ' .delicacy').classList.contains('delicacy-disabled') === false) {
      document.querySelector(wrap + ' .buy').style.display = 'none';
      document.querySelector(wrap + ' .buy-select').style.display = 'block';
    } else if (document.querySelector(id + ' .delicacy').classList.contains('delicacy-disabled')) {
      document.querySelector(wrap + ' .buy').style.display = 'none';
      document.querySelector(wrap + ' .buy-select').style.display = 'none';
      document.querySelector(wrap + ' .buy-disabled').style.display = 'block';
    }else {
      document.querySelector(wrap + ' .buy').style.display = 'block';
      document.querySelector(wrap + ' .buy-select').style.display = 'none';
    }
  }

//Card
  $card1.addEventListener('click', () => {
    select('#first');
    changeText('#first', '#first-wrap');
  });

  $card2.addEventListener('click', () => {
   select('#second');
   changeText('#second', '#second-wrap');
  });

  $card3.addEventListener('click', () => {
   select('#third');
   changeText('#third', '#third-wrap');
  });

// Link
  $firstBuy.addEventListener('click', () => {
    select('#first');
    changeText('#first', '#first-wrap');
  });

  $secondBuy.addEventListener('click', () => {
    select('#second');
    changeText('#second', '#second-wrap');
   });

   $thirdBuy.addEventListener('click', () => {
    select('#third');
    changeText('#third', '#third-wrap');
   });

  //  Disabled

  const disabled = (id, wrap) => {
    document.querySelector(id + ' .delicacy').classList.add('delicacy-disabled');
    document.querySelector(id + ' .triangle').classList.add('triangle-disabled');
    document.querySelector(id + ' .hero').classList.add('hero-disabled');
    document.querySelector(id + ' .brand-name').classList.add('brand-name-disabled');
    document.querySelector(id + ' .filling').classList.add('filling-disabled');
    document.querySelector(id + ' .bonus').classList.add('bonus-disabled');
    document.querySelector(id + ' .oval').classList.add('oval-disabled');
    document.querySelector(wrap + ' .buy').style.display = 'none';
    document.querySelector(wrap + ' .buy-select').style.display = 'none';
    document.querySelector(wrap + ' .buy-disabled').style.display = 'block';
  };

  document.querySelector('.disabled').addEventListener('click', () => {
  disabled('#first', '#first-wrap');
  disabled('#second', '#second-wrap');
  disabled('#third', '#third-wrap');
  });

  document.querySelector('.reload').addEventListener('click', () => {
    window.location.reload();
    });
