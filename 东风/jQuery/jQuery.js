/*$(function(){
	$('#mouse').mousemove(function(e){
		var positionDiv = $(this).offset();
		var distenceX = e.pageX - positionDiv.left;
		var distenceY = e.pageY - positionDiv.top;
			$(document).mousemove(function(e){
			    var x = e.pageX - distenceX;
			    var y = e.pageY - distenceY;
			    if(x<0){
			       x=0;
			    }else if(x>$(document).width()-$('#mouse').outerWidth(true)){
			       x = $(document).width()-$('#mouse').outerWidth(true);
			    }
			    if(y<0){
			       y=0;
			    }else if(y>$(document).height()-$('#mouse').outerHeight(true)){
			       y = $(document).height()-$('#mouse').outerHeight(true);
			    }
			    $('#mouse').css({
			       'left':x+'px',
			       'top':y+'px'
			    });
			});
			$(document).mouseup(function(){
			    $(document).off('mousemove');
			});
	});	
	
	$(".nav_toggle").hide()
	$(".btn1").mouseenter(function(){
		$(".nav_toggle").hide()
		$(".nav_toggle1").slideToggle(600)
	})
	$(".btn1").mouseleave(function(){
		$(".nav_toggle").hide()
		$(".nav_toggle1").slideDown(600)
	})
	$(".btn2").mouseenter(function(){	
		$(".nav_toggle").hide()
		$(".nav_toggle2").slideToggle(600)
	})
	$(".btn2").mouseleave(function(){
		$(".nav_toggle").hide()
		$(".nav_toggle2").slideDown(600)
	})
	$(".btn3").mouseenter(function(){
		$(".nav_toggle").hide()
		$(".nav_toggle3").slideToggle(600)
	})
	$(".btn3").mouseleave(function(){
		$(".nav_toggle").hide()
		$(".nav_toggle3").slideDown(600)
	})
	$(".nav_toggle").eq($(this))
	
	$("#box ul li").eq($(this).index()).show()
	.siblings().hide();
	$("btn").hover(function(){
		$(".nav_toggle").hide().eq($(this).index()).show();
	},function(){
//		$(".nav_toggle").hide().eq($(this).index()).show();
	})
})*/
