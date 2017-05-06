window.onload = function(){
/*top*/
	//top-banner
	var topBanner = function(){
		$(".top-banner span").click(function(event) {
			$(this).parent(".top-banner").css("display","none")
		});
	}
	topBanner();

	var showBox = function(){
		//软件应用滑过弹出
		$(".top .top_list_left .mr_27").mouseover(function(){
			$(this).children("#software_showbox").css("display","block");
			// $(this).children("span").css("background-position","0 0");
		})
		//滑出隐藏
		$(".top .top_list_left").mouseout(function(){
			$(this).children(".mr_27").children("#software_showbox").css("display","none");
		})

		//网站导航滑过弹出
		$(".top .top_list_right .mr_28").mouseover(function(){
			$(this).children("#webnav_showbox").css("display","block");
		})
		//滑出隐藏
		$(".top .top_list_right").mouseout(function(){
			$(this).children(".mr_28").children("#webnav_showbox").css("display","none");
		})
	}
	showBox();

/*header*/
	//搜索框中热卖产品列表  
	var hotProductListShow = function(){
		//获得焦点时隐藏热卖产品列表
		$("#text_box").focus(function(){
			$(".header_box .hotProduct_list").css("display","none");
		})
		//失去焦点时显示热卖产品列表
		$("#text_box").blur(function(){
			$(".header_box .hotProduct_list").css("display","block");
		})
	}
	hotProductListShow();

	//二维码变换
	var qrCodeTab = function(){
		/*问题原因，覆盖，点击不上*/
		//eq(index)
		$(".QR_Code .click_list li").each(function(index, el) {
			//index为索引，el为事件
			$(this).mouseover(function() {
				$(this).parent(".click_list").children("li").css("background","#888");
				$(this).css("background","#c81118");
				$(this).parent(".click_list").siblings(".QRCodelist").children("li").css("display","none");
				$(this).parent(".click_list").siblings(".QRCodelist").children("li").eq(index).css("display","block");
			});
		})
		/*方法二：*/
		// $('.QR_Code>.click_list >li').each(function() {
		// 	$(this).on('mouseover',function(){
		// 		alert(1)
		// 	})
		// });
	}
	qrCodeTab();

/*banner*/
	var bannerList = function(){
		//鼠标滑入显示
		$(".banner .banner_list>li").each(function(index) {
			// var i = index;
			// console.log(i);
			$(this).mouseover(function() {
				$(this).parent(".banner_list").children("li").css("background","#fff");
				$(this).css("background","#f7f7f7");
				$(this).children("div").css("display","block");
				$(this).siblings("li").children("div").css("display","none");
			});
		});
		//鼠标滑出隐藏
		$(".banner .banner_list").mouseout(function() {
			$(this).children("li").children("div").css("display","none");
			$(this).children("li").css("background","#fff");
		});
	}
	bannerList();

	//轮播图
	var bannerScrollImg = function(){

		var timer = null;
		var i = 0;
		//定时器
		function banner_setTime(){
			timer = setInterval(function(){
				$(".banner_scrollImg .scrollImg li").eq(i).siblings("li").css("display",'none');
				$(".banner_scrollImg .scrollImg li").eq(i).css("display",'block');
				$(".banner_scrollImg .clicktab li").eq(i).siblings("li").css("background",'#494949');
				$(".banner_scrollImg .clicktab li").eq(i).css("background",'#ce2a33');
				i++;
				if(i>=10){
					i=0;
				}
			},3000);
		}
		
		//定时轮播
		banner_setTime();
		//手动变换
		$(".banner_scrollImg .clicktab li").each(function(index) {
			$(this).mouseover(function(){
				clearInterval(timer);
				$(".banner_scrollImg .scrollImg li").eq(index).siblings("li").css("display",'none');
				$(".banner_scrollImg .scrollImg li").eq(index).css("display",'block');
				$(".banner_scrollImg .clicktab li").eq(index).siblings("li").css("background",'#494949');
				$(".banner_scrollImg .clicktab li").eq(index).css("background",'#ce2a33');
				//记住现在的索引，下次继续从这儿轮播
				i=$(this).index();
			})
		});	

		$(".banner_scrollImg .clicktab li").each(function() {
			$(this).mouseout(function(){
				banner_setTime();
			});	
		});	
	}
	bannerScrollImg();


// var oProductHot = document.getElementById("product_hot");
// $.ajax({
// 	url: 'json/product_hot.json',
// 	type: 'POST'
// })
// .done(function(data) {
// 	console.log("success");
// })


/*main1*/
	//main1 热销产品(ajax)
	var productHot = function(){
		var oProductHot = document.getElementById("product_hot");
		$.get("json/product_hot.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img[0].img_src+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>"+result[i].product_prise+
				"元</div></a></li>"
			}
			oProductHot.innerHTML = str;
		})
	}
	productHot();

	//main1 轮播图
	var main1ScrollImg =function(){

		var timer = null;
		var i = 0;
		function setTime(){
			timer = setInterval(function(){
				$(".main1_scrollImg .scrollImg_list li").eq(i).siblings("li").css("display",'none');
				$(".main1_scrollImg .scrollImg_list li").eq(i).css("display",'block');
				$(".main1_scrollImg .click_list li").eq(i).siblings("li").css("background",'#e2e2e4');
				$(".main1_scrollImg .click_list li").eq(i).css("background",'#e1c1c5');
				i++;
				if(i>=5){
					i=0;
				}
			},3000);
		}
		//定时轮播
		setTime();
		//手动变换
		$(".main1_scrollImg .click_list li").each(function(index) {
			$(this).mouseover(function(){
				clearInterval(timer);
				$(".main1_scrollImg .scrollImg_list li").eq(index).siblings("li").css("display",'none');
				$(".main1_scrollImg .scrollImg_list li").eq(index).css("display",'block');
				$(".main1_scrollImg .click_list li").eq(index).siblings("li").css("background",'#e2e2e4');
				$(".main1_scrollImg .click_list li").eq(index).css("background",'#e1c1c5');
				i=$(this).index();
			})
		});	

		$(".main1_scrollImg .click_list li").each(function(index) {
			$(this).mouseout(function(){
				setTime();
			});	
		});	
	}
	main1ScrollImg();

