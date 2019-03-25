
var register = (function () {
    let $box, $ul, $liALL, $spanAll, $reg, $input, $tishi, $p, $true, $false,
        $btn, $data
    return {
        init() {
            $box = $('.form-ul');
            $reg = [/^[\u4e00-\u9fa5a-zA-Z0-9\-]{4,20}$/, /^1[357-9]\d{9}$/, '', /^\w{4,20}$/]
            $liALL = $box.children()
            $input = $('input');
            $tishi = $('.tishi');
            $p = $('p');
            $true = $('.true');
            $false = $('.false');
            $btn = $('.btn');

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
            //获取焦点
            $box.on('focus', 'input', function () {
                _this.focus(this);
            })
            //失去焦点
            $box.on('blur', 'input', function () {
                //  返回文本内容
                var bool;
                let ind = $(this).index('input')
                $(this).val(function (index, value) {
                    if (ind != 2 && ind != 4) {
                        bool = $reg[ind].test(value)
                    } else if (ind === 4) {
                        let str = $($input[3]).val()
                        if (value === str && value != '') {
                            bool = true;
                        } else {
                            bool = false
                        }
                    }
                    _this.blur(ind, bool)
                    return value;
                })
            })
            $($btn).click(function () {
                _this.focus($input[0]);
                _this.blur($input[0], false);
                $data = {
                    username: $('#username').val(),
                    phone: $('#phone').val(),
                    password: $('#password').val()
                };
                let flag = true;
                $true.each(function () {
                    if ($(this).css('display') == 'none') {
                        flag = false;
                        return flag;
                    }
                })
                if(flag){
                    //发送请求  url    数据   回调函数
                    $.post(obj.register, $data, function(result){
                      console.log(result)
                      if(result){
                        $('#my-alert').modal();
                        }else{
                            alert('网络错误请求失败');
                            console.log(result);
                        }
                    },'script')
                }
            })
            $('.am-modal-btn').on('click', function () {
                window.location.href = obj.login;
            })
        },
        //span 移动出文本框
        span(input) {
            $(input).next().animate({ left: '-80' }, 1000)
        },
        //获取焦点
        focus(input) {
            this.span(input)
            let mun = $(input).index('input')
            if (mun == 2) {
                return;
            }
            if (mun > 2) {
                mun -= 1;
            }

            $($tishi[mun]).css('display', 'block')

            $($p[mun]).html(() => {
                if (mun === 0) {
                    return "4-20位字符，可由中文、英文、数字或符号'_'组成";
                } else if (mun === 1) {
                    return '请填写正确的手机号，以便接收订单通知，找回密码等';
                } else if (mun === 3) {
                    return '6-20个大小写英文字母、符号或数字的组合';
                } else if (mun === 4) {
                    return '请再次输入密码';
                }
            }
            )
        },
        //失去焦点
        blur(index, bool) {
            //判断用户名是否存在
           if(index === 0){
            $.get(obj.register_name,{username:$($input[0]).val()},function(data){
                console.log(data);
                if(data){
                    bool = false
                    $($p[0]).html(_=>{
                        return '用户名已存在';
                    })
                }else{
                    $($p[0]).html(_=>{
                        return '用户名格式错误请输入正确的用户名';
                    })
                }
            })
           }else if(index === 1){
            $.get(obj.register_name,{username:$($input[1]).val()},function(data){
                if(data){
                    bool = false;
                    $($p[1]).html(_=>{
                        return '手机号码已注册';
                    })
                }else{
                    $($p[1]).html(_=>{
                        return '格式错误请输入正确的手机号码';
                    })
                }
            })
           }else if (index === 2) {
                return;
            }else if (index > 2) {
                index -= 1;
            }
            console.log(bool);
            if(bool) {
                $($false[index]).css('display', 'none');
                $($true[index]).css('display', 'block')
            } else {
                $($false[index]).css({ 'display': 'block', 'background': '#fff4d7' });
                $($true[index]).css('display', 'none')
                $($p[index]).html(_ => {
                    if (index === 3) {
                        return '密码应为6-20位字符';
                    } else if (index === 4) {
                        return '两次密码输入不一致';
                    }
                })
            }
        },
        //已存在
    }
}())
register.init()