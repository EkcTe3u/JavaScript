document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

const links = document.querySelectorAll('.menu-item > a');

links.forEach((link) => {
  link.onclick = function () {
    document
      .getElementById(link.getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
});

const buttons = document.querySelectorAll('.product-item .button');

buttons.forEach((button) => {
  button.onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
});

const prices = document.getElementsByClassName('products-item-price');
document.getElementById('change-currency').onclick = function (e) {
  const currectCurrency = e.target.innerText;
  let newCurrency = '$';
  let coefficient = 1;

  if (currectCurrency === '$') {
    newCurrency = '₽';
    coefficient = 90;
  } else if (currectCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currectCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 0.9;
  } else if (currectCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) +
      ' ' +
      newCurrency;
  }
};

const product = document.getElementById('product');
const nameS = document.getElementById('nameS');
const phone = document.getElementById('phone');

document.getElementById('order-action').onclick = function () {
  let hasError = false;
  [product, nameS, phone].forEach((item) => {
    if (!item.value) {
      item.style.borderColor = 'red';
      hasError = true;
    } else {
      item.style.borderColor = '';
    }
  });

  if (!hasError) {
    [product, nameS, phone].forEach((item) => {
      item.value = '';
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с Вами!');
  }
};
