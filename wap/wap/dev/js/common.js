window.onload = function(){
    // 判断设备,抽奖奖品与Apple Inc.无关
    var isIOS       =    navigator.userAgent.match('iPad')|| navigator.userAgent.match('iPhone')|| navigator.userAgent.match('iPod') ,
        displayMess =    function(){

            if(isIOS && document.getElementById('isios')){
                document.getElementById('isios').style.display = "block";
            }
            
        };

    displayMess();
};