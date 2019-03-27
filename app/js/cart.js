$("footer").load("public.html .ft-wrap", function(){

})
$(".sale-prod").load("swiper.html .sale-prod-cont", function(){
    cartSwiper.init(".sale-prod-cont");
})

var Cart = (function(){
    let $el, $noneDataBox, $showDatabox;
    return {
        init(ele){
            $el = $(ele);
            // 获取没有数据展示的内容的盒子
            $noneDataBox = $el.find(".empty");
            // 获取展示数据的盒子
            $showDatabox = $el.find(".cart-wrap");
            this.event();
            // this.showDiv();
        },
        event(){
            
        },
        showDiv(){
            if(localStorage.data){
                $showDatabox.css("display", "block");
                $noneDataBox.css("display", "none");
            } else {
                $showDatabox.css("display", "none");
                $noneDataBox.css("display", "block");
            }
        }
    }
}())

Cart.init(".yhd-cart-content");