var ShopList = (function(){
    let $el,
    $ul,
    p = 110,
    arr = [["三只松鼠(Three Squirrels)", "维达(Vinda)", "农夫山泉", "妙洁(MIAOJIE)"],["清风", '苏菲', '雀巢','良品铺子']];
    return {
        init(ele){
            $el = $(ele);
            $ul = $el.find(".under-sp-list");
            this.getData();
        },
        event(){

        },
        getData(){
            $.getJSON("data/data.json", (data) => {
                let n = 0;
                for(var i = 0; i < 15; i++){
                    if(i === 3 || i === 8){
                        this.setPinPai(arr[n]);
                        n ++
                        continue;
                    }
                    this.setData(data);
                }
            })
        },
        setData(data){
            data = data[0].data;
            data.forEach(x => {
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
                            <a class="sin-hover-btn-a item-cart" href="">
                                <i class="iconfont icon-tianjiagouwuche"></i>
                            </a>
                        </div>
                        <div class="sin-hover-btn sin-xs">
                            <a class="sin-hover-btn-a" href="">
                                相似
                            </a>
                        </div>
                    </div>
                    <a href="" class="border-line"></a>
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

