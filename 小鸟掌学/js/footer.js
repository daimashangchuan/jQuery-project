$(function(){
	var audio = document.getElementsByTagName("audio");
	$(".footer_music span").click(function(){
		  i = $(this).index();
		if($("audio").eq(i) !== true){
            audio[i].load();
            audio[i].play();
		}
	})
	/*-----------------返回顶部------------------------------*/
	$(window).scroll(function(){
		var distance = $("html,body").scrollTop();
		if ( distance > 500) {
			$(".fixed_tip").fadeIn()
		} else{
			$(".fixed_tip").fadeOut()
		}
	})
	$(".scroll_top").click(function(){
		var distance = $("html,body").scrollTop();
		var time = 500;
		var intervalTime = 10;
		var item = distance/(time/intervalTime);
		var timer = setInterval(function(){
			distance -= item;
			if(distance <= 0){
				distance = 0;
				clearInterval(timer)
			}
			$("html,body").scrollTop(distance)
		},intervalTime)
	})
})