/*main2 精品手机*/

	//main2_nav
	var productNav = function(){
		var oProductNav = document.getElementById("main2_nav");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav();
	//product_mobile
	var productmobile = function(){
		var oProductMobile = document.getElementById("product_mobile");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		// alert(2)
		$("#product_mobile li:eq(1)").animate("margin-bottom","10px");
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");
		// alert(3)

		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile();





/*======================复制精品手机===================*/
/*main3 精品手机*/

	//main2_nav
	var productNav2 = function(){
		var oProductNav = document.getElementById("main2_nav2");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav2();
	//product_mobile
	var productmobile2 = function(){
		var oProductMobile = document.getElementById("product_mobile2");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");


		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile2();	

/*main4 精品手机*/
	//main2_nav
	var productNav3 = function(){
		var oProductNav = document.getElementById("main2_nav3");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav3();
	//product_mobile
	var productmobile3 = function(){
		var oProductMobile = document.getElementById("product_mobile3");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");


		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile3();

/*main5 精品手机*/
	//main2_nav
	var productNav4 = function(){
		var oProductNav = document.getElementById("main2_nav4");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav4();
	//product_mobile
	var productmobile4 = function(){
		var oProductMobile = document.getElementById("product_mobile4");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");


		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile4();

/*main6 精品手机*/

	//main2_nav
	var productNav5 = function(){
		var oProductNav = document.getElementById("main2_nav5");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav5();
	//product_mobile
	var productmobile5 = function(){
		var oProductMobile = document.getElementById("product_mobile5");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");


		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile5();

/*main7 精品手机*/

	//main2_nav
	var productNav6 = function(){
		var oProductNav = document.getElementById("main2_nav6");
		$.get("json/main2_nav.json",function(data){
			var str = "";
			var result = data[0].result;
			for (var i = 0; i < result.length; i++) {
				str += "<li><a href='"+result[i].navlist_href+"'>"+
				result[i].navlist_name+"</a></li>"
			}
			oProductNav.innerHTML = str;
		})
	}
	productNav6();
	//product_mobile
	var productmobile6 = function(){
		var oProductMobile = document.getElementById("product_mobile6");
		$.get("json/main2_product.json",function(data){
			var str = "";
			var result = data[0].result;
			var str1 = "<li class='first'><a href='"+result[0].product_href+"'><img src='"+
			result[0].product_img+"' alt=''/></a></li>"
			for (var i = 1; i < result.length; i++) {
				str += "<li><a href='"+result[i].product_href+"'><img src='"+
				result[i].product_img+"' alt=''><h3>"+result[i].product_name+
				"</h3><p>"+result[i].product_keyword+"</p><div>￥"+result[i].product_prise+
				"</div></a></li>"
			}
			str = str1 + str;
			oProductMobile.innerHTML = str;
		})
/////////
		$("#product_mobile li").eq(1).animate("margin-bottom","10px");


		$("#product_mobile li").each(function(index){
			alert(1)
			console.log(index)
			if($(this).index()>=1 && $(this).index()<=5){
				$(this).css("margin-bottom","10px");
			}	
		})
	}
	productmobile6();

}
