'use strict';

const redText = document.querySelector('#redText');
const typeFace = document.querySelector('#typeFace');
const originContent = document.querySelector('#originContent');
const aboutContent = document.querySelector('#aboutContent');

console.log(originContent);

function changeTextColour() {
  originContent.style.color = '#FF0000';
}

function changeTypeFace() {
  aboutContent.style.fontFamily = 'Times New Roman';
}

redText.addEventListener('click', changeTextColour);

typeFace.addEventListener('click', changeTypeFace);
