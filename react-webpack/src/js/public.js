
import $ from 'jquery';
// 通用脚本
$(function(){

	// 左侧菜单栏伸缩
	$(".top-logo i").click(function(){
		var w = $(".col-l").width();
		var pdl = $(".content").css("padding-left");
		if( pdl !== "0px" ) {
			$(".content").animate({paddingLeft : "0"}, 500);
			$(".col-l").animate({left: -w}, 500);
		} else {
			$(".content").animate({paddingLeft : w}, 300);
			$(".col-l").animate({left: "0"}, 300);
		}
	});
	
	// .col-l 高度
	var H = $(window).height() - 54;
	$(".col-l").outerHeight(H);
	$(".content, .col-r").css("min-height",H)
	$(window).resize(function(){
		var H = $(window).height() - 54;
		$(".col-l").outerHeight(H);
	});
	
	// 头部 底部 滚动透明处理
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var maxT = $(document).height() - $(window).height();
		if(st > 0 && st < maxT){
			$(".erp-bt").css({backgroundColor: "rgba(89,105,124,0.7)"});
			$(".top-bar").css({opacity: "0.8"});
		} else {
			$(".erp-bt").css({backgroundColor: "rgba(89,105,124,1)"});
			$(".top-bar").css({opacity: "1"});
		}
	});
	
	// 系统设置下拉
	$(".setting-name").click(function(){
		$(".set-box").slideToggle()
	});
	
	// 导航树样式
	$(".nav-l li").mouseover(function(){
		$(this).addClass("nav-active2");
	});
	$(".nav-l li").mouseout(function(){
		$(this).removeClass("nav-active2");
	});
	$(".nav-add").click(function(){
		var val = $(this).html();
		var aDrop = $(this).parent().next(".nav-items");
		if( val === "-" ){
			$(this).html("+");
		}
		else if( aDrop.length !== 0 ){
			$(this).html("-");
		}
		aDrop.slideToggle();
	});
	
	
	mod_select(); // 调用
	
	// 左侧 滚动阴影效果
	$(".col-l-scroll").scroll(function(){
		var scrt = $(this).scrollTop();
		if( scrt > 0 ) {
			$(this).parent().addClass("shaw-line");
		} else {
			$(this).parent().removeClass("shaw-line");
		}	
	});

}) 

// select 模拟

	function mod_select(){
		$(".option-select li").click(function(){
			var V = $(this).html();
			$(this).parent().parent().hide()
			.prev(".box-select").children(".input-select").val(V);
			$(".icon-select").removeClass("icon-move");
		});
		$(".icon-select").click(function(event){
			$(this).parent().next(".box-option").toggle();
			$(this).toggleClass("icon-move");
			$(".icon-select").not(this).removeClass("icon-move")
			.parent().next(".box-option").hide();
			event.stopPropagation();
		});
		$(".box-option").click(function(event){
			event.stopPropagation();
		});
		$(document).click(function(){
			$(".box-option").hide();
			$(".icon-select").removeClass("icon-move");
		});
	}