'use strict';

const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const btn_close = document.querySelector('.btn-close');

btn.addEventListener('click', () => {
    wrapper.classList.add('show');
});
btn_close.addEventListener('click', () => {
    wrapper.classList.remove('show');
});

// console.log(btn);
// console.log(wrapper);
// console.log('Helow!!');