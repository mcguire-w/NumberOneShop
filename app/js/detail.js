$(".header").load("public.html .header-wrap",function(){
	memu.init(".header-wrap");
    Search.init(".hd-header-right");
    showcookie.init();
})
$(".footer").load("public.html .ft-wrap",function(){})
$(function(){
	//开关商品分类
	$("#sp").mouseover(function(){
		$(".nav-box").show();
		$("#spfl").css("background","url(images/d_a_副本.jpg)no-repeat 98px 2px");
	})
	$("#sp").mouseout(function(){
		$(".nav-box").hide();
		$("#spfl").css("background","url(images/d_a.gif)no-repeat 98px 9px");
	})
	
	//商品分类
		$(".nav-box li").hover(function(){
			$(this).children('.datu').show();
			$(this).children('.datu').children("ul").css("background-color","#FFFFFF");
			$(this).toggleClass("orange");
		},function(){
			$(this).children('.datu').hide();
			$(this).toggleClass("orange");//再次调用实现隐藏
		});
	//明细2-1
	$(".mx2-1>ul>li").mouseover(function(){
		$(this).css({"border-right":"1px solid #DDDDDD","border-left":"1px solid #DDDDDD"});
		$(this).children("a").css("background","none");
		$(this).children("ul").show();
		$(this).css("background","url(images/t_arrow_1.jpg)no-repeat 57px 15px");
//		$(this).children("span").show();
	})
	$(".mx2-1>ul>li").mouseout(function(){
//		$(this).children("span").hide();
		$(this).children("a").css("background","none");
		$(this).css({"border-right":"none","border-left":"none"});
		$(this).children("ul").hide();
		$(this).css("background","url(images/t_arrow.gif)no-repeat 58px 17px");
	})
//	明细2-2
	var lis = $(".mx2-2-2 ul li");
//	alert(lis.length);
	var spname=new Array("达利园","乐事","德芙","炫迈","蒙牛","桂格","天美华乳","m&ms","阿尔卑斯","百草味","小胖家","煌上煌","曼妥思","盼盼","士力架","港荣食品");
	$(".mx2-2-2 ul li").mouseover(function(){
//		alert(1);
		var index = $(".mx2-2-2 ul li").index(this);
//		alert(index);
//		$(this).css("display","none");
		$(this).css({"background":"#FFFFFF","border":"1px solid #FF0000"});
		$(this).css({"text-align":"center","color":"#FF0000","font-size":"13px","line-height":"52px","font-weight":"bolder"});
		$(this).html(spname[index]);
		//jquery加文字是html()，innerhtml是js的。。。
	}).mouseout(function(){
		var index = $(".mx2-2-2 ul li").index(this);
		var index1 = index+1;
		$(this).css({"background":"url(img/mx"+index1+".jpg)no-repeat 7px","border":"1px solid #DDDDDD"});
		$(this).html("");
	})
	
	//多选
	$("#duoxuan").click(function(){
		$(this).next().next().show();
		$("#more").html("收起");
		$("#more").css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
	})
	
	//更多--品牌
	$("#more1").click(function(){
		var more = $(this).html();
//		alert(more)
		if(more=="更多"){
			$(this).html("收起");
			$(this).css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
			$(this).parent().next().show();
		}
		if(more=="收起"){
			$(this).html("更多");
			$(this).css("background","url(images/t_arrow.gif)no-repeat 25px 6px");
			$(this).parent().next().hide();
		}
	})
	
	//更多--分类
	$("#more").click(function(){
		var more = $(this).html();
//		alert(more)
		if(more=="更多"){
			$(this).html("收起");
			$(this).css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
			$(this).parent().next().show();
		}
		if(more=="收起"){
			$(this).html("更多");
			$(this).css("background","url(images/t_arrow.gif)no-repeat 25px 6px");
			$(this).parent().next().hide();
		}
	})
	
	//更多--口味
	$("#more2").click(function(){
		var more = $(this).html();
//		alert(more)
		if(more=="更多"){
			$(this).html("收起");
			$(this).css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
			$(this).parent().next().show();
		}
		if(more=="收起"){
			$(this).html("更多");
			$(this).css("background","url(images/t_arrow.gif)no-repeat 25px 6px");
			$(this).parent().next().hide();
		}
	})
	
	//更多--包装
	$("#more3").click(function(){
		var more = $(this).html();
//		alert(more)
		if(more=="更多"){
			$(this).html("收起");
			$(this).css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
			$(this).parent().next().show();
		}
		if(more=="收起"){
			$(this).html("更多");
			$(this).css("background","url(images/t_arrow.gif)no-repeat 25px 6px");
			$(this).parent().next().hide();
		}
	})
	
	//更多--包装单位
	$("#more4").click(function(){
		var more = $(this).html();
//		alert(more)
		if(more=="更多"){
			$(this).html("收起");
			$(this).css("background","url(images/t_arrow_副本.jpg)no-repeat 25px 5px");
			$(this).parent().next().show();
		}
		if(more=="收起"){
			$(this).html("更多");
			$(this).css("background","url(images/t_arrow.gif)no-repeat 25px 6px");
			$(this).parent().next().hide();
		}
	})
	
	//明细2-7
	$(".mx2-7>ul>li").mouseover(function(){
		$(this).css({"border-right":"1px solid #DDDDDD","border-left":"1px solid #DDDDDD"});
		$(this).children("a").css("background","none");
		$(this).children("ul").show();
		$(this).css("background","url(images/t_arrow_1.jpg)no-repeat 57px 15px");
//		$(this).children("span").show();
	})
	$(".mx2-7>ul>li").mouseout(function(){
//		$(this).children("span").hide();
		$(this).children("a").css("background","none");
		$(this).css({"border-right":"none","border-left":"none"});
		$(this).children("ul").hide();
		$(this).css("background","url(images/t_arrow.gif)no-repeat 61px 17px");
	})
	
	//小箭头
	$(".xjt").mouseover(function(){
		$(this).css("background","url(images/xjt_red.jpg)no-repeat 40px 14px");
//		background:url(images/xjt.jpg)no-repeat 45px 13px;
	}).mouseout(function(){
		$(this).css("background","url(images/xjt.jpg)no-repeat 45px 13px");
	})
	
	//上箭头
	$("#sjt").mouseover(function(){
		$(this).css("background","url(images/sjt_red.jpg)no-repeat 99px 12px");
	}).mouseout(function(){
		$(this).css("background","url(images/sjt.jpg)no-repeat 100px 13px");
	})
	//下箭头
	$("#xjt_x").mouseover(function(){
		$(this).css("background","url(images/xjt_x_red.jpg)no-repeat 99px 12px");
	}).mouseout(function(){
		$(this).css("background","url(images/xjt_x.jpg)no-repeat 98px 12px");
	})
	
		//价格方式
		$(".jg").mouseover(function(){
			$(this).next().show();
		})
		$(".peisong1 ul").mouseout(function(){
			$(this).hide();
		})
		
		//配送地
		$("#psd").mouseover(function(){
	//		alert(1)
			$(".peisongdizhi").toggle();
			$(".peisongdizhi").display="block";
			$(this).css("background","none");
		})
		$("#psd").mouseout(function(){
			$(".peisongdizhi").display="none";
			$(this).css("background","url(images/xj.jpg)no-repeat 89px 38px");
		})
		
		//	        地址
				$(".dizhi>.dizhiul>a").click(function(){
					$(this).css("background-color","#FFFFFF");
					$(this).css("border-bottom","none");
					$(this).siblings().css("background-color","#F8F8F8");
					$(this).siblings().css("border-bottom","1px solid #DDDDDD");
				})
				
	//	        详细地址--上海
				$(".shxx a").click(function(){
					$(this).css({"background":"#FF966E","color":"#FFFFFF"});
					$(this).siblings("a").css({"background":"#FFFFFF","color":"#000000"});
				})
	//	        静安区
				$(".jinganqu a").click(function(){
					$(this).css({"background":"#FF966E","color":"#FFFFFF"});
					$(this).siblings("a").css({"background":"#FFFFFF","color":"#000000"});
				})
				$(".shdk").click(function(){
					$(".peisongdizhi").show();
				})
				$(".guanbi").click(function(){
						$(".peisongdizhi").hide();
				})
	//购物车
	$(".gouwuche").mouseover(function(){
//		alert(1)
		$(this).children("ul").show();
//		$("#gwc").show();
	})
	$(".gouwuche").mouseout(function(){
		$(this).children("ul").hide();
//		$("#gwc").hide();
	})
//	购物车计算
//	计算1
	$(".jian1").click(function(){
		var jisuan1 = $(".jisuan1").val();
//		alert(jisuan1);
		var jisuan = jisuan1-1;
//		alert(jisuan);
		if(jisuan1==0){
			$(".jisuan1").val(0);
		}else{
			$(".jisuan1").val(jisuan);
		}
		var money = $(".jisuan1").val()*35;
//		alert(money);
		$(".money1").text('￥'+money);
	})
	$(".jia1").click(function(){
		var jisuan1 = $(".jisuan1").val();
		var jisuan = parseInt(jisuan1)+1;
		$(".jisuan1").val(jisuan);
		var money = $(".jisuan1").val()*35;
//		alert(money);
		$(".money1").text('￥'+money);
	})
//	计算2
	$(".jian2").click(function(){
		var jisuan2 = $(".jisuan2").val();
//		alert(jisuan1);
		var jisuan = jisuan2-1;
//		alert(jisuan);
		if(jisuan2==0){
			$(".jisuan2").val(0);
		}else{
			$(".jisuan2").val(jisuan);
		}
		var money = $(".jisuan2").val()*758;
//		alert(money);
		$(".money2").text('￥'+money);
	})
	$(".jia2").click(function(){
		var jisuan2 = $(".jisuan2").val();
		var jisuan = parseInt(jisuan2)+1;
		$(".jisuan2").val(jisuan);
		var money = $(".jisuan2").val()*758;
//		alert(money);
		$(".money2").text('￥'+money);
	})
//	计算3
	$(".jian3").click(function(){
		var jisuan3 = $(".jisuan3").val();
//		alert(jisuan1);
		var jisuan = jisuan3-1;
//		alert(jisuan);
		if(jisuan3==0){
			$(".jisuan3").val(0);
		}else{
			$(".jisuan3").val(jisuan);
		}
		var money = $(".jisuan3").val()*190;
//		alert(money);
		$(".money3").text('￥'+money);
	})
	$(".jia3").click(function(){
		var jisuan3 = $(".jisuan3").val();
		var jisuan = parseInt(jisuan3)+1;
		$(".jisuan3").val(jisuan);
		var money = $(".jisuan3").val()*190;
//		alert(money);
		$(".money1").text('￥'+money);
	})
//	购物车选项关闭
	$(".x1").click(function(){
		$("#gwc li").eq(0).css("display","none");
//		alert(1)
		if($("#gwc").height()==0){
			$("#gwc").css("border","none");
		}
	})
	$(".x2").click(function(){
		$("#gwc li").eq(1).css("display","none");
//		alert(1)
		if($("#gwc").height()==0){
			$("#gwc").css("border","none");
		}
	})
	$(".x3").click(function(){
		$("#gwc li").eq(2).css("display","none");
//		alert(1)
		if($("#gwc").height()==0){
			$("#gwc").css("border","none");
		}
	})
	
	$(".dtp .zhi1").click(function(){
		var zhi = $(this).siblings("input").val();
//		alert(zhi);
		zhi = parseInt(zhi)+1;
		$(this).siblings("input").val(zhi);
		$(this).siblings("button").css({"background":"#FFFFFF","color":"#000000"});
	})
	$(".dtp .zhi2").click(function(){
		var zhi = $(this).siblings("input").val();
		if(zhi==2){zhi=zhi-1;$(this).css({"background":"#FAFAFA","color":"#DDDDDD"});}
		if(zhi==1){$(this).css({"background":"#FAFAFA","color":"#DDDDDD"});zhi=1;}
		else{zhi = zhi - 1;$(this).css({"background":"#FFFFFF","color":"#000000"});}
		$(this).siblings("input").val(zhi);
	})
})

function tabshow1(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.dizhi .dizhiul a');
	var divs = document.querySelectorAll('.dizhi-content>div');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot';
			divs[i].className='';
		}
	}
}

//如果我们点击任何一个li标签，想知道当前点击的是第几个li标签，可以使用下面的代码：
//$("ul li").click(function () {
//  var index = $("ul li").index(this);
//  alert(index);
// });