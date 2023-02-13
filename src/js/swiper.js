import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper;