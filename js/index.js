var interval_ = 0;
$(function(){
	init();
	var imgTotal = $("img").length;
	var imgReady = 0;
	var list = document.getElementsByTagName("img");
	$("img").on('load', function() {
		imgReady++;
		var porse = (parseFloat(imgReady) / parseFloat(imgTotal) * 100) + "%";
		$("#loading_ .loadings .prossess").animate({width:'' + porse},50);
		if(porse == '100%'){
			$("#loading_").hide();
			init_page("#page_one");
		}
	}).each(function() {
	  if(this.complete) $(this).load();
	});
})

function init_page(names){

	if(names == undefined){
		return;
	}
  	var o = $(names);
		clearInterval(interval_);
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
	var width = imgs.length * 55 + "rem";
	context.css("width",width);
	context.attr("data-left","0");
	var maxLeft = (imgs.length-1) * -55;
	var point_width = imgs.length * 2
	$("#page_four .slides .point").css("width",point_width+"rem");
	$("#page_four .slides .point .point_").removeClass("active");
	$("#page_four .slides .point .point_:eq(0)").addClass("active");

	context.unbind("swipeLeft");
	context.unbind("swipeRight");
	context.swipeLeft(function(){
		moveLeft(context,maxLeft);
	})
	context.swipeRight(function(){
		moveRight(context);
	});

	interval_ = setInterval(function(){
		moveLeft(context,maxLeft);
	},5000)
}

function moveLeft(o,maxLeft){
	var left = parseInt(o.attr("data-left"));
	left -= 55;
	if(left < maxLeft){
		$("#page_four .slides .point .point_").removeClass("active");
		$("#page_four .slides .point .point_:eq(0)").addClass("active");
		o.animate({translate:'0rem,0'},300,'linear');
		o.attr("data-left",'0');
	}else{
		var left_ = (left / -55);
		$("#page_four .slides .point .point_").removeClass("active");
		$("#page_four .slides .point .point_:eq("+left_+")").addClass("active");
		o.animate({translate:left+'rem,0'},500,'linear');
		o.attr("data-left",left);
	}
}
function moveRight(o){
	var left = parseInt(o.attr("data-left"));
	left += 55;
	if(left > 0){
		return;
	}
	var left_ = (left / -55);
	$("#page_four .slides .point .point_").removeClass("active");
	$("#page_four .slides .point .point_:eq("+left_+")").addClass("active");
	o.animate({translate:left+'rem,0'},500,'linear');
	o.attr("data-left",left);
}

function nextPage(o){
	var this_ = $(o).parent();
	var num = parseInt(this_.attr("data-order"));
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
		this_.css("animation","swipeUp 1s ease both");
		setTimeout(function(){
			this_.find(".animate").removeAttr("style");
		},1000)
		init_page("#"+id);
	}
}

function init(){

	$(".main").each(function(){

		$(this).swipeUp(function(){
			var this_ = $(this);
			var num = parseInt(this_.attr("data-order"));
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
