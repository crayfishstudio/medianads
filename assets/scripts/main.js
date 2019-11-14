window.onload = function () {

	jQuery(document).ready(function ($) {
		$('.header__counter-num').counterUp({
			delay: 20,
			time: 800
		});
	});


	jQuery(document).ready(function ($) {
		$('.info-counter__num').counterUp({
			delay: 20,
			time: 800
		});
	});

	// gallery modal 
	var modal = document.querySelector(".gallery__container");
	var trigger = document.querySelector(".video__circle");
	var triggerPlay = document.querySelector(".video__play")
	var closeButton = document.querySelector(".close-button");
	var pageBody = document.getElementById("body");

	function toggleModal() {
		modal.classList.toggle("show-modal");
		pageBody.classList.toggle("block-scroll");
		stopVideo();
	}

	function windowOnClick(event) {
		if (event.target === modal) {
			toggleModal();
		}
	}

	if (trigger) {
		trigger.addEventListener("click", toggleModal);
	}

	if (triggerPlay) {
		triggerPlay.addEventListener("click", toggleModal);
	}
	if (closeButton) {
		closeButton.addEventListener("click", toggleModal);
	}


	window.addEventListener("click", windowOnClick);

	var stopVideo = function () {
		$('.youtube-video').each(function () {
			this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
		});
	};


	// кнопка "приступить" в блоке lessons
	$('#testing').css({
		'display': 'none'
	});
	$(".openTesting").click(function () {
		$(this).parent().parent().parent().next("#testing").show()
	});


	//atestat slider 
	$num = $('.ui-card').length;
	$even = $num / 2;
	$odd = ($num + 1) / 2;

	if ($num % 2 == 0) {
		$('.ui-card:nth-child(' + $even + ')').addClass('active');
		$('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
		$('.ui-card:nth-child(' + $even + ')').next().addClass('next');
	} else {
		$('.ui-card:nth-child(' + $odd + ')').addClass('active');
		$('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
		$('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
	}

	$('.ui-card').click(function () {
		$slide = $('.active').width();
		console.log($('.active').position().left);

		console.log('width: ', $('.active').width());

		if ($(this).hasClass('next')) {
			$('.container-slider').stop(false, true).animate({
				left: '-=' + $slide
			});
			// alert('next')
		} else if ($(this).hasClass('prev')) {
			$('.container-slider').stop(false, true).animate({
				left: '+=' + $slide
			});
			// alert('prev')
		}


		$(this).removeClass('prev next');
		$(this).siblings().removeClass('prev active next');

		$(this).addClass('active');
		$(this).prev().addClass('prev');
		$(this).next().addClass('next');
	});


	// Keyboard nav
	$('html body').keydown(function (e) {
		if (e.keyCode == 37) { // left
			$('.active').prev().trigger('click');
		} else if (e.keyCode == 39) { // right
			$('.active').next().trigger('click');
		}
	});

	$('.atestat-slider__btn-prev').click(function (e) {
		$('.active').prev().trigger('click');
	});

	$('.atestat-slider__btn-next').click(function (e) {
		$('.active').next().trigger('click');
	});


	// range
	var sheet = document.createElement('style'),
		$rangeInput = $('.range input'),
		prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

	document.body.appendChild(sheet);

	var getTrackStyle = function (el) {
		var curVal = el.value,
			// val = (curVal - 1) * 25,
			val = (curVal - 1) * 23.666666667,
			style = '';

		// Set active label
		$('.range-labels li').removeClass('active selected');

		var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

		curLabel.addClass('active selected');
		curLabel.prevAll().addClass('selected');

		// Change background gradient
		for (var i = 0; i < prefs.length; i++) {
			style += '.range {background: linear-gradient(to right, var(--main) 0%, var(--main) ' + val + '%, #fff ' + val + '%, #fff 100%)}';
			style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, var(--main) 0%, var(--main) ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
		}

		return style;
	}

	$rangeInput.on('input', function () {
		sheet.textContent = getTrackStyle(this);
	});

	// Change input value on label click
	$('.range-labels li').on('click', function () {
		var index = $(this).index();

		$rangeInput.val(index + 1).trigger('input');

	});

}

$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var objectSelect = $("#bg-white");
		var objectPosition = objectSelect.offset().top;
		if (scroll > objectPosition) {
			$(".menu-toggle").addClass("change");
			$(".navbar-links").addClass("navbar-links-change");
			$(".lang-switch").addClass("lang-switch-change");
			$(".login-btn").addClass("login-btn_black");
			$(".menuBtnItem").addClass("change-menu");
			$("#navbar-logo").attr("src", "assets/img/logo-navbar-black.svg");

		} else {
			$(".menu-toggle").removeClass("change");
			$(".navbar-links").removeClass("navbar-links-change");
			$(".lang-switch").removeClass("lang-switch-change");
			$(".login-btn").removeClass("login-btn_black");
			$(".menuBtnItem").removeClass("change-menu");
			$("#navbar-logo").attr("src", "assets/img/logo-navbar.svg");
		}
	});


	$(".owl-carousel").owlCarousel({
		// center: true,
		items: 4,
		loop: false,
		// margin: 10,
		startPosition: 5,
		autoWidth: true,
		responsive: {
			600: {
				items: 4
			}
		}
	});

	$('.steps-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
		dots: true,
		infinite: false
	});


	var lastScrollTop = 5;
	document.getElementById("menuToggle").classList.remove("hided");
	$(window).on('scroll', function () {
		st = $(this).scrollTop();
		if (st < lastScrollTop) {
			document.getElementById("menuToggle").classList.remove("hided");
		} else {
			document.getElementById("menuToggle").classList.add("hided");
		}
		lastScrollTop = st;
	});


	headerBg()


});

function headerBg() {
	if (window.innerWidth <= 767) {
		var top = $('#check-bg').offset().top;
		var height = $('#check-bg').height();

		var crayfish = top + height - 170;

		$('#header-bg-img').css({
			'height': crayfish + 'px'
		});
		console.log('IF: top: ', top, " | height: ", height, " | crayfish: ", crayfish)
	} else {
		var top = $('#check-bg-desk').offset().top;
		var height = $('#check-bg-desk').height();
		var crayfish = top + height;
		console.log('ELSE: top: ', top, " | height: ", height, " | crayfish: ", crayfish)

		$('#header-bg-img').css({
			'height': crayfish + 'px'
		});
	}
}



function toggleMenu() {
	var container = document.getElementById("mobile__container");
	var checkBox = document.getElementById("menuCheck");
	var pageBody = document.getElementById("body");

	if (checkBox.checked == true) {
		// menu.style.display = "flex";
		container.style.left = "0";
		pageBody.classList.add("block-scroll");
	} else {
		// menu.style.display = "none";
		container.style.left = "100%";
		pageBody.classList.remove("block-scroll");
	}
}