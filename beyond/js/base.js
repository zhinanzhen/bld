/**
 * Created by Administrator on 2018/7/23.
 */
function back(){
    history.go(-1);
}
function goHref(){
    window.location.href="../html/location.html"
}
function isUserID(){
    var userId=localStorage.getItem('userId');
    if(userId){
        userId.replace(/\"/g,"");
    }else{
        window.location.href="./login.html";
    }
}
function AndroidBack(href_back){
    if(window.history && window.history.pushState) {
        $(window).on('popstate', function() {
            var hashLocation = location.hash;
            var hashSplit = hashLocation.split("#!/");
            var hashName = hashSplit[1];
            if(hashName !== '') {
                var hash = window.location.hash;
                if(hash === '') {
                  back();
                }
            }
        });
        window.history.pushState('forward', null,href_back);
    }
}
 /*XBack = {};

 (function(XBack) {
 XBack.STATE = 'x - back';
 XBack.element;

 XBack.onPopState = function(event) {
 event.state === XBack.STATE && XBack.fire();
 XBack.record(XBack.STATE); //初始化事件时，push一下
 };

 XBack.record = function(state) {
 history.pushState(state, null, location.href);
 };

 XBack.fire = function() {
 var event = document.createEvent('Events');
 event.initEvent(XBack.STATE, false, false);
 XBack.element.dispatchEvent(event);
 };

 XBack.listen = function(listener) {
 XBack.element.addEventListener(XBack.STATE, listener, false);
 };

 XBack.init = function() {
 XBack.element = document.createElement('span');
 window.addEventListener('popstate', XBack.onPopState);
 XBack.record(XBack.STATE);
 };

 })(XBack); // 引入这段js文件

 XBack.init();
 XBack.listen(function() {
 back();
 });*/




