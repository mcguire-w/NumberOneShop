var ShopList = (function(){
    let $el,
    $ul,
    p = 110,
    shopData,
    shopList,
    data = [];
    arr = [["三只松鼠(Three Squirrels)", "维达(Vinda)", "农夫山泉", "妙洁(MIAOJIE)"],["清风", '苏菲', '雀巢','良品铺子']];
    return {
        init(ele){
            $el = $(ele);
            $ul = $el.find(".under-sp-list");
            this.getData();
        },
        event(){
            const self = this
            $(".item-cart").click(function(){
                const index = $(this).index(".item-cart");
                self.setCarData(shopData[index % 4]);
                $(".hd-c-num").css("display","block");
                $(".hd-c-num").text(shopList.length)
            })
        },
        setCarData(data) {
            // 获取原有数据
            shopList = localStorage.shopList || '[]';
            // 存储到本地数据
            shopList = JSON.parse(shopList);
            var flag = true;
            // 添加数据分两种情况
            for(var i = 0; i < shopList.length; i++) {
                shopList[i].num = 1;                                                                                                                                                    
                if(shopList[i].id == data.id) {
                    // 数据已存在,  相当于count进行累加
                    flag = false;
                    break;
                }
            }
            if(flag){
                // 把数据添加到数组中
                shopList.push(data);
            }
            // 替换原有数据
            localStorage.shopList = JSON.stringify(shopList);
        },
        getData(){
            $.getJSON("data/data.json", (data) => {
                shopData = data[0].data;
                let n = 0;
                for(var i = 0; i < 15; i++){
                    if(i === 3 || i === 8){
                        this.setPinPai(arr[n]);
                        n ++
                        continue;
                    }
                    this.setData(data);
                }
                this.event();
            })
        },
        setData(data){
            data = data[0].data;
            data.forEach(x => {
                x.num = x.num ? x.num : 1;
                str = `
                <li class="under-list-single" attr-id="${x.id}">
                    <div class="under-pro-pic">
                        <img src="images/pic_${p}.jpg" alt="${x.bn}" class="sin-img">
                    </div>
                    <div class="sp-text">
                        <p class="single-tit text-limit-limp">
                            <span>自营</span>
                            ${x.t}
                        </p>
                        <p class="single-money">
                            ￥
                            <span>${x.jp}</span>
                        </p>
                        <div class="pro-tag clearfix">
                            <div class="goods-icon">满减</div>
                        </div>
                    </div>
                    <div class="sing-btn-con">
                        <div class="sin-hover-btn sin-gw">
                            <a class="sin-hover-btn-a item-cart" href="javascript:;">
                                <i class="iconfont icon-tianjiagouwuche"></i>
                            </a>
                        </div>
                        <div class="sin-hover-btn sin-xs">
                            <a class="sin-hover-btn-a" href="">
                                相似
                            </a>
                        </div>
                    </div>
                    <a href="xiangqing1.html" class="border-line"></a>
                </li>
                `
                $ul.append(str);
                p++
            });
        },
        setPinPai(arr){
            let s = '';
            arr.forEach(x =>{
                const s1 = `
                    <div class="under-list-pinpai-imgCon">
                        <img class="under-list-pinpai-hover-img img-w" src="images/pic_${p}.jpg" alt="">
                        <a class="under-list-pinpai-hover" href="">
                            <p>${x}</p>
                        </a>
                    </div>
                `
                s += s1
                p ++;
            })
            const str = `
            <li class="under-list-pinpai">
                <p class="under-pinpai-font">
                    <span class="under-pinpai-font-lLine"></span>
                    <span class="jxpp">精选品牌</span>
                    <span class="under-pinpai-font-rLine"></span>
                </p>
                ${s}
                <span class="under-list-xt under-list-hx"></span>
                <span class="under-list-xt under-list-sx"></span>
            </li>
            `
            $ul.append(str);

        }
    }
}())

