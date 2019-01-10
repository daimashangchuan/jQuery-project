$(function(){
	var id=getParams("articleId")
	var articleData=articleData[id].typeTitle
	console.log(articleData)
	//search ?  hash #   article.html?articleId=3&name=22&
});
function getParams(type){	
   var reg=new RegExp("(^|&)"+type+"=([^|&]*)(&|$)")
   var value=window.location.search.substring(1).match(reg)
   if(value==null){
      return null
   }else{
     return  value[2]
   }
}