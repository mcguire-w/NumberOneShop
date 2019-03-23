var swiper = (function () {
    let $imageBox,
    $imageBoxItem,
    $imageWidth,
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
            $tipsBox.on('click', 'li', function () {
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
                console.log($(x));
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
