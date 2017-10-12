window.onload=function(){

	waterfall('main','box');
}
	 function waterfall(parent,box){
	 	var oParent=document.getElementById(parent);
	 	var oBoxs=getByClass(oParent,box);
	 	//计算整个页面显示的列数
	 	var screenWidth=document.documentElement.clientWidth;
	 	var imgWidth=oBoxs[0].offsetWidth;
	 	var rols = Math.floor(screenWidth/imgWidth);
	 	oParent.style.width=rols*imgWidth+'px';
	 	var hArr=[];
	 	for(var i=0;i<oBoxs.length;i++){
	 		oBoxs[i].style.opacity=1;
	 		if(i<rols){
	 			oBoxs[i].style.top=0+'px';	 			
	 			oBoxs[i].style.left=imgWidth*i+'px';
	 			hArr.push(oBoxs[i].offsetHeight);
	 		}else{
	 			var minH=Math.min.apply(null,hArr);	
	 			var index=getMinhIndex(hArr,minH);
	 			oBoxs[i].style.top=minH+'px';	 			
	 			oBoxs[i].style.left=imgWidth*index+'px';
	 			hArr[index]=hArr[index]+oBoxs[i].offsetHeight;
	 		}
	 		}
	 	window.onresize = function(){      //窗口改变调用函数  
		waterfall('main','box');
    		}
	 		}

function getByClass(parent,clsName){
	var boxArr = new Array();
	 oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}


