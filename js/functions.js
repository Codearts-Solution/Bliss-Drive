$(document).ready(function () {	
/*testimonials*/
$('#growth-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  autoplay: false,
	  slidesToShow: 1,
	  adaptiveHeight: true
});

$('#testimonials-slider-area').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  autoplay: false,
	  slidesToShow: 1,
	  adaptiveHeight: true
});

$('#clients-logos').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 3,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    rows: 3,
                    slidesPerRow: 3,
                    infinite: true,
                }
		},
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,
                    infinite: true,
                }
		},
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    infinite: true,
                }
		}
	  ]
});

$('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        fixedContentPos: true,
        fixedBgPos: true,
        callbacks: {
			open: function() {
				$(document.body).addClass('fixed');
			},
			close: function() {
				$(document.body).removeClass('fixed');
			},
			elementParse: function(item) {
				window.location.hash = item.src;
			}
		}
});

$('.websitefield').on('keyup', function () {
  var value = $(this).val();
  $('input[name=website]').val(value);
 });
$("#websitefield").keyup(function () {
    if ($("#websitefield").valid() == true ) {
		$('#open_form').magnificPopup({
			type: 'inline',
			items: {src: '#formwrapper'},
			preloader: false,
			fixedContentPos: true,
			fixedBgPos: true,
			callbacks: {
				open: function() {
					$(document.body).addClass('fixed');
				},
				close: function() {
					$(document.body).removeClass('fixed');
				},
				elementParse: function(item) {
					window.location.hash = item.src;
				}
	  		}
		});
    }
});
});
$(window).resize(function () {
});


$(window).load(function () {

});


