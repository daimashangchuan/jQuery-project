$(function(){
	var $height = $(window).height();
	var hheight = $(".header_wrap").height()
	$(".main_wrap").height($height-hheight);
	$("#mask").height($height);
	$(window).resize(function(){
		var $height = $(window).height();
		$(".main_wrap").height($height-hheight)
		
	})	
	/*-------------动画-----------------*/
	var timermask = null;
	clearInterval(timermask);
	timermask = setInterval(function(){
		$("#mask").animate({"padding-top":0});
		$(".mas_box>h1").animate({"margin-top":0,"opacity":1},600);
		$(".mas_box>h2").animate({"margin-top":0,"opacity":1},900);
		$(".mas_box>div").animate({"margin-top":0,"opacity":1},1200);
		$(".mas_box .p1").animate({"margin-top":0,"opacity":1},1500);
		$(".mas_box .p2").animate({"margin-top":0,"opacity":1},1800);
		setTimeout(function(){
			$("#mask").slideUp(500);
		},2300)
	},4200)
	$("#mask").dblclick(function(){
		$(this).slideUp(500);
	})
	/*--------------概述----------------*/
	var sumindex = 0;
	var btnindex = 0;
	var timer = null;
	$(".two_btn .a2").click(function(){
		anima()
		$(".two_btn .a1").removeClass("animate1")
		var sumwidth = $(".atv_two").width();
		sumindex++;
		if (sumindex > $(".two_box").length-1) {
			sumindex = $(".two_box").length-1;
			$(this).addClass("animate1")
		}	
		$(".two_main").animate({"left":-sumwidth*sumindex},800);
	})	
	$(".two_btn .a1").click(function(){
		anima()
		$(".two_btn .a2").removeClass("animate1")
		var sumwidth = $(".atv_two").width();
		sumindex--;
		if (sumindex < 0) {
			sumindex = 0;
			$(this).addClass("animate1")
		}	
		$(".two_main").animate({"left":-sumwidth*sumindex},800)	
	})
	function anima(){		
		clearInterval(timer)
		$(".two_btn a").addClass("animate");
		timer = setInterval(function(){
			$(".two_btn a").removeClass("animate");
		},1000)
	}
	/*******小鸟掌云*********/
	$("#btn1").click(function(){
		$(".above").animate({"left":0},500)
		$(".spe_box").animate({"left":0},500)
	})	
	$("#btn2").click(function(){
		$(".above").animate({"left":78+"px"},500)
		$(".spe_box").animate({"left":-910+"px"},500)
	})
})
/*-----------全频轮播---滚动-------------*/
$(function(){
	var picindex = 0;
	var btnindex = 0;
	var tag = true;
	$(".nav_piece").click(function(){
		var height = $(".public").height();
		btnindex =picindex = $(this).index()+1;
		console.log(btnindex)
		if (picindex == 4 || picindex == 5) {
			picindex = 3;
			$(".nav_piece").removeClass("now");
			$(".nav_piece").eq(picindex).addClass("now");
			$(".nav_piece").eq(picindex+1).addClass("now");
			$(".avt_wrap").animate({"top":-height*(picindex+1)})
		} else{
			$(".nav_piece").removeClass("now");
			$(this).addClass("now");
			$(".avt_wrap").animate({"top":-picindex*height})
		}		
	})		
	function mouseWheel(ev) {
		var ev = window.event || ev
		if(ev.wheelDelta){
			if (ev.wheelDelta > 0) {  
				scrollUp()
			} else {
				scrollDown()
			}
		}else{
			if(ev.detail > 0){
				scrollDown()
			} else {
				scrollUp()
			}
		}
	}
	function addEvent(ele, e, fn) {
		if (ele.addEventListener) {
			ele.addEventListener(e, fn);
		} else if (ele.attachEvent) {
			ele.attachEvent('on' + e, fn);
		} else {
			ele['on' + e] = fn;
		}
	}
	addEvent(window, "mousewheel", mouseWheel)
	addEvent(window, "DOMMouseScroll", mouseWheel)
	function scrollUp(){
		var puheight = $(".public").height();
		if(tag){
			tag = !tag;
			setTimeout(function(){
				tag = !tag;
			},1000)
			if(btnindex > 0){
				btnindex--;
			}
			console.log(btnindex)
			$(".nav_piece").removeClass("now");
			$(".nav_piece").eq(btnindex-1).addClass("now");
			$(".avt_wrap").animate({"top":-puheight*(btnindex)})
			if (btnindex == 0) {
				$(".nav_piece").removeClass("now");
			}
		}
	}
	function scrollDown(){ 
		var puheight = $(".public").height();
		if(tag){
			tag = !tag
			setTimeout(function(){
				tag = !tag
			},1500)
			if(btnindex < $(".main_wrap").length-2){
				btnindex++;
			}
			console.log(btnindex)
			if (btnindex == 4) {
				btnindex = 3;
				$(".nav_piece").removeClass("now");
				$(".nav_piece").eq(btnindex).addClass("now");
				$(".nav_piece").eq(btnindex+1).addClass("now");
				$(".avt_wrap").animate({"top":-puheight*(btnindex+1)})
				btnindex = 4;
			} else{
				$(".nav_piece").removeClass("now");
				$(".nav_piece").eq(btnindex-1).addClass("now");
				$(".avt_wrap").animate({"top":-btnindex*puheight})
			}
		}
	}
	var str = location.search.substring(1);
	if(str !== ""){
		skip();
	}
	function skip(){
		var search = parseInt(str);
		$("#mask").slideUp();
		var height = $(".public").height();
		btnindex = picindex = search+1;
		if (picindex == 4 || picindex == 5) {
			picindex = 3;
			$(".nav_piece").removeClass("now");
			$(".nav_piece").eq(picindex).addClass("now");
			$(".nav_piece").eq(picindex+1).addClass("now");
			$(".avt_wrap").animate({"top":-height*(picindex+1)})
		} else{
			$(".nav_piece").removeClass("now");
			$(".nav_piece").eq(picindex-1).addClass("now");
			$(".avt_wrap").animate({"top":-picindex*height})
		}
	}
	
})


















