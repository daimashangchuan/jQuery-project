$(function(){
	/*------------头部------------*/
	$(".info1>input").on('click',function(){
		$(".info1box").show();
		return false;
	})
	$(".info1box>div>span").on('click',function(){
		var value = $(this).html();
		$(".info1>.input").val(value);
		$(".info1box").css("display","none");
		return false
	})	
	$('.info1box').click(function () {
		return false
	})	
	$(".close").on('click',function(ev){
		$(".info1box").css("display","none");
		return false
	})
	$('body').on('click',function () {
		$(".info1box").css("display","none");
	})
	/*-----------铃铛---------------*/
	$(".in3_tit p").mouseenter(function(){
		$(".in3_tit p").removeClass("now");
		$(this).addClass("now");
		$(".in3_cont").removeClass("now");
		$(".in3_cont").eq($(this).index()).addClass("now");
	})
	$(".in3_cont ol li").click(function(){
		var width = $(".in3_cont ul li").width();
		var index = $(this).index();
		$(".in3_cont ol li").removeClass("now");
		$(this).addClass("now");
		$(".in3_cont ul").animate({"left":-index*width})
	})	
})
$(function(){
	var $height = $(window).height();
	var hheight = $(".header_wrap").height()+1;
	$(".acticle").height($height-hheight);
	$(window).resize(function(){
		var $height = $(window).height();
		$(".acticle").height($height-hheight);
	})
	$(".act_main:first").show();
	$(".rel_nav").click(function(){
		$(".rel_nav").removeClass("now");
		$(".rel_nav>span").removeClass("now");
		$(".rel_nav .unter").removeClass("now");
		$(this).addClass("now");
		$(this).find("span").addClass("now");
		$(this).find(".unter").addClass("now");
		$(".act_main").eq($(this).index()).show().siblings(".act_main").hide();
	})
	
	/*---------banner t图-----------*/
	$(".olright").click(function(){
		$(".swiper").animate({"left":-1222})
	})
	$(".olleft").click(function(){
		$(".swiper").animate({"left":0})
	})
	let timer = null;
	let tag = true;
	clearInterval(timer);
	setInterval(function(){
		if(tag){
			$(".swiper").animate({"left":-1222})
		}else{
			$(".swiper").animate({"left":0})
		}
		tag = !tag;
	},8000)	
})
$(function(){
	/*----------ajax获取数据-------------*/
	$.ajax({
		type:"get",
		url:"https://www.easy-mock.com/mock/5bed54d17939e615b8bbdb84/example/listData.json",
		async:false,
		datatype:"json",
	}).done(function(str){
		var list1 = str[0].data.list;
		for (var i=0; i<list1.length; i++) {
			$(".act_cont").append(
			`
				<div class="hdModel" data-title = "${list1[i].classification}" data-day="${list1[i].hiliday}" data-game="${list1[i].type}" data-sysId="${list1[i].sysId}">     
					<div class="del_tit">
						<img class="imgauto img1" src="${list1[i].imgjpg}" alt="" />
						<img class="imgauto img2" src="${list1[i].imggif}" alt="" />
					</div>
					<div class="del_cont">
						<p>${list1[i].title}</p>
						<div class="createImg"></div>
					</div>
					<div class="del_hot"></div>
				</div>
			`
			)
		}
		var list2 = str[1].data.list;
		for (var i=0; i<list2.length; i++) {
			$(".act_cont").append(
			`
				<div class="hdModel" data-title = "${list2[i].classification}" data-day="${list2[i].hiliday}" data-game="${list2[i].type}" data-sysId="${list2[i].sysId}">     
					<div class="del_tit">
						<img class="imgauto img1" src="${list2[i].imgjpg}" alt="" />
						<img class="imgauto img2" src="${list2[i].imggif}" alt="" />
					</div>
					<div class="del_cont">
						<p>${list2[i].title}</p>
						<div class="createImg"></div>
					</div>
				</div>
			`
			)
		}		
	});
	/*----------内容开始-------------*/
	var navwidth = $(".act_ul").width()
	$(".slideBox").width(navwidth);
	/*------------nav---------------*/
	$(".act_ul>div").click(function(){
		$(".act_ul>div").removeClass("now");
		$(this).addClass("now");
		/*-------获取内容-----------*/
		$(".hdModel").hide();
		var val = $(this).find("span").html();
		if (val === "节日"|| val === "全部" || val === "游戏营销"){
			$(".hdModel").show()
		} else{
			$(".hdModel").filter("[data-title ="+val+"]").show();
		}
		return false;
	})
	/*------------节日---游戏营销-----------*/
	var istrue = true;
	$(".slideBox li").click(function(){
		$(".slideBox>li").removeClass("now");
		$(this).addClass("now");
		/*-------获取内容-----------*/
		$(".hdModel").hide()
		var val = $(this).html();
		if (val === "全部节日" || val === "全部"){
			$(".hdModel").show()
		} else{
			$(".hdModel").filter("[data-day ="+val+"]").show();
			$(".hdModel").filter("[data-game ="+val+"]").show();
		}
		return false;
	})
	/*--------更多节日--------*/
	$("#value").click(function(){
		if (istrue) {
			$(".divlist").show();
			$(".lastli .iconAll3").addClass("pan1");
		} else{
			$(".divlist").hide();
			$(".lastli .iconAll3").removeClass("pan1");
		}
		istrue = !istrue
		return false;
	})
	$(".divlist span").click(function(){
		$("#value").html($(this).html());
		$(".divlist").hide();
		$(".lastli .iconAll3").removeClass("pan1");
		/*-------获取内容-----------*/	
		$(".hdModel").hide()
		var val = $(this).html()
		$(".hdModel").filter("[data-day ="+val+ "]").show();
		istrue = !istrue
		return false;
	})
	
	/*------------固定 nav----------------*/
	$(".act_main").scroll(function(ev){
		if ($(".act_main").scrollTop() > $(".act_cont").offset().top) {
			$(".act_nav").addClass("navfixed");
			$(".act_cont").css("padding-top",86);
		} else{
			$(".act_nav").removeClass("navfixed");
			$(".act_cont").css("padding-top",60);
		}
	})
})
/*----------mask------------*/
$(function(){
	
	var tag = true;	
	$(".act_cont").delegate(".hdModel","click",function(){
		$(".bg-mask").show();
		var val = $(this).find(".del_cont").find("p:first").html();
		console.log(val)
		$(".mask-right h3").html(val)
		return false;
	})
	$(".mask-btn").click(function(){		
		$(".bg-mask").hide();
		$(".maskleftBg").hide();
		$(".qrc_cont").html("扫码");
		tag = !tag;
	})
	$("body").click(function(){		
		$(".bg-mask").hide();
		$(".maskleftBg").hide();
		$(".qrc_cont").html("扫码");
		tag = !tag;
	})
	$(".mask-cont").click(function(){		
		return false;
	})
	$(".qrcodeBtn").click(function(){
		if (tag) {
			$(".maskleftBg").show();
			$(".qrc_cont").html("收起");
		} else{
			$(".maskleftBg").hide();
			$(".qrc_cont").html("扫码");
		}
		tag = !tag;
	})
})














