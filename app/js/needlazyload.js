var needLazyLoad = (function(){
    let $el
    return {
        init(ele){
            $el = $(ele);
            this.getData();
        },
        getData(){
            $.getJSON("data/shopData.json", (data) => {
                this.setData(data)
                
            })
        },
        setData(data){
            data = data[0].data;
            this.setNewData(data[0]);
        },
        setNewData(data){
            console.log(data);
            console.log(data.a);
            console.log(data.shop[2][0]);
            let str1 = "",
            str2 = "",
            str3 = "",
            str4 ="";
            data.shop[2].forEach(x => {
                str4 += `
                <a href="" class="bursting">
                    <p class="bursting-font">${x.t}</p>
                    <p class="bkzj">${x.p}</p>
                    <img src="${x.bg}" alt="">
                </a>
                `
            });
            str3 = `
            <a href="" class="import-snacks">
                <p class="import-tit">${data.shop[0].h3}</p>
                <p class="voucher-tit">${data.shop[0].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[0].bg1}" alt="">
            </a>
            ${str4}
            <a href="" class="import-snacks">
                <p class="import-tit">${data.shop[1].h3}</p>
                <p class="voucher-tit">${data.shop[1].p}</p>
                <div class="buy-btn">点击进入</div>
                <img src="${data.shop[1].bg1}" alt="">
            </a>
            `;
            data.a.forEach(x => {
                str2 += `<a href="">${x}</a>`;
            });
            str1 = `
            <div class="wrap quality-imoport">
                <div class="qua-show">
                    <a href="" class="qua-tit">
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
                
            </div>
            `;
            console.log($el)
            $el.append(str1)
        },
        $1(ele){
            return document.createElement(ele);
        }
    }
}())

needLazyLoad.init("#needLazyLoad");