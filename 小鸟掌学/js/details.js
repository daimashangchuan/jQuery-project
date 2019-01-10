$(function(){
	let pro = new Promise(function(){
		$(".header_top").load("header.html");
	    $(".footer_bottom").load("footer.html");
	})
})
/*------------------------*/
$(function(){
	var num = getParam("articleId");
	if(num.length == 1){
		var data = articleData["xiaoniaoNews"+num].data;
	}else{
		var data = articleData[num].data;
	}
	console.log(data)
	$(".det_tit").append(
		`
		<div class="model">
			<h1>${data.typeTitle}</h1>
			<h2>${data.typeEntitle}</h2>
			<img src="img/three_points01.png" alt="" />
			<h3>${data.title}<span></span></h3>
			<p><span>${data.creatAt}</span>&nbsp;&nbsp;<span>${data.creatByFullName}</span></p>
			<img src="${data.coverImg}" alt="" />
		</div>
		`
	)	
	function getParam(name){
		var search = location.search.substring(1);
		var regstr = "(^|&)" + name + "=(\\w+)(&|$)"
		var reg = new RegExp(regstr);
		var arr = reg.exec(search);
		if(arr){
			return arr[2];
		}else{
			return null;
		}
	}
	/*----------笔滑动-------------*/
	var timer = null;
	clearInterval(timer);
	timer = setTimeout(function(){
		$(".det_tit h3").animate({"width":780},800)
	},500)
	
	/*--------随机一句话-----------*/
	var arr = ["好嗨哦!","大哥，大哥，别杀我!","你可真是个杠精！","真香警告","厉害了，我的哥"];	
	var num1 = 0;
	$(".link_btn").click(function(){
		var timer1 = null;
		$(this).css({"background-position-y":-73});
		$(this).find("span").css("display","block");
		$(this).find(".value").show()
		clearInterval(timer1);		
		timer1 = setInterval(function(){
			num1 = Math.floor(Math.random()*arr.length);			
			$(".value").html(arr[num1]);
		},20)
		var timers = setTimeout(function(){
			clearInterval(timer1);						
		},1000)
	})	
})





















