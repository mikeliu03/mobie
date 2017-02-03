function showUserInfo(){
	$("#login_mask").addClass("show");
	$("#login_panel").addClass("show");
}

function hideUserInfo(){
	$("#login_mask").removeClass("show");
	$("#login_panel").removeClass("show");
}

function showMsg(msg){
	var jMsg = $(".layui-msg");
	if(jMsg.length == 0){
		var str = '<div class="layui-msg" style="display: none;"><div class="layui-layer">\
		<div class="layui-layer-content"></div></div></div>';
		jMsg = $(str);
		jMsg.appendTo(document.body);
	}
	jMsg.find(".layui-layer-content").text(msg);
	jMsg.show().delay("slow").fadeOut();
}

$(".navbar-brand").click(function(e){
	e.preventDefault();
	showUserInfo();
});

$("#login_mask").click(function(e){
	hideUserInfo();
});

$("#loginBtn").click(function(){
	$(".cem-applogo-icon").css("background-image", "url(../img/myuser.png)");

	showMsg("登录成功");
	hideUserInfo();
});

//下拉刷新

//mousedown,touchestart; mousemove, touchmove; mouseup, touchend;
$('#content-list').on("mousedown touchstart",function(evt){
	console.log(evt.originalEvent.touches);
});