; (function ($, undefined) {

	$(document).ready(function () {
		$('.subscribe').click(function () {

			$(this).find('span').addClass('subscribeActive');
			$(this).find('.far').addClass('subscribeActiveImg');

		});

		$(document).mouseup(function (e) {
			var div = $(".subscribe");

			if (!div.is(e.target) // если клик был не по нашему блоку
				// && div.has(e.target).length === 0 // и не по его дочерним элементам
				&& div.val() == '') //и если блок пустой
			{
				$('span').removeClass('subscribeActive')
				$('.far').removeClass('subscribeActiveImg')

			}
		});
	});

	$(window).scroll(function () {
		var a = 0;

		var oTop = $('.homeAchievments').offset().top - window.innerHeight;

		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

					{

						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}

					});
			});
			a = 1;
		}
	});


})(jQuery);

