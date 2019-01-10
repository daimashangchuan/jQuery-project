$(function(){
	var height = $(window).height();
	$(".wrapper").height(height);
	$(".box_right").height(height);
	$(".box_left").height(height);
	$(".left_div>div").height(height);
	$(window).resize(function(){
		height = $(window).height();
		$(".wrapper").height(height);
		$(".box_right").height(height);
		$(".box_left").height(height);
		$(".left_div>div").height(height);
	})	
	/*$(".wrapper").height(657);
	$(".box_right").height(657);
	$(".box_left").height(657);
	$(".left_div>div").height(657);*/
	let index = 0;
	let tag = true;
	let picHeight = $(".box_left").height();
	$(".right_ul li").click(function(){		
		$(".right_ul li").find("b").removeClass("now")
		$(".right_ul li").find("span").removeClass("now")
		$(this).find("b").addClass("now")
		$(this).find("span").addClass("now")
		index = $(this).index()
		$(".left_div").animate({"top":-index*picHeight},600)
		animateClass(index)
	})
	
	//   执行动画效果   添加类名   （1.5s后删除类名）
	function animateClass(index){
		$(".left_one>a").addClass("fadeInUpBig")
		$(".left_one>h4").addClass("fadeInDownBig")
		$(".num_logo").addClass("fadeInUpBig");
		$(".pagetitle").addClass("fadeInDownBig");
		$(".pagetext").addClass("fadeInUpBig");
		$(".pagefoot").addClass("fadeInDownBig");
		$(".pagePeo").addClass("fadeInLeftBig");
		var timer = null;
		clearTimeout(timer)
		timer = setTimeout(function(){
			removeclass()
		},1500)
		function removeclass(){
			$(".left_one>a").removeClass("fadeInUpBig")
			$(".left_one>h4").removeClass("fadeInDownBig")
			$(".num_logo").removeClass("fadeInUpBig");
			$(".pagetitle").removeClass("fadeInDownBig");
			$(".pagetext").removeClass("fadeInUpBig");
			$(".pagefoot").removeClass("fadeInDownBig");
			$(".pagePeo").removeClass("fadeInLeftBig");
		}
	}
	//  向下滚     向上走
	function scrollUp(){   
		if(tag){
			tag = !tag
			setTimeout(function(){
				tag = !tag
			},1500)
			if(index>0){
				index--
			}
			$(".right_ul li").find("b").removeClass("now")
			$(".right_ul li").find("span").removeClass("now")
			$(".right_ul li").eq(index).find("b").addClass("now")
			$(".right_ul li").eq(index).find("span").addClass("now")
			$(".left_div").animate({"top":-index*picHeight},600)
			animateClass(index)
		}
	}
	//   向上滚     向下走
	function scrollDown(){   
		if(tag){
			tag = !tag
			setTimeout(function(){
				tag = !tag
			},1500)
			if(index < $(".left_div>div").length-1){
				index++;
			}
			$(".right_ul li").find("b").removeClass("now")
			$(".right_ul li").find("span").removeClass("now")
			$(".right_ul li").eq(index).find("b").addClass("now")
			$(".right_ul li").eq(index).find("span").addClass("now")
			$(".left_div").animate({"top":-index*picHeight},600)
			animateClass(index)
		}
	}

	//  滚轴事件   上下的兼容函数
	function mouseWheel(ev) {
		var ev = window.event || ev
		if(ev.wheelDelta){
			if (ev.wheelDelta > 0) {   //  1  向下滚     向上走
				scrollUp()
			} else {
				scrollDown()
			}
		}else{
			if (ev.detail > 0) {   //  1  向上滚     向下走
				scrollDown()
			} else {
				scrollUp()
			}
		}
	}	
	//    事件监听   兼容函数
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
})

$(function(){
	var picindex = 0;   //   图片索引
	var btnindex = 0;   //   按钮索引
	var imgwidth = $(".imgbox img").width();  //  图片宽
	$(".pagePeoactive li").click(function(){
		$(".pagePeoactive li").removeClass("show");
		$(this).addClass("show");
		btnindex = $(this).index();
		$(".imgbox").animate({"left":-btnindex*imgwidth});
		picindex = btnindex ; 
	})
	$(".LeftRight .right").click(function(){
		animateright()
	})
	function animateright(){
		if(picindex == $(".imgbox img").length-1){
			picindex = 0
			$(".imgbox").css({"left":0});
		}
		picindex++;
		$(".imgbox").animate({"left":-picindex*imgwidth});
		$(".pagePeoactive li").removeClass("show");
		if(btnindex < $(".pagePeoactive li").length-1){
	        btnindex++
	    }else{
	        btnindex = 0;
	    }
		$(".pagePeoactive li").eq(btnindex).addClass("show");
	}
	$(".LeftRight .left").click(function(){
		if(picindex == 0){
			picindex = $(".imgbox img").length-1;
			$(".imgbox").css({"left":-picindex*imgwidth});
		}
		picindex--;
		$(".imgbox").animate({"left":-picindex*imgwidth});
		$(".pagePeoactive li").removeClass("show");
		if(btnindex > 0){
	        btnindex--
	    }else{
	        btnindex = $(".pagePeoactive li").length-1;
	    }
		$(".pagePeoactive li").eq(btnindex).addClass("show");
	})
	
	var timer1 = null;
	clearInterval(timer1)
	timer1 = setInterval(function(){
		animateright()
	},1000)
	$(".pagePeo").hover(function(){
		clearInterval(timer1)
	},function(){
		timer1 = setInterval(function(){
			animateright()
		},1000)
	})
})
