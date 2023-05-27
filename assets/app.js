/* 
  Steven Lin's Portfolio
*/

// Header navigation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // Updates the header navigation's 'active-tab'
  for (const section of sections) {
    let id = section.getAttribute('id');
    let top = window.scrollY;
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;

    if ((top >= offset) && (top < (offset + height))) {
      for (const link of navLinks) {
        link.classList.remove('active-tab');
        document.querySelector('header nav a[href*=' + id + ']')
          .classList.add('active-tab');
      }
    }
  }

  // Enables header background color change after scrolling
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 250);
}