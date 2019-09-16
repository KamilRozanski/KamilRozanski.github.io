"use strict";

import { listenerCount } from "cluster";

// // service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// place your code below


console.log(`Code review, Is never enoug 👋`);

fetch('https://api.github.com/users/KamilRozanski/repos?sort=updated')
.then(resp => resp.json()) 
.then(resp => {
  const repos = resp;
  for ( const repo of repos) {
    const {descriptions, homepage, html_url, name} = repo;
    
    list.innerHTML += `
    <li class="project-list__item">
    <div class="project-list-wrapper">
      <img class="project-list__logo" src="assets/img/Github-Icon.png" alt="github-logo">
      <h4 class="project-list__title">${name}</h4>
      <p class="project-list__description">${descriptions}
        </p>
    </div>
    <section class="project-footer">
      <div class="project-footer-wrapper">
      <a class="project-footer__link" href="#"> <span class="project-footer__span">Demo</span> </a>
      <a class="project-footer__link" href="#"><span class="project-footer__span project-footer__span--code">Github</span> </a>
    </div>
    </section>
  </li>`


    console.log (name);
  }

})
  

.catch(err => {
  console.log ('error');
})


console.log ('dupa)';