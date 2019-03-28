
var memu = (function () {
    let $el, $setel, str3 = '', str2 = '', str1 = '';
    return {
        init(ele) {
            $el = $(ele);
            $setel = $el.find(".header-bp .catrgory-list");
            $.getJSON("data/singleshop.json", (data) => {
                this.insertData(data[0]);
            })
        },
        event() {
            const self = this;

        },
        insertData(data) {
            data = data.menudata;
            data.forEach(x => {
                x.forEach(y => {
                    y.text.forEach(z => {
                        const s1 = `
                        <li class="text">
                            <a href="">${z}</a>
                        </li>
                        `
                        str1 += s1;
                    })
                    s2 = `
                    <div class="category-item">
                        <div class="inner">
                            <p class="title">
                                <a href="">${y.p}</a>
                            </p>
                        </div>
                        <ul>
                            ${str1}
                        </ul>
                    </div>
                    `
                    str2 += s2;
                    str1 = '';
                })
                str3 = `
                <div class="column-item">
                ${str2}
                </div>
                `
                $setel.append(str3);
                str2 = ""
            })
        }
    }
}());
var Search = (function () {
    let $ele, $ul, $input, timer;
    return {
        init(ele) {
            $ele = $(ele);
            $input = $ele.find(".hd-search-inp");
            $box = $ele.find(".hd-search-tips");
            $ul = $ele.find(".hd-search-tips-list");
            this.event()
        },
        event() {
            const self = this;
            $input.on("focus", function () {
                $box.css("display", "block");
            })

            $input.on("click", function (e) {
                e = e || window.event;
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = ture;
            })
            $input.on("input", function () {
                if ($input.val().trim() == "") {
                    $box.css("display", "none");
                } else {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        self.sendJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
                            wd: $(this).val(),
                            cb: "Search.insetData"
                        })
                        $box.css("display", "block");
                    }, 500);
                }
            })
            $(document).on("click", function () {
                $box.css("display", "none");
            })
            $box.on("click", "li", function (e) {
                $input.val($(this).find("a").text())
            })
        },
        insetData(data) {
            console.log(data)
            $ul.html("");
            data.s.forEach(x => {
                const $li = `<li class="item"><a class="hd-item" href="">${x}</a></li>`;
                $ul.append($li);
            })
        },
        sendJsonp(url, data) {
            // 根据data拼接url
            for (let attr in data) {
                url += `&${attr}=${data[attr]}`;
            }
            url += "&_=" + Date.now();
            if (!url.includes("?")) {
                url = url.replace("&", "?");
            }
            const $script = `<script src=${url}></script>`
            $("body").append($script);
        }
    }
}())
var showcookie = (function () {

    return {
        init() {
 
            this.setShowName()
            this.event()
        },
        event() {
            const _this = this;
            //点击退出时，清空cookie
            $('login-out').click(function () {
                // _this.clearAllCookie();
                document.cookie = `${username}=${''}; path=/; `+`max-age=${-1};`
                window.location.reload();
            })
        },
        //得到cookie的值选择展示的板块
        setShowName() {
            let name = this.getCookie('username')
            if (name != '') {
                $('.global-unlogin').css('display', 'none');
                $('.global-login').css('display', 'block')
                $('.username').html(name);
            }
        },
        //清除所有cookie
        // clearAllCookie() {
        //     var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        //     if (keys) {
        //         for (var i = keys.length; i--;)
        //             document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        //     }
        // },
        //清除所有cookie
        clearAllCookie() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            }
            if (cookies.length > 0) {
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    var domain = location.host.substr(location.host.indexOf('.'));
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
                }
            }
        },
        //获取cookie的值
        getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }
    }
}())
