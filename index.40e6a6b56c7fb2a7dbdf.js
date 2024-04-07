/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


{
  //изменение размера шапки страницы и ее прозрачности
  // в десктопном и мобильном вариантах при скролле

  var header = document.querySelector(".header");
  var divBack = document.querySelector(".header--div__BACK");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header__blur");
      divBack.classList.add("header__rise");
    } else {
      header.classList.remove("header__blur");
      divBack.classList.remove("header__rise");
    }
  });

  // открытие мобильного меню и анимация кнопки-бургера

  var body = document.querySelector("body");
  var ul = document.querySelector(".header--ul");
  var buttonBurger = document.querySelector(".header--button__BURGER");
  var line1 = document.querySelector(".header--line:first-of-type");
  var line2 = document.querySelector(".header--line:nth-of-type(2)");
  var line3 = document.querySelector(".header--line:last-of-type");
  buttonBurger.addEventListener("click", function () {
    body.classList.toggle("body__fixed");
    ul.classList.toggle("header__open");
    divBack.classList.toggle("header__backopen");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
  });
}
/******/ })()
;