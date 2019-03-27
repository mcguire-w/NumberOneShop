
var login = (function () {
    let $agreement = 0, $fold = 0, $liAll, $autotime
    return {
        init() {

            $liAll = $('.more_landing  li')
            this.event();
            this.autoOver()
        },
        event() {
            const _this = this;
            //自动登入换图片
            $('#check_agreement').click(function () {
                if ($agreement === 0) {
                    $(this).attr('class', "check_agreement")
                    $agreement = 1;
                } else if ($agreement === 1) {
                    $(this).attr('class', "uncheck_agreement")
                    $agreement = 0;
                }
            })
            //点击登入按钮
            $('#login_button').click(function () {
                _this.query()
            })
            //跟多网站展示
            $('#fold').click(function () {
                if ($agreement === 0) {
                    $(this).addClass("fold")
                    $liAll.toggle();
                    $agreement = 1;
                } else if ($agreement === 1) {
                    $(this).removeClass("fold")
                    $liAll.toggle();
                    $agreement = 0;
                }
            })
            //二维码点击
            $('.two_dimension_code').click(function () {
                $('.two_dimension_code').toggle();
                $('.login_pc').toggle();
                $('.login_code').toggle();
                $('.static_pc').toggle();
            })
            $('.static_pc').click(function () {
                $('.two_dimension_code').toggle();
                $('.login_pc').toggle();
                $('.login_code').toggle();
                $('.static_pc').toggle();
            })
            //刷新二维码
            $('.login_code_handle').click(function () {
                _this.Refresh_erweima()
            })
            $('.refresh_btn').click(function () {
                _this.Refresh_erweima()
            })
        },
        //设置自动登入时cookie过期时间为7天
        overtime() {
            if ($agreement == 1) {
                $autotime = (60 * 60 * 24 * 7);
            } else {
                $autotime = -1;
            }
        },
        //刷新二维码
        Refresh_erweima() {
            $('.shade').css('display', 'none');
            $('.meg_error').css('display', 'none');
            this.autoOver();
        },
        //二维码自动过期
        autoOver() {
            setTimeout(_ => {
                $('.shade').css('display', 'block')
                $('.meg_error').css('display', 'block')
            }, 1000 * 15)
        },
        //登录
        query() {
            let name = $('#un').val();
            let password = $('#pwd').val();
            $.get(obj.login_query, {
                user: name,
                password: password
            }, function (data) {
                data = JSON.parse(data);
                console.log(data)
                //不存在
                if (data.code == 0) {
                    $('#error_tips').css('display','block')
                } else if (data.code == 200) {
                    //存在     
                    $('#error_tips').css('display','none')
                    data = data.data;
                    document.cookie = username + '=' + data.username + ';path= /;' +'max-age=' + $autotime ;    
                    document.cookie = id + '=' + data.id + ';path= /;' + 'max-age=' + $autotime;
                    document.location.href = obj.index;
                }
            })
        }
    }
}())
login.init()