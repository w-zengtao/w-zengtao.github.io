$(document).ready(function(){
  init();
})

// 初始值设定
function init() {
  set_size();
  re_size();
}

// 随着窗口的大小重设css尺寸
function re_size() {
  $(window).resize(function(){
    set_size();
  });
}

function set_size() {
  var win_width = $(window).width();
  var win_height = $(window).height();

  $(".screen-line").css("width",win_width);
  $(".screen").css({
    "width" : win_width,
    "height" : win_height
  });
  $("#info-content").css({
  });
}
