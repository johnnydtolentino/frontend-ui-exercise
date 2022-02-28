jQuery(document).ready(function(){
	jQuery("#banner-slider").owlCarousel({
		items : 1,
		lazyLoad : true,
		nav : true,
		loop: true,
		margin: 40,
		stagePadding: 30,
		autoplay: true,
		autoplayTimeout: 8000,
		dots: true,
		mergeFit: true,
		responsiveClass:true,
		responsive : {
		    0 : {
		        items : 1
		    },
		    567 : {
		    	items : 1
		    },
		    991 : {
		    	items : 1
		    }
		}
	});

	jQuery("#service-slider").owlCarousel({
		items : 3,
		lazyLoad : true,
		nav : true,
		navText : ['<i class="arrow left" aria-hidden="true"></i>','<i class="arrow right" aria-hidden="true"></i>'],
		loop: true,
		margin: 40,
		stagePadding: 30,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		mergeFit: true,
		responsiveClass:true,
		responsive : {
		    0 : {
		        items : 1
		    },
		    567 : {
		    	items : 2
		    },
		    991 : {
		    	items : 3
		    }
		}
	});

	// Create the Counter observer:
	const counterObserver = new IntersectionObserver(entries => {
	 	entries.forEach(entry => {
		    if (entry.isIntersecting) {
		    	jQuery('.counter').each(function(){
					jQuery(this).prop('Counter', 0).animate({
						Counter: jQuery(this).text()
					}, 
					{
						duration: 3000,
						easing: 'swing',
						step: function (now){
							jQuery(this).text(Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
						}
					});
				});

				jQuery('.counter').removeClass('counter');				
		      	return;
		    }
	  	});
	});
	counterObserver.observe(document.querySelector('.counter-box'));

	// Create the FadeIn image observer:
	const FadeinObserver = new IntersectionObserver(entries => {
	 	entries.forEach(entry => {
		    if (entry.isIntersecting) {
		    	jQuery('.fadein-img-wrapper img').each(function(){
					jQuery(this).addClass('fadein');
				});

				//jQuery(this).removeClass('fadein');			
		      	return;
		    }
	  	});
	});
	FadeinObserver.observe(document.querySelector('.fadein-img-wrapper'));
}); 