$("footer").load("public.html .ft-wrap", function(){

})
$(".sale-prod").load("swiper.html .sale-prod-cont", function(){
    cartSwiper.init(".sale-prod-cont");
})

var Cart = (function(){
    let $el, $noneDataBox, $showDatabox, $checked, $setCulBox,flag = false,n=1;
    return {
        init(ele){
            $el = $(ele);
            // 获取没有数据展示的内容的盒子
            $noneDataBox = $el.find(".empty");
            // 获取展示数据的盒子
            $showDatabox = $el.find(".cart-wrap");
            // 获取结算的盒子
            $setCulBox = $el.find(".settling-column-bar");

            this.event();
            // this.showDiv();
        },
        event(){
            $(".check-all").click(function(){
                if(flag){
                    flag = false;
                    $(".check").addClass("checked");
                } else {
                    flag = true;
                    $(".check").removeClass("checked");
                }
            })
            $(".cart-list").on("click", ".check", function(){
                const index  = $(this).index(".check");
                if(flag){
                    flag = false;
                    $(this).addClass("checked");
                    $(".check-all").addClass("checked");
                } else {
                    flag = true;
                    $(this).removeClass("checked");
                    $(".check-all").removeClass("checked");
                }
            })
            $(".minus").click(function(){
                if(n <= 1){
                    n = 1;
                    $(this).addClass("unable")
                } else {
                    n--
                    $(this).removeClass("unable")
                }
                $("#num").val(n)
            })
            $(".add").click(function(){
                n++
                $(".minus").removeClass("unable")
                $("#num").val(n)
            })
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