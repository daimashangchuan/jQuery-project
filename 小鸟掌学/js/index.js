$(function(){
	let pro = new Promise(function(){
		$(".header_top").load("header.html");
	    $(".footer_bottom").load("footer.html");
	    $(".map_pic").load("map.html");
	})
})

/*--------------banner  效果-----------------------*/
$(function(){
	var index = 0;
	$(".banner_pic .middle_wrap span").click(function(){
		$(".middle_wrap span").removeClass("now");
		$(this).addClass("now");
		$(".banner_none").hide();
		$(".banner_none").eq($(this).index()).fadeIn();
		index = $(this).index();
	})
	$(".banner_pic  .active_btn .next").click(function(){
		index++;
		if (index > $(".banner_none").length-1) {
			index = 0
		}
		$(".banner_none").hide();
		$(".banner_none").eq(index).fadeIn();
		$(".banner_pic .middle_wrap span").removeClass("now");
		$(".banner_pic .middle_wrap span").eq(index).addClass("now");
	})
	$(".banner_pic  .active_btn .prev").click(function(){
		index--;
		if (index < 0) {
			index = $(".banner_none").length-1
		}
		$(".banner_none").hide();
		$(".banner_none").eq(index).fadeIn();
		$(".banner_pic .middle_wrap span").removeClass("now");
		$(".banner_pic .middle_wrap span").eq(index).addClass("now");
	})
})

/*----------------产品内容-----------------------*/
$(function(){
	var index = 0;
	var arr = [0];
	$(".pro_line .line_btn").click(function(){
		$(".pro_line .line_btn").find("i").removeClass("now");
		$(this).find("i").addClass("now")
		index = $(this).index()
		arr.push($(this).index())
		if (arr[arr.length-2] < arr[arr.length-1]) {
			animaeteRight()
		} else{
			animaeteLeft()
		}
	})
	
	$(".pro_btn .next").click(function(){
		index++;
		if(index > $(".pro_main").length-1){
			index = 0;
		}
		$(".pro_main").removeClass("now");
		$(".pro_main").eq(index).addClass("now");		
		$(".pro_line .line_btn").find("i").removeClass("now");
		$(".pro_line .line_btn").eq(index).find("i").addClass("now")
		animaeteRight()
	})
	$(".pro_btn .prev").click(function(){
		index--;
		if(index < 0){
			index = $(".pro_main").length-1;
		}
		$(".pro_main").removeClass("now");
		$(".pro_main").eq(index).addClass("now");		
		$(".pro_line .line_btn").find("i").removeClass("now");
		$(".pro_line .line_btn").eq(index).find("i").addClass("now")
		animaeteLeft()
	})
	function animaeteLeft(){
		$(".main_left").addClass("animated fadeInLeftBig");
		$(".main_cont .p1").children().addClass("animated fadeInLeftBig");
		$(".main_cont .p2").children().addClass("animated fadeInLeftBig");
		$(".main_cont .tip").children().addClass("animated fadeInLeftBig");
		var timer = setTimeout(function(){
			removeClass()
		},1000)
		function removeClass(){
			$(".main_left").removeClass("animated fadeInLeftBig");
			$(".main_cont .p1").children().removeClass("animated fadeInLeftBig");
			$(".main_cont .p2").children().removeClass("animated fadeInLeftBig");
			$(".main_cont .tip").children().removeClass("animated fadeInLeftBig");
		}
	}
	function animaeteRight(){
		$(".main_left").addClass("animated fadeInRightBig");
		$(".main_cont .p1").children().addClass("animated fadeInRightBig");
		$(".main_cont .p2").children().addClass("animated fadeInRightBig");
		$(".main_cont .tip").children().addClass("animated fadeInRightBig");
		var timer = setTimeout(function(){
			removeClass()
		},1000)
		function removeClass(){
			$(".main_left").removeClass("animated fadeInRightBig");
			$(".main_cont .p1").children().removeClass("animated fadeInRightBig");
			$(".main_cont .p2").children().removeClass("animated fadeInRightBig");
			$(".main_cont .tip").children().removeClass("animated fadeInRightBig");
		}
	}
})
/*-----------------主要产品-------------------------------*/
$(function(){
	var tag = true;
	$(".bus_top .three").click(function(){
		if(tag){
			$(this).next().next().animate({"background-position-y":-67});
			$(this).parent().next().slideDown();
		}else{
			$(".bus_top .five").animate({"background-position-y":0})
			$(".bus_bottom").slideUp();
		}
		tag = !tag
	}).hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	$(".bus_top .five").click(function(){
		if(tag){
			$(this).animate({"background-position-y":-67});
			$(this).parent().next().slideDown()
		}else{
			$(this).animate({"background-position-y":0})
			$(".bus_bottom").slideUp()
		}
		tag = !tag
	}).hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
})
/*-----------------团队合作-------------------*/
$(function(){
	$(".twoteam_wrap:first").clone(true).appendTo($(".team_move"))
	$(".team_btn .next").click(function(){
		var picwidth = $(".twoteam_wrap").width();
		$(".team_move").animate({"left":180})		
		$(".team_move").animate({"left":-picwidth},function(){
			$(".twoteam_wrap:first").appendTo($(".team_move"))
			$(".team_move").css({"left":0})
		})		
	})
	$(".team_btn .prev").click(function(){
		var picwidth = $(".twoteam_wrap").width();
		$(".twoteam_wrap:first").appendTo($(".team_move"));
		$(".team_move").css({"left":-picwidth});
		$(".team_move").animate({"left":180})
		$(".team_move").animate({"left":0});	
	})
})
















