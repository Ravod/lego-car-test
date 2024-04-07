
`use strict`;




import './main.css';




{
    //изменение размера шапки страницы и ее прозрачности
    // в десктопном и мобильном вариантах при скролле
    
    const header = document.querySelector (`.header`);
    const divBack = document.querySelector (`.header--div__BACK`);

    window.addEventListener (`scroll`, () => {
        if (window.scrollY > 50) {
            header.classList.add (`header__blur`);
            divBack.classList.add (`header__rise`);
        } else {
            header.classList.remove (`header__blur`);
            divBack.classList.remove (`header__rise`);
        }
    });




    // открытие мобильного меню и анимация кнопки-бургера
    
    const body = document.querySelector (`body`);
    const ul = document.querySelector (`.header--ul`);
    const buttonBurger = document.querySelector (`.header--button__BURGER`);

    const line1 = document.querySelector (`.header--line:first-of-type`);
    const line2 = document.querySelector (`.header--line:nth-of-type(2)`);
    const line3 = document.querySelector (`.header--line:last-of-type`);

    buttonBurger.addEventListener (`click`, () => {
        body.classList.toggle (`body__fixed`);
        ul.classList.toggle (`header__open`);
        divBack.classList.toggle (`header__backopen`);
        line1.classList.toggle (`line1`);
        line2.classList.toggle (`line2`);
        line3.classList.toggle (`line3`);
    });
}