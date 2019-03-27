$(".header").load("public.html .header-wrap",function(){
	memu.init(".header-wrap");
    Search.init(".hd-header-right");
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
			$(this).toggleClass("orange");
		},function(){
			$(this).children('.datu').hide();
			$(this).toggleClass("orange");//再次调用实现隐藏
		});
		//上边左侧图片
//			var liW = $('.xg-num-num div').outerWidth(true)
			var len = $('.xg-num-num div').length
//			alert(len)
//			$('.xg-num-num').css("width",liW*len)
			var flag = true
			var num = 0;
//			左侧
			$(".xg-num-left").click(function(){
				if(flag){
					flag = false
					$('.xg-num-num').find("div").eq(len-1).prependTo($('.xg-num-num'))
					$('.xg-num-num').css({"marginLeft":-70}).queue(function(){
						$('.xg-num-num').animate({"marginLeft":0})
						flag = true
						$(this).dequeue();
					})
				}
				num = num-1;
			})
//			右侧
			$(".xg-num-right").click(function(){
				if(flag){
					flag = false
					$('.xg-num-num').animate({"marginLeft":-70}).queue(function(){
						$('.xg-num-num').find("div").eq(0).appendTo($('.xg-num-num'))
						$('.xg-num-num').css({"marginLeft":0})
						flag = true
						$(this).dequeue();
					})
				}
				num = num+1;
			})
			var big =0;
			//小图控制大图
			$(".xg-num-num div").mouseover(function(){
				var index = $(".xg-num-num div").index(this);
//				var index2 = $(".xg-num-num div").length;
				if(num<0){num=num+7}
				var index1 = index+num;
				index1 = index1%7;
				big = index1;
//				alert(index1)
//				alert(index2)
				$(".xg-img div").eq(index1).show();
				$(".xg-img div").eq(index1).siblings().hide();
				$(".big div").eq(index1).removeClass("slide-img-hidden");
				$(".big div").eq(index1).siblings().addClass("slide-img-hidden");
			})

			$(".ggcs a").click(function(){
				$(".detail3-1>ul").children("li").eq(0).removeClass('hot');
				$(".detail3-1>ul").children("li").eq(2).addClass('hot');
				$(".detail3-2").children("div").eq(0).addClass('detail3-1-content-display');
				$(".detail3-2").children("div").eq(2).removeClass('detail3-1-content-display');
			})
			
			$("#zk").click(function(){
				$(this).next().show();
			})
			
			$("#gb").click(function(){
				$(".xg-r3>ul").hide();
			})
			
			
			
			// 绑定鼠标移入原图窗口事件
	        $('.xg-img').mouseover(function(e){
	                $('.big').css('display','block');
	                $('.tool').css('display','block');
	        })
			
			$('.xg-img').mousemove(function(e){
//				获取鼠标位置
//				var x = e.clientX;
//				var y = e.clientY;
				var x = e.pageX;
				var y = e.pageY;
//				console.log(x);
//				console.log(y);
				// 获取原图窗口距离文档的偏移位置
				var sX=$('.xg-img').offset().left;
				var sY=$('.xg-img').offset().top;
//				console.log(sX);
//				console.log(sY);
				// 计算鼠标的相对位置（相对于body的偏移距离）
				var mx=x-sX;
				var my=y-sY;
//				console.log(mx)
//				console.log(my)

				// 获取小框框的宽高
                var mw=$('.tool').width()/2;
                var mh=$('.tool').height()/2;
                
                // 鼠标移动后小框框的移动距离
                $('.tool').css({left:mx-mw+'px',top:my-mh+'px'});
                
                // 获取小框框的偏移位置
                    var lw=$('.tool').position().left;
                    var lh=$('.tool').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('.xg-img').width()-$('.tool').width()
                    var maxH=$('.xg-img').height()-$('.tool').height()
                    // 左边界
                    if(lw<=0){$('.tool').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('.tool').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('.tool').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('.tool').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置
                    var lw=$('.tool').position().left;
                    var lh=$('.tool').position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                    var newX=lw*2.5;
                    var newY=lh*2.5;
                $('.big img').css({left:-newX+'px',top:-newY+'px'});
//              var bigd = $("big img");
//              alert(bigd.length)
			})
			
			//绑定鼠标离开原图窗口事件
	        $('.xg-img').mouseout(function(){
	                $('.big').css('display','none');
	                $('.tool').css('display','none');
	        })
	        
//	        地址
	        $(".dizhi>ul>li").click(function(){
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
			
//			加减计算
			$(".jia").click(function(){
				var zhi = $(".jisuan").val();
				zhi = parseInt(zhi) + 1;
				$(".jisuan").val(zhi);
				$(".jian").css("background","#FFFFFF");
			})
			$(".jian").click(function(){
				var zhi = $(".jisuan").val();
				if(zhi==2){zhi=zhi-1;$(this).css("background","#DDDDDD");}
				if(zhi==1){$(this).css("background","#DDDDDD");zhi=1;}
				else{zhi = zhi - 1;$(this).css("background","#FFFFFF");}
				$(".jisuan").val(zhi);
			})
			
			$(".huanyipi").click(function(){
				var random = Math.floor(Math.random()*3+1);
//				alert(random);
				if(random==1){
					$(".random1").show();
					$(".random2").hide();
					$(".random3").hide();
				}
				if(random==2){
					$(".random2").show();
					$(".random1").hide();
					$(".random3").hide();
				}
				if(random==3){
					$(".random3").show();
					$(".random2").hide();
					$(".random1").hide();
				}
			})
			
//			评价
			$(".pinglun ul li").click(function(){
				$(this).children("a").css("color","#FF0000");
				$(this).siblings().children("a").css("color","#000000");
				$(this).children("input").css("display","none");
				$(this).children("img").css("display","block");
				$(this).siblings().children("input").css("display","block");
				$(this).siblings().children("input").removeAttr("checked");
				$(this).siblings().children("img").css("display","none");
				$(this).css("border-bottom","2px solid #FF0000");
				$(this).siblings().css("border-bottom","none");
			})
})

function tabshowad(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.detail3-1 ul li');
	var divs = document.querySelectorAll('.detail3-2>div');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='detail3-1-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot';
			divs[i].className='';
		}
	}
}

