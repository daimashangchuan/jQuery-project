$(function(){
	var num = 0
	timer = null;
	clearInterval(timer)
	timer = setInterval(function(){
		if(num > 1){
			$(".topbar").css("top",0);
			num = 0
		}
		num++
		var yidong = num*55
		$(".topbar").animate({"top":-yidong+"px"})
		
	},3000)
	
	$(".active .left").click(function(){
		$(".wrapper img").eq(1).fadeToggle(600)
	})
	$(".active .right").click(function(){
		$(".wrapper img").eq(1).fadeToggle(600)
	})	
	timer1 = null;
	clearInterval(timer1);
	timer1 = setInterval(function(){
		$(".wrapper img").eq(1).fadeToggle(600)
	},3000)
	
	/********************************/
	$(".dianji .a1").click(function(){
		$(".dianji a").removeClass("on");
		$(this).addClass("on");
		if($(".game .zh .tit .two").css("display","none")
		&& $(".game .zh .tit .three").css("display","block")){
			
			$(".game .zh .tit .two").css("display","block")
			$(".game .zh .tit .three").css("display","none")
		}
	})
	
	$(".dianji .a2").click(function(){
		$(".dianji a").removeClass("on");
		$(this).addClass("on");
		if($(".game .zh .tit .two").css("display","block")
		&& $(".game .zh .tit .three").css("display","none")){

			$(".game .zh .tit .two").css("display","none")
			$(".game .zh .tit .three").css("display","block")
		}
	})
	
	/**********************************/
	var index1 = 0;
	var index2 = 0;
	$(".slide-nav a").mouseenter(function(){
		$(this).addClass("show").siblings().removeClass("show");
		$(".slide-img li").eq($(this).index()).fadeIn(600).siblings().fadeOut(600);
		$(".slide-img1 li").eq($(this).index()).fadeIn(600).siblings().fadeOut(600)
		idnex1 = $(this).index();
		idnex2 = $(this).index();
		clearInterval(timers);
	}).mouseleave(function(){
		setInterval(timers)
		timers = setInterval(function(){
			if(index1 >5){
				index1 = 0
			}
			if(index2 >4){
				index2 = 0
			}
			$(".two .slide-nav a").stop().eq(index1).addClass("show").siblings().removeClass("show");
			$(".two .slide-img li").stop().eq(index1).fadeIn(600).siblings().fadeOut(600);
			$(".three .slide-nav a").stop().eq(index2).addClass("show").siblings().removeClass("show");
			$(".three .slide-img li").stop().eq(index2).fadeIn(600).siblings().fadeOut(600);
			index1++
			index2++		
		},1500)
	})
	var timers = null;	
	clearInterval(timers);
	timers = setInterval(function(){
		if(index1 >5){
			index1 = 0
		}
		if(index2 >4){
			index2 = 0
		}
		$(".two .slide-nav a").stop().eq(index1).addClass("show").siblings().removeClass("show");
		$(".two .slide-img li").stop().eq(index1).fadeIn(600).siblings().fadeOut(600);
		$(".three .slide-nav a").stop().eq(index2).addClass("show").siblings().removeClass("show");
		$(".three .slide-img li").stop().eq(index2).fadeIn(600).siblings().fadeOut(600);
		index1++
		index2++		
	},1000)
	
	
	/*****************************************/
	$(".game .zh .cont .one a").mouseenter(function(){
		$(this).addClass("show").siblings().removeClass("show");
		$(".game .zh .cont .three ul").eq($(this).index()).addClass("show").siblings().removeClass("show");
	})
		
	
	/***************************************/
	let timer2 = null;
	let num1 = 0;
	let list = $(".notice-con .notice-ul li").length;
	let width = $(".notice-con .notice-ul li").outerWidth(true);
	$(".notice-con .notice-ul li").eq(0).clone(true).appendTo($(".notice-con .notice-ul"))
	clearInterval(timer2)
	timer2 = setInterval(function(){
		num1-=1
		$(".notice-ul").animate({"left":num1+"px"},30)
		if(num1 < -2050){
			$(".notice-ul").css({"left":0})
			num1 = 0
		}
	},30)	
	$(".notice-con").mouseenter(function(){
		clearInterval(timer2)
	})
	$(".notice-con").mouseleave(function(){
		timer2 = setInterval(function(){
			num1-=1
			$(".notice-ul").animate({"left":num1+"px"},30)
			if(num1 < -2050){
				$(".notice-ul").css({"left":0})
				num1 = 0
			}
		},30)
	})
	
	
	
	/****************************************/
	$(".tit_nav a").mouseenter(function(){
		$(".tit_nav a em").removeClass("show");
		$(this).find("em").addClass("show");
		$(".tit_cont ul").eq($(this).index()).addClass("show").siblings().removeClass("show")
	})
	/***********************************/
	$(".foo_s a").mouseenter(function(){
		$(".foo_s a").removeClass("show");
		$(this).addClass("show");
		$(".foo_x .rl").removeClass("show");
		$(".foo_x .rl").eq($(this).index()).addClass("show");
	})
	/******************************/
	$(".piv_nav a").mouseenter(function(){
		$(".piv_nav a").removeClass("show");
		$(this).addClass("show");
		$(".par_cont ul").removeClass("show");
		$(".par_cont ul").eq($(this).index()).addClass("show");
	})
	/******************************/
	var result = zxtj.data.list;
	for (var i=0; i<result.length; i++) {
		$(".par_main ul").append(
			`
			<li class="par_li">
				<div class="lf fl">
					<img class="img1" src="${result[i].img1}" alt="" />
					<img class="img2" src="${result[i].img2}" alt="" />
				</div>
				<div class="rg fl show">
					<h2><b class="b1"></b><span>${result[i].h2}</span><b class="b2"></b></h2>
					<p>${result[i].p1}</p>
					<p>${result[i].p2}</p>
					<p>${result[i].p3}</p>
					<p>${result[i].p4}</p>
					<p>${result[i].p5}</p>
					<p>${result[i].p6}</p>
					<p>${result[i].p7}</p>
				</div>
			</li>
			
			`
		)}	
})
$(function(){
	$(".par_li .lf img").hide()
	$(".par_li .lf .img1").show()
	$(".par_li .lf .img1").eq(0).hide()
	$(".par_li .lf .img2").eq(0).show()
	$(".par_li .rg").hide()
	$(".par_li .rg").eq(0).show()
	$(".par_li .lf").click(function(){
		$(".par_li .lf img").hide();
		$(".par_li .lf .img1").show();
		$(this).find(".img1").hide();
		$(this).find(".img2").show();
		$(".par_li .rg").hide()
		$(this).next(".rg").show()
	})
})
$(function(){
	$(".pic_nav1>div").mouseenter(function(){
		$(".pic_nav1>div").removeClass("show");
		$(this).addClass("show");
		$(".ton_cont ul").removeClass("show")
		$(".ton_cont .ul1").eq($(this).index()).addClass("show");
		$(".ton_cont .ul2").eq($(this).index()).addClass("show");
		$(".ton_cont .ul3").eq($(this).index()).addClass("show");
		$(".ton_cont .ul4").eq($(this).index()).addClass("show");
		$(".ton_cont .ul5").eq($(this).index()).addClass("show");
	})
	/***********************************/
	$(".ton_cont").hide();	
	$(".ton_cont:first").show();
	var index = 0
	$(".ton_foot li").click(function(){
		$(".ton_foot li").removeClass("show");	
		$(this).addClass("show");
		$(".ton_cont").fadeOut(500);	
		$(".ton_cont").eq($(this).index()).fadeIn(500);
		index = $(this).index()
	})
	$(".ton_foot .left").click(function(){
		$(".ton_foot li").removeClass("show");
		$(".ton_cont").fadeOut(500);
		index--;
		$(".ton_foot li").eq(index).addClass("show");
		$(".ton_cont").eq(index).fadeIn(500);
		if(index < 0){
			index = 4
			$(".ton_foot li").removeClass("show");
			$(".ton_cont").fadeOut(500);
			$(".ton_foot li").eq(index).addClass("show");
			$(".ton_cont").eq(index).fadeIn(500);
		}
	})
	
	$(".ton_foot .right").click(function(){
		right()
	})
	function right(){
		$(".ton_foot li").removeClass("show");
		$(".ton_cont").fadeOut(500);
		index++;
		$(".ton_foot li").eq(index).addClass("show");
		$(".ton_cont").eq(index).fadeIn(500);
		if (index > 4) {
			index = 0
			$(".ton_foot li").removeClass("show");
			$(".ton_cont").fadeOut(500);
			$(".ton_foot li").eq(index).addClass("show");
			$(".ton_cont").eq(index).fadeIn(500);
		}
	}
	var timer = null
	clearInterval(timer)
	timer = setInterval(function(){
		right()
	},2000)
	$(".ton_foot").mouseenter(function(){
		clearInterval(timer)
	}).mouseleave(function(){
		timer = setInterval(function(){
			right()
		},2000)
	})	
	/***********************************/
	var sum = 0;
	$(".por_c li").click(function(){
		$(".por_c li").removeClass("show");
		$(this).addClass("show");
		var num = $(this).index()
		var yidong = -num*$(".por_t li img").width()
		$(".por_t ul").animate({"left":yidong},500)
		sum = num;
	})
	function tab(){
		$(".por_c li").removeClass("show");
		$(".por_c li").eq(sum).addClass("show");
		var yidong = -sum*$(".por_t li img").width();
		$(".por_t ul").animate({"left":yidong},500)
		sum++
		if (sum > 4) {
			$(".por_t ul").css("left",0)
			sum = 0
		}
	}	
	var timer1 = null;
	clearInterval(timer1)
	timer1 = setInterval(function(){
		tab()
	},2000)
	$(".por_c").mouseenter(function(){
		clearInterval(timer1)
	}).mouseleave(function(){
		timer1 = setInterval(function(){
			tab()
		},2000)
	})
	
	/***************************************/
	$(".zh_c").hide()
	$(".zh_c").eq(0).show()
	$(".zh_nav a").mouseenter(function(){
		$(".zh_nav a").removeClass("show")
		$(this).addClass("show")
		$(".zh_c").hide()
		$(".zh_c").eq($(this).index()).show()
	})
	
	/****************************/
	$(window).scroll(function(){
		if ($('html,body').scrollTop()>=900) {
			$(".fanhui").show()
		} else{
			$(".fanhui").hide()
		}
		$(".fanhui").click(function(){
			var distance = $('html,body').scrollTop();
			var time = 400;
			var intervaltime = 20;
			var item = distance/(time/intervaltime)
			var intervalID = setInterval(function(){
				distance-=item;
				if (distance<=0) {
					clearInterval(intervalID)
				}
				$('html,body').scrollTop(distance)
			},intervaltime)
		})
	})
})
