/* 
  Steven Lin's Portfolio
*/


// Enables header to change background colors after scrolling
window.onscroll = () => {
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 250);
}