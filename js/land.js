
var land = function(){
	var $(".main_right form .land").click(function(){
		// 1.存cookie
		$.cookie("Username",$(".main_right form .unbox").val(),{expires:7});
		// 2.判断复选框的状态
		//$(".check_box .check")的特性"checked"
		var Checked = $(".check_box .check").prop("checked"); 
	})

	// 3.勾选的时候，记住用户名
	$(".check_box .check").click(function(){
		// 创建一个状态
		$.cookie("choice","checked",{expires:7});
	})

	var Checked = $.cookie.choice;

	if(Checked == "checked"){
		var Checked = $(".check_box .check").prop("checked",true);

		$(".main_right form .land").val($.cookie().Username);
	}



}
land();





















