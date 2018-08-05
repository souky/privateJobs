$(function(){
	init();
	init_page("#page_one");
})

function init_page(names){
	
	if(names == undefined){
		return;
	}
  	var o = $(names);
  	
  	var silde = o.attr("data-slide");
  	if(silde){
  		
  		init_silde(o);
  	}
  	
	o.find(".animate").each(function(){
		var names = $(this).attr("data-animate");
		var sec_de = $(this).attr("data-secDe");
		var infi_de = $(this).attr("data-infinty");
		
		var sec_ = "";
		var infinty = "";
		if(sec_de){
			sec_ = sec_de+"s";
		}
		if(infi_de == '1'){
			infinty = "alternate infinite";
		}
		$(this).css("animation",names+" 1s"+" ease "+sec_+" both " + infinty);
		$(this).css("-webkit-animation",names+" 1s"+" ease "+sec_+" both" + infinty);
  	})
  
}

function init_silde(o){
	var context = o.find(".context");
	
	context.removeAttr("style");
	var imgs = o.find(".imgs");
	var width = imgs.length * 49 + "rem";
	context.css("width",width);
	context.attr("data-left","0");
	var maxLeft = (imgs.length-1) * -49;
	var point_width = imgs.length * 2
	$("#page_four .slides .point").css("width",point_width+"rem");
	$("#page_four .slides .point .point_").removeClass("active");
	$("#page_four .slides .point .point_:eq(0)").addClass("active");
	
	context.unbind("swipeLeft");
	context.unbind("swipeRight");
	context.swipeLeft(function(){
		var left = parseInt($(this).attr("data-left"));
		left -= 49;
		if(left < maxLeft){
			return;
		}
		var left_ = (left / -49);
		$("#page_four .slides .point .point_").removeClass("active");
		$("#page_four .slides .point .point_:eq("+left_+")").addClass("active");
		$(this).animate({translate:left+'rem,0'},500,'linear');
		$(this).attr("data-left",left);
	})
	context.swipeRight(function(){
		var left = parseInt($(this).attr("data-left"));
		left += 49;
		if(left > 0){
			return;
		}
		var left_ = (left / -49);
		$("#page_four .slides .point .point_").removeClass("active");
		$("#page_four .slides .point .point_:eq("+left_+")").addClass("active");
		$(this).animate({translate:left+'rem,0'},500,'linear');
		$(this).attr("data-left",left);
	});
}

function init(){
	
	$(".main").each(function(){
		
		$(this).swipeUp(function(){
			var num = parseInt($(this).attr("data-order"));
			num++;
			if(num > 4){
				return;
			}
			if(num == 4){
				$(".bottom_common").hide();
			}
			var o = $(".main[data-order='"+num+"']");
			if(o != undefined){
				var id = o.attr("id");
				var this_ = $(this);
				this_.css("animation","swipeUp 1s ease both");
				setTimeout(function(){
					this_.find(".animate").removeAttr("style");
				},1000)
				init_page("#"+id);
			}
			
		})
		$(this).swipeDown(function(){
			var num = parseInt($(this).attr("data-order"));
			num--;
			if(num == 0){
				return;
			}
			$(".bottom_common").show();
			var o = $(".main[data-order='"+num+"']");
			if(o != undefined){
				var id = o.attr("id");
				o.css("animation","swipeDown 1s ease both");
				var this_ = $(this);
				setTimeout(function(){
					this_.find(".animate").removeAttr("style");
				},1000)
				init_page("#"+id);
			}
		})
	})
}
