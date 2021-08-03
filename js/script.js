$(function(){
	var mixer = mixitup('.portfolio__content');

	$('.slider-blog__inner').slick({
		dots: true,
		
	/* 	prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-blog/left.png" alt="">Previous</button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="images/slider-blog/right.png" alt="">Previous</button>', */
	});
});

let burgerBtn = document.getElementsByClassName('header__burger-btn')[0];
let burgerBtnOff = document.getElementsByClassName('header__burger-btn off')[0];
let headerBurger = document.getElementsByClassName('header__burger')[0];

burgerBtn.addEventListener('click', () => { 
	headerBurger.style.display = 'block';
});
burgerBtnOff.addEventListener('click', () => { 
	headerBurger.style.display = 'none';
});

	

