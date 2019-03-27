var swiper = (function () {
    let $imageBox,
    $imageBoxItem,
    $tipsBox,
    $tipsItem,
    $el,
    $imgAll,
    showImageIndex = 0,
    timer = null;

    return {
        init($ele) {
            // children
            $el = $ele;
            $imageBox = $el.children('.swiper-wrapper');
            $imageBoxItem = $imageBox.children('li');
            $imgAll = $imageBoxItem.find(".img");
            this.setImg($imgAll);
            $tipsBox = $el.children('.swiper-tab');
            $tipsItem = $tipsBox.find('.swiper-cur');
            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('mouseenter', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay();
            })
            $imageBox.hover(function(){
                clearInterval(timer);
            },function(){
                _this.autoPlay();
            })

        },
        setImg(all){
            [...all].forEach((x,index) => {
                $(x).css({
                    "background-image": "url(images/banner_"+ (index + 1) +".jpg)"
                })
            })
        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if(index < 0) {
                index = maxIndex;
                // this.show(index);
            } else if(index > maxIndex) {
                index = 0;
                // this.show(index);
            }
            showImageIndex = index;
            $imageBoxItem.removeClass("active").eq(index).addClass("active");
            $tipsItem.removeClass("active").eq(index).addClass("active");
            

    
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 3000)
        }
    }
}())

$.fn.extend({
    swiper: function () {
        // 获取dom对象
        swiper.init(this);
    }
})

var cartSwiper = (function(){
    let $el,
    $ul,
    $box,
    $leftbtn,
    $rightbtn,
    $tipsbox,
    $tipsItem,
    num = 20,
    showIndex = 0;
    width = 0;
    return {
        init(ele){
            $el = $(ele);
            $ul = $el.find('.sale-scroll-ul');
            $box = $el.find('.sale-scroll-box');
            $tipsbox = $el.find(".view-dot");
            $tipsItem = $tipsbox.find("span");
            width = 222 * (num / $tipsItem.length)
            $leftbtn = $el.find(".left-arrow")
            $rightbtn = $el.find(".right-arrow");
            console.log(width)
            // console.log($box,$tips,$tipsItem,$leftbtn, $rightbtn);
            $ul.css({
                width: 222 * num + 'px'
            })
            this.getData()
            this.event();
        },
        getData(){
            $.getJSON("data/data.json",(data) => {
                for(var i = 0; i < num ;i ++){
                    this.setData(data[0])
                }
            })
        },
        event(){
            const self = this
            $tipsbox.on('click', 'span', function () {
                var index = $(this).index();
                self.showImage(index);
            })
            $leftbtn.click(function(){
                self.showImage(--showIndex);
            })
            $rightbtn.click(function(){
                console.log(showIndex)
                self.showImage(++showIndex);
            })
            // $(document).resize(function(){
            //     if($(document).innerwidth() == 1070){
            //         $el.css("width", 980);
            //         num = 16;
            //         $ul.text("");
            //         self.getData();
            //     }
            // })
        },
        showImage(index) {
            var maxIndex = $tipsItem.length - 1
            if(index < 0) {
                index = 0;
            } else if(index > maxIndex) {
                index = maxIndex;
            }
            showIndex = index
            $tipsItem.removeClass("cur").eq(index).addClass("cur");
            $ul.stop().animate({
                left: - index * width + "px"
            }, 1000)
        },
        setData(data){
            let str = "", s = "";
            data = data.data;
            for(var i = 0; i < 2; i++){
                const s1 = `
                <dl class="sale-item">
                    <dt class="prod-img">
                        <a href="" target="_brank">
                            <img src="${data[i].url}" alt="">
                        </a>
                    </dt>
                    <dd class="prod-info">
                        <p class="p-price">
                            ￥
                            <b>${data[i].jp}</b>
                        </p>
                        <p class="p-tit">
                            <a href="" target="_brank">
                            ${data[i].t}
                            </a>
                        </p>
                    </dd>
                </dl>
                `
                s += s1
            }
            str = `
            <li>${s}</li>
            `
            $ul.append(str);
        }
    }
}())

