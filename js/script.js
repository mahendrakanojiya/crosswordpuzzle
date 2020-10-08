$(document).ready(function() {

	/* Menu */
	$('.menu-trggr').click(function() {
		$('body').toggleClass('show-menu');
	});


	/* Show QR Code On Click of Unlocked Button */
	$('.gmstrtbtn').each(function() {
		var _this = $(this);
		if ( $(_this).hasClass('unlckd') ) {
			$(_this).children('a').attr('href', 'javascript:void(0);');
			$(_this).children('a').click(function() {
			    $(_this).children('a').qrcode('www.google.com');
			    $(_this).addClass('qr');
			});
		}
	});

	/* To Show Clues */
	$('.clues-popup-trigger').click(function() {
		$('.clues-group').addClass('active');
		return false;
	});
	$('.clues-group .close-btn').click(function() {
		$(this).parent().removeClass('active');
	});



	/* Submit Button */
	$('#submitBtn').click(function() {
		$('.crossword td').each(function() {
			let cans = $(this).children('.canswer').text();
			let myans = $(this).children('.uanswer').text();
			let crrct = cans == myans;
			if ( crrct ) {
				$(this).addClass('success').css('background-color', 'green');
				let avlfld = $('.crossword td:not(.no-border)').length;
				let cmptfld = $('.crossword td.success').length;
				if ( avlfld == cmptfld ) {
					setTimeout(function() {    window.location.href = "finalscreen.html";    }, 250);
				}
			}
			else {
				$('.crossword td[class=""]').css('background-color', 'red');
			}
		});
	});

	/* Clear All Button */
	$('#clearAll').click(function() {
		$('.crossword td').each(function(ss, ww) {
			$(this).children('.uanswer').html('');
			console.log( $(this).prop('style') );
			ww.style.removeProperty('background-color');
		});
	});
	
	/* Clear Errors Button */
	$('#clearError').click(function() {
		$('.crossword td').each(function(ss, ww) {
			let cans = $(this).children('.canswer').text();
			let myans = $(this).children('.uanswer').text();
			let crrct = cans == myans;
			if ( !crrct ) {
				$(this).children('.uanswer').html('');
				ww.style.removeProperty('background-color');
			}
		});
	});

});


/* Page Loader */
$(window).on('load', function() {
	$('.page-loader').hide();
});