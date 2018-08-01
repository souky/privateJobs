
$(function(){
  init_page_one();
})

function init_page_one(){
  var o = $("#page_one");
  o.find(".animate").each(function(){
    var names = $(this).attr("data-animate");
    var sec = $(this).attr("data-sec");
    $(this).css("animation",names+" "+sec+"s");
    $(this).css("-webkit-animation",names+" "+sec+"s");
  })
}
