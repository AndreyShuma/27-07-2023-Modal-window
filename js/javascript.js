'use strict';

const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const btn_close = document.querySelector('.btn-close');

btn.addEventListener('click', () => {
    wrapper.classList.toggle('show');
});
btn_close.addEventListener('click', () => {
    wrapper.classList.toggle('show');
});

// console.log(btn);
// console.log(wrapper);
// console.log('Helow!!');