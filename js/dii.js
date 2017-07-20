$(".serachNav a").click(function (e) {
	$(".searchBox").fadeToggle(300 , function(){
		$('body').on('click', function () {
			$(".searchBox").slideUp(300);
			$(".serachNav a i").removeClass("fa-times");
			$(".serachNav a").removeClass('active');
		});
	})
	$(this).toggleClass('active');
	$(".serachNav a i").toggleClass("fa-times");
	e.stopPropagation();
});



$('.searchBox').on('click', function(e) {
	e.stopPropagation();
});