	$(window).on('load', function(){
		var y = 0;
		$('.l-kv__txt').addClass('is-active');
		$('.js-wiper1').wipeSlider({
			transition: 1000,
			duration: 4000,
			auto: true,
			controls: false,
			pager: false,
			direction: 'custom',
		});
		$('.js-wiper2').wipeSlider({
			transition: 1000,
			duration: 4000,
			auto: true,
			controls: false,
			pager: false,
			direction: 'custom',
			slideBefore: function(slideNum,slideLength){
				y++;
				if(y == 1) {$('.l-kv__txt').removeClass('is-active').addClass('is-active1');
				}else if(y == 2) {$('.l-kv__txt').removeClass('is-active is-active1').addClass('is-active2');
				}else if(y == 3) {$('.l-kv__txt').removeClass('is-active is-active2').addClass('is-active3');
				}else if(y == 4) {$('.l-kv__txt').removeClass('is-active is-active3').addClass('is-active4');
				}else if(y == 5) {$('.l-kv__txt').removeClass('is-active is-active4').addClass('is-active5');
				}else if(y == 6) {$('.l-kv__txt').removeClass('is-active is-active5').addClass('is-active6');
				}else if(y == 7) {$('.l-kv__txt').removeClass('is-active is-active6').addClass('is-active7');
				}else if(y == 8) {$('.l-kv__txt').removeClass('is-active is-active7').addClass('is-active8');
				}else if(y == 9) {
					$('.l-kv__txt').removeClass('is-active is-active8').addClass('is-active');
					y = 0; 
					return true;
				}else $('.l-kv__txt').removeClass('is-active is-active8').addClass('is-active');
			}
		});
  });