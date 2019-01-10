var global = global || {};
$(function(){
	getList()
	$(".more-btn").click(function(){
		pageStart++;
		console.log(global.page)
		console.log(global.page)
		if(pageStart < global.page){
			getList();
		}else{
			$(".more-btn").hide();
		}
	})
	$("#article").delegate(".content","click",function(){
		var articleId = $(this).attr("articleid");
		$(window).location = "详情.html？articleId="+articleId;
	})
})
var pageStart=0;   //页数 
	function getList(){	
		/*$.ajax({
			url:"1.json",
			type:"get",
			async:false,
			dataType:"json",
			data:{
				
			},
			success:function(){     //2.0
				
			},
			fail:function(){
				
			}
		}).done(function(result){
			
		})*/	
		
		var result=listData["listData0"+pageStart];
		var list = result.data.list;
		global.count = result.data.count;
		var pageSize = result.data.pageSize;
		
		if(pageStart==0){
			$("#itemHtml").html("")
		}
		for(var i=0;i<list.length;i++){
			var htmlmodel=$("#article").html()		
			htmlmodel=htmlmodel.replace("articleId$",list[i].sysId)
			htmlmodel=htmlmodel.replace("imgz/list_img01.jpg",list[i].coverImg)
			htmlmodel=htmlmodel.replace("$articleTitle$",list[i].title)
			htmlmodel=htmlmodel.replace("$articleCreatAt$",list[i].creatAt)
			htmlmodel=htmlmodel.replace("$articleDescribe$",list[i].describe)
			$("#itemHtml").append(htmlmodel)
		}
		global.page = parseInt(global.count/pageSize)
	}