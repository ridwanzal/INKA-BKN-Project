!function(){var a=function(){$(".carousel-wrapper").each(function(){var a=0,b=$(this).children(".feature-slide");$(b).find(".flexipanel").height("auto");for(var c=0;c<b.length;c++){var d=$(b[c]).find(".flexipanel").height();a=d>a?d:a}$(b).find(".flexipanel").height(a)})};$(document).ready(a),$(window).on("load resize",a)}();
