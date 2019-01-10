$(function(){
	let pro = new Promise(function(){
		$(".header_top").load("header.html");
	    $(".footer_bottom").load("footer.html");
	})
})
/*-----------请求数据--------------*/
$(function(){
	var index = 0;
	var pageStart;
	getList();
	$(".list_more").click(function(){
		index++;
		if(index < pageStart){
			getList();
		}
		if(index == 2){
			$(".dyn_active>img").attr("src","img/list_gomore_bg_nomore.jpg");
			$(".dyn_active>img").css("margin-bottom","200px")
			$(".list_more").hide();
		}
	})
	function getList(){
		$.ajax({
		type:"get",
		url:"json/listData.json",
		async:false,
		datatype:"json",		
		}).done(function(str){			
			if(index == 0){
				$(".dyn_cont").html("")
			}
			var list = str[index].data.list;
			pageStart = str.length;
			for (var i=0; i<list.length; i++) {
				$(".dyn_cont").append(
					`
					<div class="dyn_one" data-sysid=${list[i].sysId}>
						<div class="dyn_img">
							<img src="${list[i].coverImg}" alt="" />
						</div>
						<div class="dyn_text">
							<h4>${list[i].title}</h4>
							<p class="p1">${list[i].creatAt}</p>
							<p class="p2">${list[i].describe}</p>
						</div>
						<img class="img_hover" src="img/list_img_over_xiaojiantou.png"/>
					</div>
					`
				)
			}
		});
	}	
})
/*--------------跳转详情页---------------------*/
$(function(){
	$(".dyn_cont").delegate(".dyn_one","click",function(){
		var articleId=$(this).attr("data-sysid") 
		window.open("details.html?articleId="+articleId);
	})
	
	/*----------滑动笔------------*/
	var timer = null;
	clearInterval(timer);
	timer = setTimeout(function(){
		$(".dyn_tit h3").animate({"width":1100},800)
	},500)
})


















