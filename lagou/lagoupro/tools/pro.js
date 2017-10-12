$('document').ready(function(){
	var value1=1,value3,value2;
	 $('.control i').eq(0).hide();
	 var val=setInterval(move,4000);
	$('.control').mouseenter(function(){
		$(this).stop(true);
		clearInterval(val);	
		clearInterval(value3);	
		 value1=$(this).attr('value');
		 value2=setTimeout(move,50);
	});
	 $('.control').mouseleave(function(){
	 		$(this).stop(true,false);
	 		clearTimeout(value2);
	 	value3=setInterval(move,4000);
	});
		function move(){
			$('.control i').show();
			$('.control i').eq(value1%3).hide();
			$('.up-left').animate({
				marginTop:'-'+(value1%3)*160+'px'
			},200);
			$('.up-right b').animate({
				top:(value1%3)*54+'px'
			},200);
			value1++;
		}
//ppT1
//PPT2
	$('#container .center .ppt .under li').mouseenter(function(e){
			console.log(e.offsetY);
			div = $(this).find('div');
			div.stop();
			if(e.offsetX>=e.offsetY){
				if(e.offsetX>100){
					div.css({"top":0,"right":'-100%'});
					div.animate({"right":0},250);
				}else{
					div.css({"top":'-100%',"right":0});
					div.animate({"top":0},250);
			}
			}else if(e.offsetY>100){
				div.css({"top":'100%'});
				div.animate({"top":0},250);
			}else{
			div.css({"top":0,"right":'100%'});
			div.animate({"right":0},250);
			}
			});
			$('#container .center .ppt .under li').mouseleave(function(e){
			div.stop();
			if(e.offsetX>=e.offsetY){
				if(e.offsetX>100){
					div.animate({"right": '-100%',"top":0},250);
				}else{
					div.animate({"top":'-100%',"right": '0'},250);
				}
				}else if(e.offsetY>100){
					div.animate({"top":'100%',"right": '0',},250);
			}else{
				div.animate({"right":'100%',"top":0},250);
			}
			});	
	$('.rock').click(function(){
		var h =$('body').scrollTop();
		$(this).addClass("rockactive fix");
		v=100;
			setInterval(function(){
				$('body').scrollTop(h-v);
			},100);
		});
		$(window).scroll(function(){
			var h1 =$('body').scrollTop();
			console.log(c);
			if(h1===0){
				$('.rock').hide();
				clearInterval(c);
			}
				});
});