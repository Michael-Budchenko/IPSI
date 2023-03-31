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

if (burger && navMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("lock");
  });
  navMenu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

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

let coll = document.getElementsByClassName("dropdown__button");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