function tabshow1(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.dizhi ul li');
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

////放大镜效果
//			$('.xg-img').mousemove(function(e){
//		     	 // 获取鼠标当前的位置
//              var x=e.clientX;
//              alert(x)
////82
//              var y=e.clientY;
////              console.log(y)
//              alert(y)
////264
//              // 获取原图窗口距离文档body的偏移位置
//              var sX=$('.xg-img').offset().left;
////              alert(sX)101.5
//              var sY=$('.xg-img').offset().top;
////              alert(sY);264
//              // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
//              var mx=x-sX;
////              alert(mx)-19.5
////				console.log(mx)
//              var my=y-sY;
////              console.log(my)
////              alert(my)0
//              // 获取小框框的宽高
//              var mw=$('.tool').width()/2;
//              var mh=$('.tool').height()/2;
////              alert(mw);100
////              alert(mh);100
//              // 鼠标移动后小框框的移动距离
//              $('.tool').css({left:mx-mw+'px',top:my-mh+'px'});
//
//          // 获取小框框的偏移位置
//              var lw=$('.tool').position().left;
////              alert(lw);-116.5
//              var lh=$('.tool').position().top;
////              alert(lh);-99
//              
//          // 判断边界（小框框只能在原图窗口范围内移动）
//                  var maxW=$('.xg-img').width()-$('.tool').width()
////                  alert(maxW)200
//                  var maxH=$('.xg-img').height()-$('.tool').height()
////                  alert(maxH)200
//                  // 左边界
//                  if(lw<=0){$('.tool').css('left','0px');}
//                  // 右边界
//                  if(lw>=maxW){
//                      $('.tool').css('left',maxW+'px');
//                  }
//                  // 上边界
//                  if(lh<=0){$('.tool').css('top','0px');}
//                  // 下边界
//                  if(lh>=maxH){
//                      $('.tool').css('top',maxH+'px');
//                  }
//
//                  // 获取小框框的偏移位置
//                  var lw=$('.tool').position().left;
//                  var lh=$('.tool').position().top;
//              // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
//                  var newX=lw*2.5;
//                  var newY=lh*2.5;
//              	$('.big img').css({left:-newX+'px',top:-newY+'px'});
//		  	})