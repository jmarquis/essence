$(function () {

	if ($("html").is(":not(.touch)")) {

		var $window = $(window),
			$header = $("body > header");
		$window.on("scroll", function () {
			var percentage = $window.scrollTop() / $window.height();
			percentage = percentage > 1 ? 1 : percentage;
			$header.css("opacity", 1 - percentage.toFixed(2));
		});

	}

});
