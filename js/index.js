
$(function(){
	init();
  init_page("#page_one");
})

function init_page(names){
	if(names == undefined){
		return;
	}
  var o = $(names);
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
