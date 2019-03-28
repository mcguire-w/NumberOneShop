var needLazyLoad = (function(){
    let $el,$btnBox,showIndex = 0;
    return {
        init(ele){
            $el = $(ele);
            $(".qua-top-left-btn").addClass("qua-top-btn-forbid");
            this.getData();
        },
        event(){
            const self = this;
            $btnBox = $el.find(".quality-imoport")

            $btnBox.on("click",".qua-top-left-btn",function(){
                const s = $(this).parents()[0],
                i = $(s).index(".qua-top");

                // .children(".qua-top-slideInner")
                self.play(--showIndex, i);
            })
            $btnBox.on("click",".qua-top-right-btn",function(){
                const s = $(this).parents()[0],
                i = $(s).index(".qua-top");
                self.play(++showIndex, i);
            })
            $btnBox.on("click",".qua-brand-left-btn",function(){
                $(".imgbox").stop().animate({
                    "margin-left": 0,
                },500);
            })
            $btnBox.on("click",".qua-brand-right-btn",function(){
                $(".imgbox").stop().animate({
                    "margin-left": "-1064px",
                },500);
            })
        },
        play(index, i){
            $(".qua-top-left-btn").removeClass("qua-top-btn-forbid");
            $(".qua-top-right-btn").removeClass("qua-top-btn-forbid");
            let left = 0
            if(index < 0){
                index = 0;
                
            } else if(index > 2){
                index = 2;
            }
            showIndex = index;
            switch(index){
                case 0: left = 10;$(".qua-top-left-btn").addClass("qua-top-btn-forbid");break;
                case 1: left = -200;break;
                case 2: left = -410;$(".qua-top-right-btn").addClass("qua-top-btn-forbid");break;
            }
            $($(".qua-top-slideInner")[i]).stop().animate({
                left: left +"px"
            });
        },
        getData(){
            $.getJSON("data/shopData.json", (data) => {
                this.setData(data);
                this.event();
            })
        },
        setData(data){
            data = data[0].data;
            this.setNewData(data[0]);
            for(var i = 1,len = data.length; i < len; i++){
                this.setShopdata(data[i]);
            }

        },
        setShopdata(data){
            let str1 = "",
            str2 = "",
            str3 = "",
            str5 = "",
            str4 ="";
            data.shop[2].forEach(x => {
                str4 += `
                <a href="xiangqing1.html" class="bursting">
                    <p class="bursting-font">${x.t}</p>
                    <p class="bkzj">${x.pic}</p>
                    <img src="${x.bg}" alt="">
                </a>
                `
            });
            str3 = `
            <a href="xiangqing1.html" class="import-snacks">
                <p class="import-tit">${data.shop[0].h3}</p>
                <p class="voucher-tit">${data.shop[0].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[0].bg1}" alt="">
            </a>
            ${str4}
            <a href="xiangqing1.html" target="_brank" class="import-snacks">
                <p class="import-tit">${data.shop[1].h3}</p>
                <p class="voucher-tit">${data.shop[1].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[1].bg1}" alt="">
            </a>
            `;
            data.a.forEach(x => {
                str2 += `<a href="xiangqing1.html">${x}</a>`;
            });
            data.top.imgdata.forEach((x,index) => {
                let s = "", st ="";
                x.forEach((x,index) => {
                    s +=  `
                    <a href="xiangqing1.html" target="_brank">
                        <li class="qua-top-imgCon">
                            <div class="qua-imgCon-font">TOP${index+1}</div>
                            <img src="${x}" alt="">
                        </li>
                    </a>
                    `
                });
                st = `
                <ul class="qua-top-slideCon-ul" data-index="${index}">${s}</ul>
                `;
                str5 += st;
            });
            str1 = `
            <div class="wrap quality-imoport eat-all-word">
                <div class="qua-show">
                    <a href="xiangqing1.html" target="_brank" class="qua-tit">
                        <span class="qua-tit-top" style="color:#b77347">${data.h2}</span>
                        <span class="qua-tit-spanLast" style="color: rgba(183,115,71,0.7);">/ ${data.small}</span>
                    </a>
                    <div class="qua-show-con">
                        <img class="qua-show-con-left" src="${data.bg}" alt="">
                        <div class="qua-left-font-con">
                            ${str2}
                        </div>
                        <div class="qua-show-con-right">
                            ${str3}
                        </div>
                    </div>
                </div>
                <div class="qua-top">
                    <img class="qua-paihang" src="images/pic_043.png" alt="">
                    <p class="qua-top-font">${data.top.h3txt[0]}</p>
                    <p>${data.top.h3txt[1]}</p>
                    <div class="qua-top-slideCon">
                        <div class="qua-top-slideInner" style="width: 1000px; height: 100%;">
                           ${str5}
                        </div>
                    </div>
                    <span class="qua-top-btn qua-top-left-btn">
                        <i class="iconfont icon-xiaoyu"></i>
                    </span>
                    <span class="qua-top-btn qua-top-right-btn">
                        <i class="iconfont icon-dayu"></i>
                    </span>
                </div>
            </div>
            `;
            $el.append(str1)
        },
        setNewData(data){
            let str1 = "",
            str2 = "",
            str3 = "",
            str5 = "",
            str6 = "",
            str4 ="";
            data.shop[2].forEach(x => {
                str4 += `
                <a href="xiangqing1.html" target="_brank" class="bursting">
                    <p class="bursting-font">${x.t}</p>
                    <p class="bkzj">${x.p}</p>
                    <img src="${x.bg}" alt="">
                </a>
                `
            });
            str3 = `
            <a href="xiangqing1.html" target="_brank" class="import-snacks">
                <p class="import-tit">${data.shop[0].h3}</p>
                <p class="voucher-tit">${data.shop[0].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[0].bg1}" alt="">
            </a>
            ${str4}
            <a href="xiangqing1.html" target="_brank" class="import-snacks">
                <p class="import-tit">${data.shop[1].h3}</p>
                <p class="voucher-tit">${data.shop[1].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[1].bg1}" alt="">
            </a>
            `;
            data.a.forEach(x => {
                str2 += `<a href="xiangqing1.html">${x}</a>`;
            });
            data.top.imgdata.forEach((x,index) => {
                let s = "", st ="";
                x.forEach((x,index) => {
                    s +=  `
                    <a href="xiangqing1.html" target="_brank">
                        <li class="qua-top-imgCon">
                            <div class="qua-imgCon-font">TOP${index+1}</div>
                            <img src="${x}" alt="">
                        </li>
                    </a>
                    `
                });
                st = `
                <ul class="qua-top-slideCon-ul" data-index="${index}">${s}</ul>
                `;
                str5 += st;
            });
            let num = 53;
            data.linkdata.forEach(x => {
                str6 += `
                <li class="qua-brand-img">
                    <a href="xiangqing1.html" target="_brank">
                        <img src="images/pic_0${num}.jpg" alt="">
                        <div class="qua-brand-img-hover">
                        </div>
                        <p class="qua-brand-img-hover-name text-limit">${x.name}</p>
                        <p class="qua-brand-img-hover-lyd text-limit">
                            <span class="qua-brand-hover-leftLine"></span>
                            ${x.lyd}
                            <span class="qua-brand-hover-rightLine"></span>
                        </p>
                    </a>
                </li>
                `
                if(num >= 60){
                    num = 52
                }
                num++;
                
            });


            str1 = `
            <div class="wrap quality-imoport">
                <div class="qua-show">
                    <a href="xiangqing1.html" class="qua-tit">
                        <span class="qua-tit-top" style="color:#b77347">${data.h2}</span>
                        <span class="qua-tit-spanLast" style="color: rgba(183,115,71,0.7);">/ ${data.small}</span>
                    </a>
                    <div class="qua-show-con">
                        <img class="qua-show-con-left" src="${data.bg}" alt="">
                        <div class="qua-left-font-con">
                            ${str2}
                        </div>
                        <div class="qua-show-con-right">
                            ${str3}
                        </div>
                    </div>
                </div>
                <div class="qua-top">
                    <img class="qua-paihang" src="images/pic_043.png" alt="">
                    <p class="qua-top-font">${data.top.h3txt[0]}</p>
                    <p>${data.top.h3txt[1]}</p>
                    <div class="qua-top-slideCon">
                        <div class="qua-top-slideInner" style="width: 1000px; height: 100%;">
                           ${str5}
                        </div>
                    </div>
                    <span class="qua-top-btn qua-top-left-btn">
                        <i class="iconfont icon-xiaoyu"></i>
                    </span>
                    <span class="qua-top-btn qua-top-right-btn">
                        <i class="iconfont icon-dayu"></i>
                    </span>
                </div>
                <div style="clear:both"></div>
                <div class="qua-brand">
                    <div class="qua-brand-btn qua-brand-left-btn">
                        <i class="iconfont icon-xiaoyu"></i>
                    </div>
                    <div class="qua-brand-img-con">
                        <ul class="imgbox">
                            ${str6}
                        </ul>
                    </div>
                    <div class="qua-brand-btn qua-brand-right-btn">
                        <i class="iconfont icon-dayu"></i>
                    </div>
                </div>
            </div>
            `;
            $el.append(str1)
        }
    }
}())
