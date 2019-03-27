var password_back = (function(){
    


    return{
        init(){



            this.event()
        },
        event(){
            const _this = this;
            $('.ysame_input').one('click',function(){
               _this.label()
            })
            //获取焦点
            $('.ysame_input').focus(function(){
                $('#show').addClass('ifocus')
                $('.y_tips_words').html('请输入手机号/邮箱/用户名')
            })
            //失去焦点
            $('.ysame_input').blur(function(){
                    $('#show').removeClass('ifocus')
                    
            })
            $('#confirmUser').click(function(){
                alert('抱歉,此用户已被封停使用')
            })
            
        },
        //span移动
        label(){
            $('.y_same_label').animate({'left':'-62px'},300)
        }
    }
}())
password_back.init()
