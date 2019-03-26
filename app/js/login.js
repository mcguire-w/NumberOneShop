
var login =(function(){
    let $agreement=0,$fold=0,$liAll
    return{
        init(){

            $liAll = $('.more_landing  li')
            this.event();
        },
        event(){
            const _this = this;
            //自动登入换图片
            $('#check_agreement').click(function(){
                if($agreement === 0){
                    $(this).attr('class',"check_agreement")
                    $agreement = 1;
                }else if($agreement === 1){
                    $(this).attr('class',"uncheck_agreement")
                    $agreement = 0;
                }
            })
            //跟多网站展示
            $('#fold').click(function(){
                if($agreement === 0){
                    $(this).addClass("fold")
                    $liAll.toggle();
                    $agreement = 1;
                }else if($agreement === 1){
                    $(this).removeClass("fold")
                    $liAll.toggle();
                    $agreement = 0;
                }
            })
        }
    }
}()) 
login.init()