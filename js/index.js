
$(function(){
  init_page("#page_two");
})

function init_page_one(){
  var o = $("#page_one");
  o.find(".animate").each(function(){
    var names = $(this).attr("data-animate");
    var sec_de = $(this).attr("data-secDe");
    var sec_ = "";
    if(sec_de){
    	sec_ = sec_de+"s";
    }
    $(this).css("animation",names+" 1s"+" ease "+sec_+" both");
    $(this).css("-webkit-animation",names+" 1s"+" ease "+sec_+" both");
  })
}


function init_page(names){
  var o = $(names);
  o.find(".animate").each(function(){
    var names = $(this).attr("data-animate");
    var sec_de = $(this).attr("data-secDe");
    var sec_ = "";
    if(sec_de){
    	sec_ = sec_de+"s";
    }
    $(this).css("animation",names+" 1s"+" ease "+sec_+" both");
    $(this).css("-webkit-animation",names+" 1s"+" ease "+sec_+" both");
  })
}