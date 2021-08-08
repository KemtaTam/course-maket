$(function(){
	var mixer = mixitup('.portfolio__content');

	$('.slider-blog__inner').slick({
		dots: true,
		
	/* 	prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-blog/left.png" alt="">Previous</button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="images/slider-blog/right.png" alt="">Previous</button>', */
	});

	$(".header__menu a, .footer__img-up-link, .header__icon").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr("href"),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$("body,html").animate({ scrollTop: top }, 500);
	});

	//скрыть бургер меню при клике на ссылки в нем
	$('.header__burger a').on('click', () => {
		headerBurger.style.display = 'none'; 
		burgerBtn.style.display = 'block';
	})
});

let burgerBtn = document.getElementsByClassName('menu__btn')[0];
let burgerBtnOff = document.getElementsByClassName('menu__btn off')[0];
let headerBurger = document.getElementsByClassName('header__burger')[0];
let link = document.getElementsByClassName('burger__link');

//скрыть бургер меню при клике на ссылки в нем
/* for(let i=0; i<burger__link.length; i++){
	burger__link[i].addEventListener('click', () => {
		headerBurger.style.display = 'none'; 
		burgerBtn.style.display = 'block';
	});
} */

burgerBtn.addEventListener('click', () => { 
	headerBurger.style.display = 'block'; 
	burgerBtn.style.display = 'none';
});
burgerBtnOff.addEventListener('click', () => { 
	headerBurger.style.display = 'none'; 
	burgerBtn.style.display = 'block';
});




	 

