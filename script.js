const barsIco = document.querySelector('.fa-bars');
const crossIco = document.querySelector('.fa-times');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

// Responsive Menu 
  addEventListener('DOMContentLoaded', () => {
    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        barsIco.classList.toggle('d-none');
        crossIco.classList.toggle('show'); 
      })
  })

// Responsive Menu items on click
  navLinks.addEventListener('click', () => {
      navLinks.classList.remove('active');
      barsIco.classList.remove('d-none');
      crossIco.classList.remove('show');
  })

// Popup
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const projectImg1 = document.querySelector('.project__img1');
const seeMore = document.querySelector('.project-see')

  addEventListener('DOMContentLoaded', () =>{
    seeMore.addEventListener('click', () => {
         popup.classList.remove('hide__popup');

         closePopup.addEventListener('click', () => {
            popup.classList.add('hide__popup');
         })
     })
  })

// Send Msg PreventDefault
const sendMsg = document.querySelector('.send-msg');

  sendMsg.addEventListener('click', e => {
    e.preventDefault();
  })
