var password_back = (function () {



    return {
        init() {



            this.event()
        },
        event() {
            const _this = this;
            $('.ysame_input').one('click', function () {
                _this.label()
            })
            //获取焦点
            $('.ysame_input').focus(function () {
                $('#show').addClass('ifocus')
                $('.y_tips_words').html('请输入手机号/邮箱/用户名')
            })
            //失去焦点
            $('.ysame_input').blur(function () {
                $('#show').removeClass('ifocus')

            })
            $('#confirmUser').click(function () {
                console.log(1)
                var val = $('.ysame_input').val()
                $.get(obj.password_back, { user: val }, function (data) {
                    data = JSON.parse(data);
                    console.log(data)
                    if (data.code == 0) {
                        alert('错误，毛有东西')
                    } else if (data.code == 200) {
                        alert('密码为' + data.data.password)
                    }

                })
            })

        },
        //span移动
        label() {
            $('.y_same_label').animate({ 'left': '-62px' }, 300)
        }
    }
}())
password_back.init()
