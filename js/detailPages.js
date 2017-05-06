window.onload = function(){

	/*滑过变换大图*/
	var productShow = function(){
		$.get('../json/detailPages.json', function(data) {
			// 获取指示图片列表
			var oimgList = document.getElementById("img_list");
			var str = "";
			var getBigImg = data[0].getBigImg;
			for (var i = 0; i < getBigImg.small_img.length; i++) {
				str += "<li><img src='"+getBigImg.small_img[i]+"' alt=''/></li>"
			}
			oimgList.innerHTML = str;
			//设置默认展示图片
			var oShowBox = document.getElementById("show_box");
			var str0 = "";
			str0 = "<img src='"+getBigImg.big_img[0]+"' alt=''/>"
			oShowBox.innerHTML = str0;
			//滑过展示相应展示图片
			$("#img_list li").each(function(index) {
				// alert(2)
				$(this).mouseover(function(){
					// alert(3)	
					var str1 = "";
					str1 = "<img src='"+getBigImg.big_img[index]+"' alt=''/>"
					oShowBox.innerHTML = str1;		
				})
			});
		});

	/*??????????*/

		$(".imgList_box .leftAngle").click(function(){
			$(this).siblings("div").children(".img_list").animate("margin-left","-90px");
		})
		$(".imgList_box .rightAngle").click(function(){
			$("#img_list").animate("margin-left","90px");
		})
	/*----------*/
		// 为啥不行
		// alert(1)
		// console.log($("#img_list li"))
		// $("#img_list li").each(function(index) {
		// 	console.log($("#img_list li"))
		// 	console.log(index)
		// 	alert(2)
		// 	$(this).mouseover(function(){
		// 		alert(3)
		// 		var oShowBox = document.getElementById("show_box");
		// 		$.get('../json/detailPages.json', function(data) {
		// 			var getBigImg = data[0].getBigImg;
		// 			var str = "";
		// 			str = "<img src='"+getBigImg.big_img.eq(index)+"' alt=''/>"
		// 			oShowBox.innerHTML = str;
		// 		})
		// 	})
		// });


	}
	productShow();

	/*畅销榜及最近浏览*/
	var hotSeling = function(){
		var oHotselingList = document.getElementById("hotseling_list");
		$.get('../json/hot_seling.json', function(data) {

			var hotseling = data[0].hotseling;
			var resentbrowse = data[0].resentbrowse;
			var str1 = "";
			for (var i = 0; i < hotseling.length; i++) {
				str1 += "<li><i></i><a href='"+
				hotseling[i].product_href+"'><img src='"
				+hotseling[i].img_src+"' alt=''/></a><a href='"
				+hotseling[i].product_href+"'><p>"
				+hotseling[i].product_name+"</p></a><span>"
				+hotseling[i].product_price+"</span></li>"
			}
			oHotselingList.innerHTML = str1;

			$("#hotseling_list li i").eq(0).css("background","url(../images/icon/sprites1.png) no-repeat");
			$("#hotseling_list li i").eq(1).css("background","url(../images/icon/sprites1.png) no-repeat -33px 0");
			$("#hotseling_list li i").eq(2).css("background","url(../images/icon/sprites1.png) no-repeat -66px 0");
			$("#hotseling_list li i").eq(3).css("background","url(../images/icon/sprites1.png) no-repeat -99px 0");
			$("#hotseling_list li i").eq(4).css("background","url(../images/icon/sprites1.png) no-repeat -132px 0");
			$("#hotseling_list li i").eq(5).css("background","url(../images/icon/sprites1.png) no-repeat -165px 0");
			
			var str = ""
			var str2 = "";
			for (var j = 0; j < resentbrowse.length; j++) {
				str2 += "<li><a href='"+
				resentbrowse[j].product_href+"'><img src='"
				+resentbrowse[j].img_src+"' alt=''/></a><a href='"
				+resentbrowse[j].product_href+"'><p>"
				+resentbrowse[j].product_name+"</p></a><span>"
				+resentbrowse[j].product_price+"</span></li>"
			}
			str = "<div class='recent_browse'><h3>最近浏览过的的商品<span></span></h3><ul id='recentbrowse_list'>"+str2+"</ul></div>";
			var oRecentBrowseWrap = document.getElementById("recent_browse_wrap");
			oRecentBrowseWrap.innerHTML = str;

			$(".presentDetail_left .recent_browse h3 span").click(function(){
				$(".recent_browse").css("display","none");
			})
		});
	}
	hotSeling();

	/*产品详情选项卡*/
	var presentDetail = function(){
		$(".presentDetail_right>ul>li").eq(0).css("border-bottom-color",'#fff');
		$(".presentDetail_right>ul>li").eq(0).children("a").css("border-color",'#e01d20');
		$(".presentDetail_right>ul>li").eq(0).children("div").css("display",'block');

		$(".presentDetail_right>ul>li").each(function(index) {
			$(this).click(function(){
				// 点击项变化
				$(this).siblings("li").css("border-bottom-color",'#dedede');
				$(this).css("border-bottom-color",'#fff');
				$(this).siblings("li").children("a").css("border-color",'#fff');
				$(this).children("a").css("border-color",'#e01d20');
				// 内容变化
				$(this).siblings("li").children("div").css("display",'none');
				$(this).children("div").css("display",'block');
			})
		});


		$.get('../json/presentDetail.json', function(data) {
			console.log(data)
			var productDetail = data[0].productDetail;
			var str,str1 = "";
			var opDetail_box1 = document.getElementById("pDetail_box1");
			for (var i = 0; i < productDetail.length; i++) {
				str1 += "<li><img src='"+productDetail[i]+"' alt=''/></li>";
			}
			str = "<ul>"+str1+"</ul>";
			opDetail_box1.innerHTML = str;
		});






	}
	presentDetail();
}




