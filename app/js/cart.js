$("footer").load("public.html .ft-wrap", function(){

})
$(".sale-prod").load("swiper.html .sale-prod-cont", function(){
    cartSwiper.init(".sale-prod-cont");
})

var Cart = (function(){
    let $el, $noneDataBox, $showDatabox,showBox, $checked, $setCulBox,flag = false,showData;
    return {
        init(ele){
            $el = $(ele);
            // 获取没有数据展示的内容的盒子
            $noneDataBox = $el.find(".empty");
            // 获取展示数据的盒子
            $showDatabox = $el.find(".cart-wrap");
            // 设置数据的盒子
            $showBox =  $showDatabox.find(".cart-item");
            // 获取结算的盒子
            $setCulBox = $el.find(".settling-column-bar");
            this.getData();
            // 获取所有的li
            $showLi = $showBox.find(".item");
            this.event();
            // this.showDiv();
        },
        event(){
            const _this = this;
            $showBox.on("click",".del-btn",function(){
                var self = $(this)
                var index = self.index('.del-btn');
                shopData.splice(index, 1);
                _this.setShopData(shopData);
                _this.setCarData();
            })
            $showLi.click(function(){
                return function(){
                        var n = 1
                        $showLi.on("click", ".minus", function(){
                            const inp = $(this).siblings("#num");
                            if(n <= 1){
                                n = 1;
                                $(this).addClass("unable");
                            } else {
                                n--
                                $(this).removeClass("unable");
                            }
                        })
                    }
                
            })
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
        },
        setCarData() {
            localStorage.shopList = JSON.stringify(shopData);
        },
        getData(){
            var data = localStorage.shopList || '[]';
            this.setShopData(JSON.parse(data));
        },
        setShopData(data){
            $showBox.html('');
            shopData = data;
            data.forEach(x => {
                const str = `
                <li class="item item-line main-item clearfix">
                    <div class="cart-prod clearfix">
                        <a href="javascript:;" class="check check-item checked">
                            <i></i>
                        </a>
                        <a href="" class="item-pic">
                            <img src="${x.url}" alt="">
                        </a>
                        <a href="" class="item-tit">${x.t}
                        </a>
                        <div class="item-price">
                            <p>${x.jp}</p>
                        </div>
                        <div class="item-num">
                            <div class="num-act clearfix">
                                <a href="javascript:;" class="minus unable">-</a>
                                <input type="text" name="" id="num" value="1">
                                <a href="javascript:;" class="add">+</a>
                            </div>
                            <span class="stock partial limit"></span>
                            <span class="stock"></span>
                        </div>
                        <div class="item-amount">
                            <div class="item-a-money"></div>
                            <div class="item-a-weight">0.2kg</div>
                        </div>
                        <div class="item-act">
                            <a class="collect-btn" href="javascript:;">
                                <i class="iconfont icon-guanzhu"></i>
                            </a>
                            <a class="del-btn" href="javascript:;">
                                <i class="iconfont icon--"></i>
                            </a>
                        </div>
                    </div>
                </li>
                `
                $showBox.append(str);
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