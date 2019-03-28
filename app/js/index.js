
$("header").load("public.html .header-wrap", function () {
    memu.init(".header-wrap");
    Search.init(".hd-header-right");
    showcookie.init('.header-wrap');
})
$("footer").load("public.html .ft-wrap", function () {

})
$(".banner").load("swiper.html .swiper-container", function () {
    $('.swiper-container').swiper();
})
$(".like").load("needlazyload.html #needLazyLoad", function () {
    needLazyLoad.init("#needLazyLoad");
})
$(".like").load("shoplist.html .mod-you-like", function () {
    ShopList.init(".mod-you-like");
})


var Single = (function () {
    let $el, $getel, $time, time = '2019-';
    return {
        init(ele) {
            $el = $(ele);
            $getel = $el.find(".superSingle ul");
            $time = $el.find(".count-time span");
            this.event();
            this.getData();
        },
        event() {
            setInterval(this.setTime, 1000);
            var date = new Date();
            var day = date.getDate(),
                mon = date.getMonth() + 1,
                hours = date.getHours();
            time += mon + "-" + day + " " + (hours + 2) + ":00:00";
            //鼠标滑动,
            $(document).on('scroll', function () {
                if (document.documentElement.scrollTop > 700) {
                    let max = document.documentElement.scrollTop - 680;
                    $('.happy-summer').css('top', max + 'px')
                    $('.hd_search_fixed').css('display','block')
                }else{
                    $('.happy-summer').css('top', 0)
                    $('.hd_search_fixed').css('display','none')
                }
                if(document.documentElement.scrollTop > 2400){
                    $('.h-zd').css('display','block')
                }else{
                    $('.h-zd').css('display','none')
                }
            })
            $('.h-zd').click(function(){
                
                $(document.documentElement).animate({'scrollTop':0},500)
            })
        },
        setTime() {
            var oDate = new Date();//获取日期对象
            var oldTime = oDate.getTime();//现在距离1970年的毫秒数
            var newDate = new Date(time);
            var newTime = newDate.getTime();//2019年距离1970年的毫秒数
            var second = Math.floor((newTime - oldTime) / 1000);//未来时间距离现在的秒数
            // var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
            second = second % 86400;//余数代表剩下的秒数；
            var hour = Math.floor(second / 3600);//整数部分代表小时；
            second %= 3600; //余数代表 剩下的秒数；
            var minute = Math.floor(second / 60);
            second %= 60;
            if (parseInt(hour / 10) == 0) {
                hour = '0' + hour
            }
            if (parseInt(minute / 10) == 0) {
                minute = '0' + minute
            }
            if (parseInt(second / 10) == 0) {
                second = '0' + second
            }
            $($time[0]).text(hour);
            $($time[1]).text(minute);
            $($time[2]).text(second);
        },
        getData() {
            $.getJSON("data/singleshop.json", (data) => {
                this.setData(data[0]);
            })
        },
        setData(data) {
            data = data.data;
            data.forEach(x => {
                const str = `
                <li>
                    <a href="" class="superSingle-a">
                        <div class="single-top">
                            <div class="s-bz"></div>
                            <img class="single-top-img" src="${x.url}" alt="">
                        </div>
                        <div class="single-bottom">
                            <div class="s-title">${x.title}</div>
                            <div class="s-bar">
                                <div class="s-progress" style="width:${x.width}%"></div>
                            </div>
                            <div class="s-con">
                                <div class="s-num">
                                    <span class="s-num-unit">￥</span>
                                    <span class="s-num-act">${x.price}</span>
                                    <span class="s-num-underline">
                                        <span class="s-num-unit">￥</span>
                                        <span class="s-num-line">${x.jdPrice}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                `
                $getel.append(str);
            })
        },

    }
}())

Single.init(".single-con");