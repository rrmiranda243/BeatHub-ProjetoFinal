const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','navMenu')


//Slides

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
        el: ".swiper-pagination",
      },
});

const track = document.querySelector('.banner-artistas__track');
let pos = 0;
const speed = 1;

function animate() {
  pos -= speed;
  const half = track.scrollWidth / 2;
  if (pos <= -half) pos = 0;
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();