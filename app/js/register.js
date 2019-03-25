var register = (function () {
    let $box, $ul, $liALL, $spanAll
    return {
        init() {
            $box = $('.form-ul');
            $liALL = $box.children()
            console.log($liALL)
            this.event();
        },
        event() {
            const _this = this;
            $('.help-box').hover(
                function () {
                    $('.help-ul').css('display', 'block')
                },
                function () {
                    $('.help-ul').css('display', 'none')
                }
            )
            $box.on('click', 'input', function () {
                _this.span(this);
            })
            $box.on('focus', 'input', function () {
                _this.focus(this);
            })
        },
        //span 移动出文本框
        span(input) {
            $(input).next().animate({ left: '-80' }, 1000)

        },
        //获取焦点
        focus(input) {
            let mun = $(input).index('input')
            if(mun == 2 || mun == 5){
                return ;
            }
            //根据  索引位置    从所有的li中找到对应的索引 ,再li中找到tishi，再找到false类名
            let tishi = $($liALL[mun]).last().children().last();
            $(tishi).css('display','block')
            let fal = tishi.children().first();
            let p = fal.children().last();
            //找到false下面的p标签 并把内容改成
            console.log(mun)
            $(p).html(()=>{
                console.log(mun)
                    if(mun === 0){
                            return '用户名由组成';
                        }else if(mun === 1){
                                return '请填写正确的手机号';
                            }else if(mun === 3){
                                    return '什么什么组成';
                                }else if(mun === 4){
                                        return '请再次输入密码';
                                    }
            }
           )
        }
    }
}())
register.init()