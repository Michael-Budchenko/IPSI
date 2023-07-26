<<<<<<< HEAD
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  
});
=======
import $, { event } from "jquery";
import "slick-carousel";

let header = document.querySelector(".header");
let headerHeight = document.querySelector(".header").clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > headerHeight) {
    header.classList.add("fixed");
    document.body.style.paddingTop = headerHeight + "px";
  } else {
    header.classList.remove("fixed");
    document.body.removeAttribute("style");
  }
};

let burger = document.querySelector(".menu__burger");
let navMenu = document.querySelector(".menu__list");
let body = document.body;

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true

const anchors = document.querySelectorAll('a[href*="#"');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      window.scrollBy(0, -90);
    }, 1000);
  });
});

$(document).ready(function () {
  $(".carousell-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: "ondemand",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: "ondemand",
        },
      },
    ],
  });
});

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
>>>>>>> 3124e9d88a55d86a2d377cd4a4d7019e652a50ef
