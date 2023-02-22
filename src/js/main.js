"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const textarea = document.querySelector('.textContent--js');
const load = document.querySelector('.load--js');
const save = document.querySelector('.save--js');
const buttonDelete = document.querySelector('.delete--js');

save.addEventListener('click', (e) => {
  localStorage.setItem('textarea', textarea.value);
});

load.addEventListener('click', (e) => {
  textarea.value = localStorage.getItem('textarea');
});

buttonDelete.addEventListener('click', (e) => {
  localStorage.removeItem('textarea');
  textarea.value = " ";
});

