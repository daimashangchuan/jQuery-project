$(function(){
	$(".nav_piece h2").hover(function(){
		$(this).addClass("spot1");
	},function(){
		$(".nav_piece h2").removeClass("spot1");
	})
	$(".nav_piece h2").click(function(){
		$(".nav_piece h2").removeClass("spot2");
		$(this).addClass("spot2");
	})
	$(".has_downnav").hover(function(){
		$(this).find("ul").slideDown();
	},function(){
		$(".has_downnav").find("ul").hide();
	})
})
