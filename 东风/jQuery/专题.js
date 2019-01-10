$(function(){
	/**********鼠标************/	
	$(document).mousemove(function(event){
		var position = $("#mouse").offset();
		var oDivx = event.pageX - position.left;
		var oDivy = event.pageY - position.top;
//		$("#mouse").css("display","block")
		var x = event.pageX - oDivx.left;
		var y = event.pageY - oDivy.top;			
		$("#mouse").css({
			'left':x+'px',
			'top':y+'px'
		});		
	})
	
	/**************遮罩层******************/	
	timer = setTimeout(function() {
		$("#mask").css("display","none")
	}, 9500);
	$("body").click(function(){
		$("#mask").css("display","none")
	})
			
	/*******点击跳转************/
	$(".header .inner ul li a").click(function(){
		var num = $(".acticle").height();
		var index = $(this).parent().index()+1;
		$(".header .inner ul li a").removeClass("now").eq(index-1).addClass("now")
		if ($(this).parent().index()+1 == 5) {
			index = 4;
			$(".slide").animate({"top":-num*index+"px"},500)
		}else if($(this).parent().index()+1 == 6){
			$(".slide").animate({"top":0+"px"},500)
		}else{
			$(".slide").animate({"top":-num*index+"px"},500)
		}
	})
	
	/********滚动跳转***********/
	var pic = 0;
	$(window).on("mousewheel",function(event){		
		var num = $(".acticle").height();
		if(event.originalEvent.wheelDelta < 0){
			setTimeout(function(){
				pic++;	
				if(pic>4){
					$(".slide").animate({"top":-num*4+"px"},500);
					pic = 4				
				}else{
					$(".slide").animate({"top":-num*pic+"px"},500);
				}
			},500)			
		}else{
			setTimeout(function(){
				pic--;
				if(pic < 0){
					$(".slide").animate({"top":0+"px"},500);	
					pic =           0;
				}else{
					$(".slide").animate({"top":-num*pic+"px"},500);
				}
			},500)			
		}
	})
			
	/*******概述*********/
	$(".sum_active .left").hover(function(){
		$("#prev").animate({"margin-left":-58+"px"},function(){
			
		})
	},function(){
		$("#prev").animate({"margin-left":0+"px"})
	})

	$(".sum_active .right").hover(function(){
		$("#next").animate({"margin-left":0+"px"},function(){
			
		})
	},function(){
		$("#next").animate({"margin-left":-58+"px"})
	})	
	var picindex = 0	
	$("#left").click(function(){
		if(picindex == 0){
			picindex = 3;
	        $(".sum_box").css("left",picindex * -$(".sum_main").width() + "px")
	    }
	    picindex--;
	    
	    var yidong=picindex * -$(".sum_main").width() + "px";
	    $(".sum_box").animate({"left":yidong},500);	        		  						
	})
	$("#right").click(function(){
		if(picindex == 3){
	        $(".sum_box").css("left",0)
	        picindex = 0;
	    }
	    picindex++;
	    console.log(picindex)
	    var yidong=picindex * -$(".sum_main").width() + "px";
	    $(".sum_box").animate({"left":yidong},500); 
	})
	
	/*******翡翠掌云*********/
	$("#btn1").click(function(){
		$(".above").animate({"left":0},500)
		$(".spe_box").animate({"left":0},500)
	})
	
	$("#btn2").click(function(){
		$(".above").animate({"left":78+"px"},500)
		$(".spe_box").animate({"left":-910+"px"},500)
	})
})
